import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  const { username, password } = await request.json()

  // Hardcoded credentials for demonstration purposes
  // In a real application, you would validate against a database
  if (username === "admin" && password === "nicholas2024") {
    // Simulate a token generation
    const token = "valid-admin-token" // This should be a JWT in a real app

    // Set a secure, httpOnly cookie
    cookies().set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return NextResponse.json({ message: "Login successful", user: { username: "admin" }, token })
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  }
}
