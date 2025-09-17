# Clerk Authentication Login Instructions

## Method 1: Email/Password Login
1. Navigate to http://localhost:3002/portal/login
2. Enter your credentials:
   - Email: `learn.4.2030@gmail.com`
   - Password: `learn@10108`
3. Click "Sign in to Portal"
4. You'll be redirected to /tools/calculator upon successful login

## Method 2: Google OAuth Login
1. Navigate to http://localhost:3002/portal/login
2. Click "Sign in with Google" button
3. You'll be redirected to Google's login page
4. Sign in with your Google account (learn.4.2030@gmail.com)
5. Authorize the application
6. You'll be redirected back to /sso-callback which will complete the authentication
7. Finally redirected to /tools/calculator

## What Happens After Login
After successful authentication (either method), you'll be able to:
- Access protected routes like /tools/calculator
- See your user information in the header
- Sign out using the "Sign Out" button

## SSO Callback Explained
The `/sso-callback` page is necessary for OAuth flows:
- When you sign in with Google, Clerk redirects you to Google
- After Google authentication, it redirects back to our `/sso-callback` page
- This page handles the OAuth response and completes the sign-in process
- Then it automatically redirects you to the protected area (/tools/calculator)

## Troubleshooting
If you see a 404 error on /sso-callback:
- ✅ Already fixed - the page has been created
- The page now handles OAuth redirects properly

## Test Authentication Status
Visit http://localhost:3002/test-auth to see:
- Current authentication status
- User information (if logged in)
- Quick links to login/logout