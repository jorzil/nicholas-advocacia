import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value
  const { pathname } = request.nextUrl

  // Log para depuração: verifica se o token está presente e qual o pathname
  console.log(`Middleware: Pathname: ${pathname}, Token present: ${!!token}`)
  if (token) {
    console.log(`Middleware: Token value (first 5 chars): ${token.substring(0, 5)}...`)
  }

  // Allow access to the login page without authentication
  if (pathname === "/admin/login") {
    return NextResponse.next()
  }

  // Protect all other admin routes
  if (pathname.startsWith("/admin")) {
    if (!token || token !== "valid-admin-token") {
      console.log(`Middleware: Redirecting to login for ${pathname} due to missing/invalid token.`)
      // Redirect to login page if not authenticated
      const loginUrl = new URL("/admin/login", request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all /admin routes
}
