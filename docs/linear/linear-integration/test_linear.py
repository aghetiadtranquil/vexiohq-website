#!/usr/bin/env python3
"""
Test Linear API connection and create a test task
"""

import os
import sys
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def test_connection():
    """Test Linear API connection"""
    api_key = os.getenv("LINEAR_API_KEY")
    
    if not api_key:
        print("❌ LINEAR_API_KEY not found in .env file")
        print("\n📝 Instructions:")
        print("1. Copy .env.template to .env")
        print("2. Get your API key from: https://linear.app/settings/api")
        print("3. Add it to .env file")
        return False
    
    print(f"✅ API Key found: {api_key[:10]}...")
    
    # Test the connection
    import requests
    
    headers = {
        "Authorization": api_key,
        "Content-Type": "application/json"
    }
    
    # Simple query to test connection
    query = """
    query {
        viewer {
            id
            name
            email
        }
        teams {
            nodes {
                id
                name
            }
        }
    }
    """
    
    try:
        response = requests.post(
            "https://api.linear.app/graphql",
            headers=headers,
            json={"query": query}
        )
        
        if response.status_code == 200:
            data = response.json()
            if "errors" in data:
                print(f"❌ GraphQL Error: {data['errors']}")
                return False
            
            viewer = data.get("data", {}).get("viewer", {})
            teams = data.get("data", {}).get("teams", {}).get("nodes", [])
            
            print(f"✅ Connected as: {viewer.get('name')} ({viewer.get('email')})")
            print(f"✅ Found {len(teams)} team(s):")
            for team in teams:
                print(f"   - {team['name']} ({team['id']})")
            
            return True
        else:
            print(f"❌ HTTP Error {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Connection failed: {str(e)}")
        return False

def create_test_task():
    """Create a test task in Linear"""
    api_key = os.getenv("LINEAR_API_KEY")
    
    if not api_key:
        print("❌ Cannot create test task without API key")
        return
    
    print("\n📋 Creating test task...")
    
    # Import our custom client
    sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    from push_linear import LinearClient
    
    client = LinearClient(api_key)
    
    try:
        # Get or create project
        project_id = client.create_project_if_needed("comapny-website")
        
        # Create test task
        test_task = {
            "title": f"Test Task - Created by Claude Code at {datetime.now().strftime('%H:%M:%S')}",
            "description": "This is a test task to verify Linear integration is working correctly.",
            "priority": "low",
            "labels": ["Test", "Integration"],
            "estimate_minutes": 5,
            "acceptance_criteria": [
                "Task appears in Linear",
                "All fields are populated correctly",
                "Can be updated and deleted"
            ],
            "technical_notes": "Created by linear-integration/test_linear.py",
            "initial_comment": "🎉 Linear integration is working! This task was created automatically by Claude Code."
        }
        
        issue = client.create_issue_with_context(project_id, test_task)
        print(f"✅ Test task created successfully!")
        print(f"   View it here: {issue['url']}")
        
        # Add a follow-up comment
        client.add_comment(
            issue["id"],
            "✅ Task creation verified. The integration is working correctly!"
        )
        print(f"✅ Added verification comment")
        
        return True
        
    except Exception as e:
        print(f"❌ Failed to create test task: {str(e)}")
        return False

def main():
    """Main test function"""
    print("🔧 Linear Integration Test")
    print("=" * 50)
    
    # Test connection
    if test_connection():
        print("\n" + "=" * 50)
        # Create test task
        if create_test_task():
            print("\n" + "=" * 50)
            print("🎉 All tests passed! Linear integration is ready.")
            print("\n📚 Next steps:")
            print("1. Run: python linear-integration/push_linear.py --file tasks.json")
            print("2. Check Linear for the created tasks")
            print("3. Start working on the tasks!")
        else:
            print("\n⚠️  Connection works but couldn't create task")
    else:
        print("\n❌ Please fix the connection issues above")

if __name__ == "__main__":
    main()