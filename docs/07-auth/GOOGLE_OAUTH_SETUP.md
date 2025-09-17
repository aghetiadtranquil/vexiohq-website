# Google OAuth Setup for Clerk

## The Error
You're seeing "Failed to sign in with Google" because Google OAuth needs to be configured in your Clerk Dashboard.

## Solution Steps

### Step 1: Enable Google OAuth in Clerk Dashboard

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Sign in with your Clerk account
3. Select your application (flowing-finch-92)
4. Navigate to **User & Authentication** → **Social Connections**
5. Find **Google** in the list
6. Toggle it **ON**

### Step 2: Configure Google OAuth (Option A - Use Clerk's OAuth)

If you want to use Clerk's built-in Google OAuth app (easiest):
1. In the Google settings in Clerk, select **"Use Clerk's OAuth application"**
2. Save the settings
3. That's it! Google sign-in should now work

### Step 3: Configure Google OAuth (Option B - Use Your Own)

If you want to use your own Google OAuth credentials:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google+ API:
   - Go to **APIs & Services** → **Library**
   - Search for "Google+ API"
   - Click Enable

4. Create OAuth 2.0 Credentials:
   - Go to **APIs & Services** → **Credentials**
   - Click **Create Credentials** → **OAuth client ID**
   - Choose **Web application**
   - Add Authorized redirect URIs:
     ```
     https://flowing-finch-92.clerk.accounts.dev/v1/oauth_callback
     ```
   - Copy the **Client ID** and **Client Secret**

5. Add to Clerk:
   - Go back to Clerk Dashboard
   - In Google settings, select **"Use custom OAuth credentials"**
   - Paste your Client ID and Client Secret
   - Save

### Step 4: Test the Integration

1. Clear your browser cache/cookies
2. Go to http://localhost:3002/portal/login
3. Click "Sign in with Google"
4. You should see Google's sign-in page
5. After signing in, you'll be redirected to /tools/calculator

## Alternative: Use Email/Password Login

While setting up Google OAuth, you can use the email/password login:
- Email: `learn.4.2030@gmail.com`
- Password: `learn@10108`

## Common Issues

### "Failed to sign in with Google"
- Google OAuth is not enabled in Clerk Dashboard
- Solution: Follow Step 1 above

### Redirect URI mismatch
- The redirect URI in Google Console doesn't match Clerk's
- Solution: Use exactly: `https://flowing-finch-92.clerk.accounts.dev/v1/oauth_callback`

### 404 on /sso-callback
- Already fixed in the code
- The callback page exists and handles OAuth redirects

## Current Status
✅ Code is ready for Google OAuth
✅ SSO callback page created
✅ Middleware configured
❌ Google OAuth needs to be enabled in Clerk Dashboard

## Next Steps
1. Log into your Clerk Dashboard
2. Enable Google OAuth (Step 1 above)
3. Choose either Clerk's OAuth app or configure your own
4. Test the login flow