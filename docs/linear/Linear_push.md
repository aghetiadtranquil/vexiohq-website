Gotcha — you want Claude Code to (a) plan the work, (b) output a clean list of tasks, and then (c) a Python script should push those tasks into Linear as issues for the right project. Here’s a lean, repeatable setup that keeps effort tiny.

⸻

0) The simple workflow
	1.	Ask Claude Code (from your repo): “plan what’s needed to finish X.”
	2.	Claude outputs a tasks.json in a standard schema (below).
	3.	Run one Python script that reads tasks.json and creates/updates Linear issues in your chosen project.

Net effect: Claude does the thinking; Python does the pushing; Linear stays your execution cockpit.

⸻

1) Paste this prompt into Claude Code

Goal: Create a structured task plan to finish the current project efficiently.
Output format: Valid JSON only, matching the schema below. No prose.

Guidelines:
	•	8–15 issues max (keep it lean).
	•	Each issue should be completable in 30–90 minutes of focused work (not 5 min, not 1 day).
	•	Group tasks by stage: "stage": "Build" | "Docs" | "Demo" | "SEO" | "Launch".
	•	Use clear, action-first titles.
	•	Add a 1–2 sentence description.
	•	Set "priority": "high" | "medium" | "low".
	•	Optional: "labels": ["Now","SEO"] etc.
	•	Optional: "estimate_minutes": 45 (keep 30–90).

JSON schema:

{
  "project": "comapny-website",
  "tasks": [
    {
      "title": "Add /use-cases page",
      "description": "Create page with 3 industry use cases; internal links from Home.",
      "priority": "high",
      "stage": "Build",
      "labels": ["Now","Content"],
      "estimate_minutes": 60
    }
  ]
}

Only return JSON.

⸻

2) Example tasks.json (edit freely)

{
  "project": "comapny-website",
  "tasks": [
    {
      "title": "Fix CLS on homepage",
      "description": "Preload fonts; set image width/height; verify Lighthouse CLS < 0.1.",
      "priority": "high",
      "stage": "SEO",
      "labels": ["Now","SEO"],
      "estimate_minutes": 60
    },
    {
      "title": "Lead magnet PDF",
      "description": "Turn outline.md into a 6–8 page PDF; add CTA from navbar.",
      "priority": "medium",
      "stage": "Docs",
      "labels": ["Now","Content"],
      "estimate_minutes": 90
    }
  ]
}


⸻

3) Python: push tasks into Linear

Install

pip install requests python-dotenv

Create .env

LINEAR_API_KEY=YOUR_LINEAR_API_KEY

Save as push_linear.py

import json, os, sys, argparse
import requests
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("LINEAR_API_KEY")
ENDPOINT = "https://api.linear.app/graphql"

def gql(query, variables=None):
    headers = {"Authorization": API_KEY, "Content-Type": "application/json"}
    r = requests.post(ENDPOINT, headers=headers, json={"query": query, "variables": variables or {}})
    r.raise_for_status()
    data = r.json()
    if "errors" in data:
        raise RuntimeError(data["errors"])
    return data["data"]

def get_project_id_by_name(name):
    q = """
    query($first:Int,$after:String){
      projects(first:$first, after:$after){
        nodes{ id name }
        pageInfo{ hasNextPage endCursor }
      }
    }
    """
    after = None
    while True:
        d = gql(q, {"first":100, "after":after})
        for p in d["projects"]["nodes"]:
            if p["name"] == name:
                return p["id"]
        pi = d["projects"]["pageInfo"]
        if not pi["hasNextPage"]:
            break
        after = pi["endCursor"]
    return None

def get_all_issue_labels():
    q = """
    query($first:Int,$after:String){
      issueLabels(first:$first, after:$after){ nodes{ id name } pageInfo{ hasNextPage endCursor } }
    }
    """
    labels = {}
    after = None
    while True:
        d = gql(q, {"first":100, "after":after})
        for n in d["issueLabels"]["nodes"]:
            labels[n["name"].lower()] = n["id"]
        pi = d["issueLabels"]["pageInfo"]
        if not pi["hasNextPage"]:
            break
        after = pi["endCursor"]
    return labels

