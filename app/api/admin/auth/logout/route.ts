import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  const cookieStore = cookies()
  // Remove o cookie de autenticação
  cookieStore.delete("auth_token")
  return NextResponse.json({ message: "Logged out successfully" })
}
