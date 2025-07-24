import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow API routes and static assets to pass through
  if (pathname.startsWith("/api/") || pathname.startsWith("/_next/static/") || pathname.includes(".")) {
    return NextResponse.next()
  }

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/servicos", "/sobre", "/contato", "/blog", "/admin/login"]
  if (publicRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))) {
    return NextResponse.next()
  }

  // Protected routes (admin pages)
  if (pathname.startsWith("/admin")) {
    const supabaseAccessToken = request.cookies.get("supabase-access-token")?.value
    const supabaseRefreshToken = request.cookies.get("supabase-refresh-token")?.value

    if (!supabaseAccessToken || !supabaseRefreshToken) {
      // Redirect to login if no tokens
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })

    // Set session for the request
    supabase.auth.setSession({
      access_token: supabaseAccessToken,
      refresh_token: supabaseRefreshToken,
    })

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    if (error || !user) {
      console.error("Authentication error in middleware:", error?.message || "No user found")
      // Clear invalid cookies and redirect to login
      const response = NextResponse.redirect(new URL("/admin/login", request.url))
      response.cookies.delete("supabase-access-token")
      response.cookies.delete("supabase-refresh-token")
      return response
    }

    // User is authenticated, proceed
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
