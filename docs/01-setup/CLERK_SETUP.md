# Clerk Authentication Setup

## Quick Setup (5 minutes)

### 1. Create Clerk Account
1. Go to https://clerk.com
2. Sign up for free account
3. Create new application
4. Choose "Next.js" as framework

### 2. Get API Keys
From Clerk Dashboard, copy:
- Publishable Key: `pk_test_...`
- Secret Key: `sk_test_...`

### 3. Install Clerk
```bash
npm install @clerk/nextjs
```

### 4. Environment Variables
Add to `.env.local`:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/portal/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/portal/register
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/tools/calculator
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/tools/calculator
```

### 5. Update Layout
In `src/app/layout.tsx`:
```tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
```

### 6. Create Middleware
Create `src/middleware.ts`:
```tsx
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/blog(.*)",
    "/contact",
    "/api/webhook(.*)",
  ],
  ignoredRoutes: [
    "/api/webhook(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

### 7. Login Page
Update `/portal/login/page.tsx`:
```tsx
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn 
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-xl",
          }
        }}
      />
    </div>
  );
}
```

### 8. User Button (for logged-in users)
Add to navigation:
```tsx
import { UserButton } from "@clerk/nextjs";

// In your nav component
<UserButton afterSignOutUrl="/" />
```

### 9. Protect Pages
```tsx
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const { userId } = auth();
  
  if (!userId) {
    redirect("/portal/login");
  }

  return <div>Protected content</div>;
}
```

### 10. Get User Info
```tsx
import { currentUser } from "@clerk/nextjs";

export default async function Page() {
  const user = await currentUser();
  
  return <div>Hello {user?.firstName}</div>;
}
```

## Features You Get Instantly

✅ **Authentication**
- Email/password
- Google OAuth
- Microsoft OAuth
- GitHub OAuth
- Magic links
- SMS authentication

✅ **User Management**
- User profiles
- Avatar upload
- Profile editing
- Email verification
- Phone verification

✅ **Security**
- Multi-factor authentication
- Session management
- Device management
- Audit logs
- Bot protection

✅ **Developer Tools**
- Webhooks
- User impersonation
- Test accounts
- API access
- SDK for all platforms

## Customization

### Brand Colors
In Clerk Dashboard > Appearance:
- Primary color: #0070f3
- Logo: Upload your logo
- Favicon: Upload favicon

### Custom Fields
Add custom user fields in Dashboard:
- Company name
- Phone number
- Department
- Job title

### Webhooks
Set up webhooks for:
- User created
- User updated
- User deleted
- Session created

## Production Checklist

- [ ] Upgrade to production keys
- [ ] Configure custom domain
- [ ] Set up webhooks
- [ ] Enable MFA requirement
- [ ] Configure session lifetime
- [ ] Set up email templates
- [ ] Add terms of service
- [ ] Configure OAuth providers
- [ ] Test all auth flows

## Pricing

**Free Tier:**
- 5,000 monthly active users
- Unlimited logins
- All auth methods
- Community support

**Pro ($25/month):**
- 10,000 MAU included
- $0.02 per additional MAU
- Priority support
- Advanced security
- Custom domains

## Why Clerk is Perfect for DataTranquil

1. **Professional appearance** - Enterprise-grade auth UI
2. **Quick implementation** - Launch today, not next month
3. **Scalable** - Handles growth from startup to enterprise
4. **Compliant** - SOC 2, GDPR ready
5. **Reliable** - 99.99% uptime SLA

## Support

- Documentation: https://clerk.com/docs
- Discord: https://discord.com/invite/b5rXHjAg7A
- Email: support@clerk.com