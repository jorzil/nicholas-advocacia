import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value
  const { pathname } = request.nextUrl

  // Log para depuração
  console.log(`Middleware: Pathname: ${pathname}, Token present: ${!!token}`)
  if (token) {
    console.log(`Middleware: Token value (first 5 chars): ${token.substring(0, 5)}...`)
  }

  // Permite acesso à página de login sem autenticação
  if (pathname === "/admin/login") {
    return NextResponse.next()
  }

  // Protege todas as outras rotas /admin
  if (pathname.startsWith("/admin")) {
    if (!token || token !== "valid-admin-token") {
      console.log(`Middleware: Unauthorized access to ${pathname}.`)

      // Se for uma requisição de API, retorna 401 JSON
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
      }
      // Se for uma página, redireciona para a página de login
      const loginUrl = new URL("/admin/login", request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"], // Aplica o middleware a todas as rotas /admin
}
