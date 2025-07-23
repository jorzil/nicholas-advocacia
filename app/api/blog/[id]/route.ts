import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase" // Import the server-side Supabase client

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", id) // Assuming 'id' here is actually the slug for public view
      .eq("status", "published") // Only fetch published posts for public view
      .single()

    if (error) {
      if (error.code === "PGRST116") {
        // No rows found
        return NextResponse.json({ message: "Post not found or not published" }, { status: 404 })
      }
      console.error(`Error fetching public blog post ${id} from Supabase:`, error)
      return NextResponse.json({ message: "Failed to fetch blog post", error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (e: any) {
    console.error(`Unexpected error in GET /api/blog/${id}:`, e)
    return NextResponse.json({ message: "Internal server error", error: e.message }, { status: 500 })
  }
}
