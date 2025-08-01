import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


const isPublicRoute = createRouteMatcher(['/', '/vault/waitlist'])

export default clerkMiddleware(async (auth, req) => {
  const {userId} = await auth();
  if (!isPublicRoute(req)&& !userId) {
    const url = new URL('/vault/waitlist', req.url);
    return NextResponse.redirect(url);
  }
 return NextResponse.next();
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};