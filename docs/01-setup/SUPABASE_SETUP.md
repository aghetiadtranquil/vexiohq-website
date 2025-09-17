# Supabase Authentication Setup Guide

## 1. Supabase Project Setup

### Create Supabase Account
1. Go to https://supabase.com
2. Sign up for free account
3. Create new project
4. Save your project credentials:
   - Project URL: `https://[PROJECT_ID].supabase.co`
   - Anon Public Key: `eyJ...` (safe to expose)
   - Service Role Key: `eyJ...` (keep secret!)

## 2. Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 3. Install Dependencies

```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs @supabase/auth-ui-react @supabase/auth-ui-shared
```

## 4. Configure Google OAuth in Supabase

1. Go to Supabase Dashboard > Authentication > Providers
2. Enable Google provider
3. Add Google OAuth credentials:
   - Go to Google Cloud Console
   - Create OAuth 2.0 Client ID
   - Add authorized redirect URI: `https://[PROJECT_ID].supabase.co/auth/v1/callback`
   - Copy Client ID and Client Secret to Supabase

## 5. Database Schema

Supabase automatically creates auth schema with users table.

### Additional User Profile Table (optional):
```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  company TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()),
  PRIMARY KEY (id)
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" 
  ON profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);
```

## 6. Supabase Client Setup

Create `/src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## 7. Authentication Hook

Create `/src/hooks/useSupabaseAuth.ts`:
```typescript
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

export function useSupabaseAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }
}
```

## 8. Login Methods

### Google OAuth Login:
```typescript
const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/tools/calculator`
    }
  })
}
```

### Email/Password Login:
```typescript
const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
}
```

### Sign Out:
```typescript
const signOut = async () => {
  await supabase.auth.signOut()
}
```

## 9. Protected Routes

Create middleware at `/src/middleware.ts`:
```typescript
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protect /tools/* routes
  if (req.nextUrl.pathname.startsWith('/tools')) {
    if (!session) {
      return NextResponse.redirect(new URL('/portal/login', req.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/tools/:path*']
}
```

## 10. Benefits of Supabase

✅ **Authentication**: Built-in OAuth providers (Google, GitHub, etc.)
✅ **Database**: PostgreSQL with real-time subscriptions
✅ **Storage**: File storage for user uploads
✅ **Security**: Row Level Security (RLS) policies
✅ **Real-time**: WebSocket subscriptions for live data
✅ **Edge Functions**: Serverless functions
✅ **Free Tier**: Generous free tier for startups

## 11. Testing Checklist

- [ ] User can sign up with Google
- [ ] User can sign in with email/password
- [ ] Session persists on page refresh
- [ ] Protected routes redirect to login
- [ ] User can sign out
- [ ] User profile data saved to database
- [ ] Calculator page only accessible when logged in

## 12. Production Checklist

- [ ] Environment variables set in production
- [ ] Custom domain configured
- [ ] Email templates customized
- [ ] Rate limiting configured
- [ ] Backup strategy in place
- [ ] Monitoring set up

---

## Quick Start Commands

```bash
# Install dependencies
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs

# Run development server
npm run dev

# Test authentication
# Visit http://localhost:3002/portal/login
```

## Support Resources

- Supabase Docs: https://supabase.com/docs
- Auth Helpers: https://supabase.com/docs/guides/auth/auth-helpers/nextjs
- Discord Community: https://discord.supabase.com