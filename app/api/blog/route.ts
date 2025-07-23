import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase" // Import the server-side Supabase client

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published") // Only fetch published posts for public blog
      .order("published_at", { ascending: false })

    if (error) {
      console.error("Error fetching public blog posts from Supabase:", error)
      return NextResponse.json({ message: "Failed to fetch blog posts", error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (e: any) {
    console.error("Unexpected error in GET /api/blog:", e)
    return NextResponse.json({ message: "Internal server error", error: e.message }, { status: 500 })
  }
}