def create_issue(project_id, title, description, priority, label_ids, estimate_minutes):
    # Linear priorities: 1=urgent, 2=high, 3=medium, 4=low, 0=none
    pr_map = {"high":2, "medium":3, "low":4}
    priority_val = pr_map.get((priority or "medium").lower(), 3)

    # If your team has estimation enabled as "points", this will be ignored.
    # For minutes, we'll stash it in description suffix.
    if estimate_minutes:
        description = f"{description}\n\n_Estimate: ~{estimate_minutes} minutes_"

    m = """
    mutation($input: IssueCreateInput!){
      issueCreate(input:$input){ success issue{ id title } }
    }
    """
    variables = {"input":{
        "projectId": project_id,
        "title": title,
        "description": description or "",
        "priority": priority_val,
        "labelIds": label_ids or []
    }}
    return gql(m, variables)

def find_issue_in_project_by_title(project_id, title):
    q = """
    query($query:String!){
      issues(filter:{ project: { id: { eq: "%s" } } }, query:$query, first: 20){
        nodes{ id title }
      }
    }
    """ % project_id
    # Linear full-text search:
    d = gql(q, {"query": title})
    for n in d["issues"]["nodes"]:
        if n["title"].strip().lower() == title.strip().lower():
            return n["id"]
    return None

def update_issue(issue_id, fields):
    m = """
    mutation($id:String!, $input: IssueUpdateInput!){
      issueUpdate(id:$id, input:$input){ success issue{ id title } }
    }
    """
    return gql(m, {"id": issue_id, "input": fields})

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--file", required=True, help="Path to tasks.json")
    parser.add_argument("--project", help="Override project name in JSON")
    parser.add_argument("--labels", help="Comma-separated extra labels to add (e.g. Now,SEO)")
    parser.add_argument("--update", action="store_true", help="Update if same-title issue exists")
    args = parser.parse_args()

    if not API_KEY:
        print("Missing LINEAR_API_KEY in .env", file=sys.stderr)
        sys.exit(1)

    data = json.load(open(args.file))
    project_name = args.project or data.get("project")
    if not project_name:
        print("No project name provided.", file=sys.stderr)
        sys.exit(1)

    project_id = get_project_id_by_name(project_name)
    if not project_id:
        print(f"Project not found: {project_name}", file=sys.stderr)
        sys.exit(1)

    all_labels = get_all_issue_labels()
    extra_labels = [s.strip() for s in (args.labels or "").split(",") if s.strip()]
    created = 0; updated = 0

    for t in data.get("tasks", []):
        title = t["title"]
        description = t.get("description","")
        priority = t.get("priority","medium")
        estimate = t.get("estimate_minutes")
        labels = [*(t.get("labels") or []), *extra_labels]

        label_ids = [all_labels[l.lower()] for l in labels if l and l.lower() in all_labels]

        existing_id = find_issue_in_project_by_title(project_id, title) if args.update else None
        if existing_id:
            update_issue(existing_id, {
                "description": description,
                "priority": {"high":2,"medium":3,"low":4}.get(priority,3),
                "labelIds": label_ids
            })
            print(f"↻ Updated: {title}")
            updated += 1
        else:
            create_issue(project_id, title, description, priority, label_ids, estimate)
            print(f"✓ Created: {title}")
            created += 1

    print(f"Done. Created {created}, Updated {updated}.")

if __name__ == "__main__":
    main()

Run it

python push_linear.py --file tasks.json --project "comapny-website" --labels Now,SEO --update

	•	--labels adds defaults to every issue (optional).
	•	--update will update an existing issue if it finds the same title in that project (prevents dupes).

⸻

What about “5-min vs 2-min tasks”?
	•	Linear issues should be 30–90 minutes each.
	•	5-minute micro-tasks = checklist items inside an issue (Claude can include a bullet list inside description).
	•	If a thing takes >90 minutes, split it into multiple issues (keeps momentum and estimation honest).

⸻

Minimal rules for quality
	•	Title: starts with a verb (“Fix CLS on homepage”).
	•	Description: 1–2 sentences, include acceptance criteria or a checklist.
	•	Priority: be honest (only 2–3 “high” per cycle).
	•	Estimate: 30–90 minutes.
	•	Limit WIP: 5–10 issues per 2-week cycle across all Now projects.

⸻

If you want, I can also add a tiny option to the script to drop issues directly into the current Cycle (if you use cycles). Want that switch added?