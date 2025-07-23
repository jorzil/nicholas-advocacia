import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase" // Import the server-side Supabase client

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  console.log(`API /api/admin/blog/${id} GET handler hit.`)
  try {
    const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single()

    if (error) {
      if (error.code === "PGRST116") {
        // No rows found
        return NextResponse.json({ message: "Post not found" }, { status: 404 })
      }
      console.error(`Error fetching blog post ${id} from Supabase:`, error)
      return NextResponse.json({ message: "Failed to fetch blog post", error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (e: any) {
    console.error(`Unexpected error in GET /api/admin/blog/${id}:`, e)
    return NextResponse.json({ message: "Internal server error", error: e.message }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  try {
    const updatedPost = await request.json()
    console.log(`Received update for post ${id}:`, updatedPost)

    // Optional: Check if slug is being changed and if new slug is unique
    if (updatedPost.slug) {
      const { data: existingPost, error: existingError } = await supabase
        .from("blog_posts")
        .select("id")
        .eq("slug", updatedPost.slug)
        .neq("id", id) // Exclude current post from unique check
        .single()

      if (existingPost) {
        return NextResponse.json(
          { message: "Slug já existe para outro post. Por favor, escolha outro." },
          { status: 409 },
        )
      }
      if (existingError && existingError.code !== "PGRST116") {
        console.error("Error checking existing slug for update:", existingError)
        throw new Error(existingError.message)
      }
    }

    const { data, error } = await supabase
      .from("blog_posts")
      .update({
        title: updatedPost.title,
        slug: updatedPost.slug,
        content: updatedPost.content,
        author: updatedPost.author,
        published_at: updatedPost.publishedAt,
        status: updatedPost.status,
        tags: updatedPost.tags,
        featured_image: updatedPost.featuredImage,
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error(`Error updating blog post ${id} in Supabase:`, error)
      return NextResponse.json({ message: "Failed to update blog post", error: error.message }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ message: "Post not found for update" }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (e: any) {
    console.error(`Unexpected error in PUT /api/admin/blog/${id}:`, e)
    return NextResponse.json({ message: "Internal server error", error: e.message }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  try {
    const { error, count } = await supabase.from("blog_posts").delete().eq("id", id).select() // Select to get count of deleted rows

    if (error) {
      console.error(`Error deleting blog post ${id} from Supabase:`, error)
      return NextResponse.json({ message: "Failed to delete blog post", error: error.message }, { status: 500 })
    }

    // Supabase delete returns data as null, but count can indicate if a row was deleted
    // For .delete(), the count is not directly returned in the data object,
    // but you can check if error is null and assume success if no error.
    // A more robust check would be to select before deleting, or rely on the error object.
    // For simplicity, we'll assume success if no error.
    // If you need to know if a row was actually deleted, you might need to query before deleting.
    // Or, if you use .select() after .delete(), it will return the deleted rows.
    // Let's adjust to use .select() to get the deleted row count.
    if (count === 0) {
      // If no rows were matched and deleted
      return NextResponse.json({ message: "Post not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Post deleted successfully" })
  } catch (e: any) {
    console.error(`Unexpected error in DELETE /api/admin/blog/${id}:`, e)
    return NextResponse.json({ message: "Internal server error", error: e.message }, { status: 500 })
  }
}
