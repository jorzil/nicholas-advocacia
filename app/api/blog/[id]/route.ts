import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase environment variables")
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params

  const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single()

  if (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!data) {
    return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
  }

  return NextResponse.json(data)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const { title, content, imageUrl, author, tags, slug, description } = await request.json()

  const { data, error } = await supabase
    .from("blog_posts")
    .update({ title, content, image_url: imageUrl, author, tags, slug, description })
    .eq("id", id)
    .select()

  if (error) {
    console.error(`Error updating blog post with ID ${id}:`, error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!data || data.length === 0) {
    return NextResponse.json({ error: "Blog post not found or no changes made" }, { status: 404 })
  }

  return NextResponse.json(data[0])
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params

  const { error } = await supabase.from("blog_posts").delete().eq("id", id)

  if (error) {
    console.error(`Error deleting blog post with ID ${id}:`, error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: "Blog post deleted successfully" }, { status: 200 })
}
