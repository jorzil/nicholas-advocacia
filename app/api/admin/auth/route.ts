import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  const { username, password } = await request.json()

  // Hardcoded credentials for demonstration
  if (username === "admin" && password === "nicholas2024") {
    const cookieStore = cookies()
    // Set a mock authentication token. In a real app, this would be a JWT or session ID.
    cookieStore.set("auth_token", "valid-admin-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })
    return NextResponse.json({ message: "Login successful" })
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  }
}
