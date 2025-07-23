import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get("auth_token")?.value

  if (token === "valid-admin-token") {
    // Em uma aplicação real, você decodificaria e verificaria o token
    return NextResponse.json({ isAuthenticated: true, user: { username: "admin" } })
  } else {
    return NextResponse.json({ isAuthenticated: false }, { status: 401 })
  }
}
