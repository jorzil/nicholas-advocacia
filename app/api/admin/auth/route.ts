import { NextResponse } from "next/server"
import { serialize } from "cookie"

export async function POST(request: Request) {
  const { username, password } = await request.json()

  // Hardcoded credentials for demonstration purposes
  // In a real application, you would verify these against a database
  const VALID_USERNAME = "admin"
  const VALID_PASSWORD = "nicholas2024" // Updated password

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    // In a real app, generate a secure, unique token (e.g., JWT)
    const token = "valid-admin-token" // Mock token

    // Set the cookie
    const cookie = serialize("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
      sameSite: "lax",
    })

    return new NextResponse(JSON.stringify({ success: true, user: { username: VALID_USERNAME }, token }), {
      status: 200,
      headers: { "Set-Cookie": cookie },
    })
  } else {
    return NextResponse.json({ message: "Credenciais inválidas." }, { status: 401 })
  }
}
