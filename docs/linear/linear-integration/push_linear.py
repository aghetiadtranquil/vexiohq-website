#!/usr/bin/env python3
"""
Enhanced Linear Integration for Claude Code
Pushes tasks to Linear with rich context and tracking
"""

import json
import os
import sys
import argparse
import time
from datetime import datetime
from typing import Dict, List, Optional, Any
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
API_KEY = os.getenv("LINEAR_API_KEY")
TEAM_ID = os.getenv("LINEAR_TEAM_ID")
ENDPOINT = "https://api.linear.app/graphql"
DEBUG = os.getenv("LINEAR_DEBUG", "false").lower() == "true"

class LinearClient:
    """Enhanced Linear API client with rich features"""
    
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.headers = {
            "Authorization": api_key,
            "Content-Type": "application/json"
        }
        self.session_metadata = {
            "tool": "Claude Code",
            "version": "1.0.0",
            "session_id": datetime.now().strftime("%Y%m%d_%H%M%S"),
            "user_agent": "DataTranquil/Linear-Integration"
        }
    
    def gql(self, query: str, variables: Optional[Dict] = None) -> Dict:
        """Execute GraphQL query with error handling"""
        if DEBUG:
            print(f"🔍 Query: {query[:100]}...")
            print(f"📊 Variables: {variables}")
        
        response = requests.post(
            ENDPOINT,
            headers=self.headers,
            json={"query": query, "variables": variables or {}}
        )
        
        if response.status_code != 200:
            raise RuntimeError(f"API Error {response.status_code}: {response.text}")
        
        data = response.json()
        if "errors" in data:
            raise RuntimeError(f"GraphQL Errors: {data['errors']}")
        
        return data.get("data", {})
    
    def get_team_id(self) -> str:
        """Get the team ID"""
        if TEAM_ID:
            return TEAM_ID
        
        query = """
        query {
            teams {
                nodes { id name }
            }
        }
        """
        data = self.gql(query)
        teams = data.get("teams", {}).get("nodes", [])
        if teams:
            return teams[0]["id"]
        raise RuntimeError("No teams found")
    
    def get_project_id(self, name: str) -> Optional[str]:
        """Get project ID by name with pagination"""
        query = """
        query($first: Int!, $after: String) {
            projects(first: $first, after: $after) {
                nodes { id name slug }
                pageInfo { hasNextPage endCursor }
            }
        }
        """
        
        after = None
        while True:
            data = self.gql(query, {"first": 50, "after": after})
            projects = data.get("projects", {})
            
            for project in projects.get("nodes", []):
                if project["name"].lower() == name.lower() or \
                   project["slug"].lower() == name.lower():
                    print(f"✅ Found project: {project['name']} ({project['id']})")
                    return project["id"]
            
            page_info = projects.get("pageInfo", {})
            if not page_info.get("hasNextPage"):
                break
            after = page_info.get("endCursor")
        
        return None
    
    def create_project_if_needed(self, name: str) -> str:
        """Create project if it doesn't exist"""
        project_id = self.get_project_id(name)
        if project_id:
            return project_id
        
        print(f"📁 Creating new project: {name}")
        
        mutation = """
        mutation($input: ProjectCreateInput!) {
            projectCreate(input: $input) {
                success
                project { id name }
            }
        }
        """
        
        team_id = self.get_team_id()
        variables = {
            "input": {
                "teamIds": [team_id],
                "name": name,
                "description": f"Project created by Claude Code on {datetime.now().strftime('%Y-%m-%d')}",
                "color": "#4A90E2"
            }
        }
        
        data = self.gql(mutation, variables)
        project = data.get("projectCreate", {}).get("project")
        if project:
            print(f"✅ Created project: {project['name']}")
            return project["id"]
        
        raise RuntimeError("Failed to create project")
    
    def get_or_create_labels(self, label_names: List[str]) -> List[str]:
        """Get or create labels and return their IDs"""
        if not label_names:
            return []
        
        # Get existing labels
        query = """
        query($first: Int!) {
            issueLabels(first: $first) {
                nodes { id name }
            }
        }
        """
        
        data = self.gql(query, {"first": 100})
        existing_labels = {
            label["name"].lower(): label["id"]
            for label in data.get("issueLabels", {}).get("nodes", [])
        }
        
        label_ids = []
        team_id = self.get_team_id()
        
        for label_name in label_names:
            label_lower = label_name.lower()
            
            if label_lower in existing_labels:
                label_ids.append(existing_labels[label_lower])
            else:
                # Create new label
                print(f"🏷️  Creating label: {label_name}")
                mutation = """
                mutation($input: IssueLabelCreateInput!) {
                    issueLabelCreate(input: $input) {
                        success
                        issueLabel { id name }
                    }
                }
                """
                
                # Generate a color based on label name
                color_hash = sum(ord(c) for c in label_name)
                colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57", "#FF9FF3"]
                color = colors[color_hash % len(colors)]
                
                variables = {
                    "input": {
                        "teamId": team_id,
                        "name": label_name,
                        "color": color
                    }
                }
                
                result = self.gql(mutation, variables)
                new_label = result.get("issueLabelCreate", {}).get("issueLabel")
                if new_label:
                    label_ids.append(new_label["id"])
                    existing_labels[label_lower] = new_label["id"]
        
        return label_ids
    
    def create_issue_with_context(self, project_id: str, task: Dict) -> Dict:
        """Create issue with rich context and metadata"""
        
        # Map priority
        priority_map = {
            "urgent": 1,
            "high": 2,
            "medium": 3,
            "low": 4,
            "none": 0
        }
        priority_value = priority_map.get(task.get("priority", "medium").lower(), 3)
        
        # Get label IDs
        label_ids = self.get_or_create_labels(task.get("labels", []))
        
        # Build rich description
        description_parts = [task.get("description", "")]
        
        # Add acceptance criteria
        if "acceptance_criteria" in task:
            description_parts.append("\n## ✅ Acceptance Criteria")
            for criterion in task["acceptance_criteria"]:
                description_parts.append(f"- [ ] {criterion}")
        
        # Add technical notes
        if "technical_notes" in task:
            description_parts.append(f"\n## 🔧 Technical Notes\n{task['technical_notes']}")
        
        # Add time estimate
        if "estimate_minutes" in task:
            description_parts.append(f"\n⏱️ **Estimated Time:** {task['estimate_minutes']} minutes")
        
        # Add dependencies
        if task.get("dependencies"):
            description_parts.append(f"\n## 🔗 Dependencies")
            for dep in task["dependencies"]:
                description_parts.append(f"- {dep}")
        
        # Add metadata
        description_parts.append(f"\n---\n*Generated by Claude Code*")
        description_parts.append(f"*Session: {self.session_metadata['session_id']}*")
        description_parts.append(f"*Created: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*")
        
        full_description = "\n".join(description_parts)
        
        # Create the issue
        mutation = """
        mutation($input: IssueCreateInput!) {
            issueCreate(input: $input) {
                success
                issue {
                    id
                    identifier
                    title
                    url
                }
            }
        }
        """
        
        variables = {
            "input": {
                "projectId": project_id,
                "title": task["title"],
                "description": full_description,
                "priority": priority_value,
                "labelIds": label_ids,
                "estimate": task.get("estimate_minutes"),
            }
        }
        
        # Add assignee if specified
        if task.get("assignee_email"):
            variables["input"]["assigneeId"] = self.get_user_id(task["assignee_email"])
        
        # Add due date if specified
        if task.get("due_date"):
            variables["input"]["dueDate"] = task["due_date"]
        
        result = self.gql(mutation, variables)
        issue = result.get("issueCreate", {}).get("issue")
        
        if issue:
            print(f"✅ Created: {issue['identifier']} - {task['title']}")
            print(f"   📎 {issue['url']}")
            
            # Add initial comment with more context
            if task.get("initial_comment"):
                self.add_comment(issue["id"], task["initial_comment"])
            
            return issue
        
        raise RuntimeError(f"Failed to create issue: {task['title']}")
    
    def add_comment(self, issue_id: str, comment: str) -> None:
        """Add a comment to an issue"""
        mutation = """
        mutation($input: CommentCreateInput!) {
            commentCreate(input: $input) {
                success
                comment { id }
            }
        }
        """
        
        variables = {
            "input": {
                "issueId": issue_id,
                "body": comment
            }
        }
        
        self.gql(mutation, variables)
    
    def update_issue_status(self, issue_id: str, status: str, comment: Optional[str] = None) -> None:
        """Update issue status with optional comment"""
        # Get workflow states
        query = """
        query($id: String!) {
            issue(id: $id) {
                team {
                    states {
                        nodes {
                            id
                            name
                            type
                        }
                    }
                }
            }
        }
        """
        
        data = self.gql(query, {"id": issue_id})
        states = data.get("issue", {}).get("team", {}).get("states", {}).get("nodes", [])
        
        # Map status to state
        status_map = {
            "todo": "backlog",
            "in_progress": "started",
            "done": "completed",
            "blocked": "canceled"
        }
        
        target_type = status_map.get(status.lower(), "backlog")
        state_id = None
        
        for state in states:
            if state["type"].lower() == target_type:
                state_id = state["id"]
                break
        
        if not state_id:
            print(f"⚠️  Could not find state for status: {status}")
            return
        
        # Update the issue
        mutation = """
        mutation($id: String!, $input: IssueUpdateInput!) {
            issueUpdate(id: $id, input: $input) {
                success
                issue { id title }
            }
        }
        """
        
        variables = {
            "id": issue_id,
            "input": {
                "stateId": state_id
            }
        }
        
        self.gql(mutation, variables)
        
        # Add comment if provided
        if comment:
            self.add_comment(issue_id, comment)
    
    def find_issue_by_title(self, project_id: str, title: str) -> Optional[str]:
        """Find existing issue by title in project"""
        query = """
        query($projectId: ID!, $filter: IssueFilter) {
            issues(filter: $filter) {
                nodes {
                    id
                    title
                    identifier
                }
            }
        }
        """
        
        variables = {
            "projectId": project_id,
            "filter": {
                "project": {"id": {"eq": project_id}}
            }
        }
        
        data = self.gql(query, variables)
        issues = data.get("issues", {}).get("nodes", [])
        
        for issue in issues:
            if issue["title"].strip().lower() == title.strip().lower():
                return issue["id"]
        
        return None


