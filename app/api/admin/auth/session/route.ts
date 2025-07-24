import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export async function GET() {
  const cookieStore = cookies()
  const supabaseAccessToken = cookieStore.get("supabase-access-token")?.value
  const supabaseRefreshToken = cookieStore.get("supabase-refresh-token")?.value

  if (!supabaseAccessToken || !supabaseRefreshToken) {
    return NextResponse.json({ user: null, session: null }, { status: 200 })
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

  const {
    data: { user, session },
    error,
  } = await supabase.auth.getSession()

  if (error) {
    console.error("Error getting session:", error.message)
    // Clear cookies if session is invalid
    cookieStore.delete("supabase-access-token")
    cookieStore.delete("supabase-refresh-token")
    return NextResponse.json({ user: null, session: null }, { status: 200 })
  }

  return NextResponse.json({ user, session }, { status: 200 })
}
