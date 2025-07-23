import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  const { username, password } = await request.json()

  // Lógica de autenticação simples (substitua por sua lógica real)
  if (username === "admin" && password === "nicholas2024") {
    const cookieStore = cookies()
    // Define um cookie de autenticação
    cookieStore.set("auth_token", "valid-admin-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 dia
      path: "/",
    })
    return NextResponse.json({ isAuthenticated: true, user: { username: "admin" } })
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  }
}
