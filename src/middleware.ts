import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple middleware - Clerk authentication removed
// All routes are public for now
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
}
