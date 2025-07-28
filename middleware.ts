import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    const authToken = request.cookies.get("auth_token")?.value

    // If no auth token or token is not 'true', redirect to login
    if (!authToken || authToken !== "true") {
      // Allow access to the login page itself
      if (pathname === "/admin/login") {
        return NextResponse.next()
      }
      // Redirect all other /admin paths to login
      const loginUrl = new URL("/admin/login", request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all paths under /admin
}
