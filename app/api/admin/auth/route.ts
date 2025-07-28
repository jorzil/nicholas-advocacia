import { NextResponse } from "next/server"
import { serialize } from "cookie"

export async function POST(request: Request) {
  const { username, password } = await request.json()

  // In a real application, you would validate these against a database
  // and use secure password hashing (e.g., bcrypt).
  // For this example, we'll use simple environment variables.
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Set a simple cookie for authentication
    const cookie = serialize("auth_token", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure in production
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return new NextResponse(JSON.stringify({ success: true, message: "Login successful" }), {
      status: 200,
      headers: { "Set-Cookie": cookie },
    })
  } else {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
  }
}
