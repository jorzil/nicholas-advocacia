import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value
  const { pathname } = request.nextUrl

  console.log(`Middleware: Pathname: ${pathname}, Token present: ${!!token}`)

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      console.log("Middleware: No token found for admin route, redirecting to login.")
      // Redirect to login page if no token
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  // Protect admin API routes
  if (pathname.startsWith("/api/admin")) {
    if (!token) {
      console.log("Middleware: No token found for admin API route, returning 401.")
      // Return 401 for API routes if no token
      return new NextResponse(JSON.stringify({ message: "Authentication required" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/admin/:path*", // Protect all /admin routes
    "/api/admin/:path*", // Protect all /api/admin routes
  ],
}
