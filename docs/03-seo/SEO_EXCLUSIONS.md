# SEO Exclusions and Pending Items

## Pages Excluded from SEO Optimization

### 1. Login Page (`/portal/login`)
- **Status**: ❌ EXCLUDED
- **Reason**: Critical runtime errors preventing user sign-in
- **Impact**: Blocks access to all protected pages
- **Action Required**: Wait for Dev team to fix runtime error before adding SEO
- **Date Reported**: Current session
- **Priority**: HIGH - Fix authentication first

### When Login Page is Fixed

Once the Dev team resolves the login page runtime error, implement:

1. **Metadata**:
```typescript
export const metadata: Metadata = {
  title: 'Sign In | VexioHQ Portal',
  description: 'Access your VexioHQ account to manage AI projects and view analytics',
  robots: {
    index: false,  // Don't index login pages
    follow: false,
    noarchive: true,
    nosnippet: true
  }
}
```

2. **Security Considerations**:
- No structured data on login pages
- No sitemap inclusion for portal pages
- Add to robots.txt disallow list
- Implement proper canonical URL
- No social media meta tags needed

3. **Protected Routes to Consider**:
- `/portal/dashboard`
- `/portal/projects`
- `/portal/analytics`
- `/portal/settings`
- `/portal/team`

## Other Exclusions

### System Pages (No SEO Needed)
- `/api/*` - API routes
- `/_next/*` - Next.js internal
- `/admin/*` - Admin panels (if any)

### Temporary Pages
- Test pages under `/test/*`
- Development pages

## Notes for QA Team

- Login page SEO is **intentionally excluded** due to runtime errors
- Do not test SEO on `/portal/login` until Dev team confirms fix
- All other pages should have complete SEO implementation
- Protected portal pages will need SEO after authentication is fixed

## Update Log

- **[Current Date]**: Login page excluded from SEO due to runtime errors
- **[Pending]**: Add SEO to login page after authentication fix