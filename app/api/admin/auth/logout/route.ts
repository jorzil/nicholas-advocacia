import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export async function POST() {
  const cookieStore = cookies()
  const supabaseAccessToken = cookieStore.get("supabase-access-token")?.value
  const supabaseRefreshToken = cookieStore.get("supabase-refresh-token")?.value

  if (!supabaseAccessToken || !supabaseRefreshToken) {
    return NextResponse.json({ message: "No active session to log out" }, { status: 200 })
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

  const { error } = await supabase.auth.signOut()

  // Clear cookies regardless of signOut API success, as they are client-side
  cookieStore.delete("supabase-access-token")
  cookieStore.delete("supabase-refresh-token")

  if (error) {
    console.error("Supabase sign-out error:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: "Logout successful" }, { status: 200 })
}
