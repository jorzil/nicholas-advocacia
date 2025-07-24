import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase environment variables")
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)

// Helper to get Supabase client with user's session
function getSupabaseClient() {
  const cookieStore = cookies()
  const supabaseAccessToken = cookieStore.get("supabase-access-token")?.value
  const supabaseRefreshToken = cookieStore.get("supabase-refresh-token")?.value

  if (!supabaseAccessToken || !supabaseRefreshToken) {
    return null
  }

  const supabase = createClient(supabaseUrl!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: {
      persistSession: false,
    },
  })

  // Set session for the request
  supabase.auth.setSession({
    access_token: supabaseAccessToken,
    refresh_token: supabaseRefreshToken,
  })

  return supabase
}

export async function GET(request: Request) {
  const supabase = getSupabaseClient()
  if (!supabase) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")
  const offset = (page - 1) * limit

  let dbQuery = supabaseAdmin
    .from("blog_posts")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })

  if (query) {
    dbQuery = dbQuery.ilike("title", `%${query}%`)
  }

  const { data, error, count } = await dbQuery.range(offset, offset + limit - 1)

  if (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({
    posts: data,
    total: count,
    page,
    limit,
  })
}

export async function POST(request: Request) {
  const supabase = getSupabaseClient()
  if (!supabase) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title, content, imageUrl, author, tags, slug, description } = await request.json()

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .insert([{ title, content, image_url: imageUrl, author, tags, slug, description }])
    .select()

  if (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data[0], { status: 201 })
}
