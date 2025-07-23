import { NextResponse } from "next/server"
import { serialize } from "cookie"

export async function POST() {
  // Clear the authentication cookie
  const cookie = serialize("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0, // Expire immediately
    path: "/",
    sameSite: "lax",
  })

  return new NextResponse(JSON.stringify({ success: true, message: "Logged out successfully" }), {
    status: 200,
    headers: { "Set-Cookie": cookie },
  })
}
