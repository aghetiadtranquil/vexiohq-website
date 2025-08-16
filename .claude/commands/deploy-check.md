# Deploy Check

Run all pre-deployment checks to ensure code is ready for production.

## Steps:
1. Check current branch (should be main)
2. Run npm install to ensure dependencies are up to date
3. Run build process
4. Run linting
5. Run type checking
6. Check for any uncommitted changes
7. Show deployment readiness status

If any check fails, provide clear instructions on how to fix it.