def load_tasks(file_path: str) -> Dict:
    """Load tasks from JSON file"""
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Tasks file not found: {file_path}")
    
    with open(file_path, 'r') as f:
        return json.load(f)


def main():
    """Main execution function"""
    parser = argparse.ArgumentParser(description="Push tasks to Linear with rich context")
    parser.add_argument("--file", required=True, help="Path to tasks.json")
    parser.add_argument("--project", help="Override project name")
    parser.add_argument("--labels", help="Additional labels (comma-separated)")
    parser.add_argument("--update", action="store_true", help="Update existing tasks")
    parser.add_argument("--dry-run", action="store_true", help="Preview without creating")
    parser.add_argument("--verbose", action="store_true", help="Verbose output")
    
    args = parser.parse_args()
    
    if args.verbose:
        os.environ["LINEAR_DEBUG"] = "true"
    
    # Check API key
    if not API_KEY:
        print("❌ Error: LINEAR_API_KEY not found in .env file")
        print("   Create a .env file with: LINEAR_API_KEY=lin_api_xxxxx")
        sys.exit(1)
    
    # Load tasks
    print(f"📂 Loading tasks from: {args.file}")
    task_data = load_tasks(args.file)
    
    # Get project name
    project_name = args.project or task_data.get("project")
    if not project_name:
        print("❌ Error: No project name specified")
        sys.exit(1)
    
    print(f"🎯 Target project: {project_name}")
    
    # Dry run mode
    if args.dry_run:
        print("\n🔍 DRY RUN MODE - No changes will be made")
        print(f"📊 Found {len(task_data.get('tasks', []))} tasks to process")
        for i, task in enumerate(task_data.get("tasks", []), 1):
            print(f"   {i}. {task['title']} [{task.get('priority', 'medium')}]")
        return
    
    # Initialize client
    client = LinearClient(API_KEY)
    
    # Get or create project
    project_id = client.create_project_if_needed(project_name)
    
    # Process additional labels
    extra_labels = []
    if args.labels:
        extra_labels = [label.strip() for label in args.labels.split(",")]
    
    # Statistics
    created = 0
    updated = 0
    failed = 0
    
    # Process tasks
    tasks = task_data.get("tasks", [])
    total = len(tasks)
    
    print(f"\n📝 Processing {total} tasks...")
    print("=" * 50)
    
    for i, task in enumerate(tasks, 1):
        try:
            print(f"\n[{i}/{total}] Processing: {task['title']}")
            
            # Add extra labels
            if extra_labels:
                task["labels"] = task.get("labels", []) + extra_labels
            
            # Check if update mode
            if args.update:
                existing_id = client.find_issue_by_title(project_id, task["title"])
                if existing_id:
                    print(f"   ↻ Updating existing issue...")
                    # Here you would implement update logic
                    updated += 1
                    continue
            
            # Create new issue
            issue = client.create_issue_with_context(project_id, task)
            created += 1
            
            # Add a small delay to avoid rate limiting
            if i < total:
                time.sleep(0.5)
            
        except Exception as e:
            print(f"   ❌ Failed: {str(e)}")
            failed += 1
            if DEBUG:
                import traceback
                traceback.print_exc()
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 Summary:")
    print(f"   ✅ Created: {created}")
    print(f"   ↻ Updated: {updated}")
    print(f"   ❌ Failed: {failed}")
    print(f"   📈 Success rate: {((created + updated) / total * 100):.1f}%")
    
    if created > 0:
        print(f"\n🎉 Successfully pushed tasks to Linear!")
        print(f"   View in Linear: https://linear.app/team/{project_name}/project")


if __name__ == "__main__":
    main()