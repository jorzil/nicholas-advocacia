import { type NextRequest, NextResponse } from "next/server"

// Mock database - replace with your actual database
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    content: "<h2>Introduction</h2><p>Next.js 14 brings exciting new features...</p>",
    author: "John Doe",
    publishedAt: "2024-01-15T10:00:00Z",
    tags: ["nextjs", "react", "web-development"],
    featuredImage: "/nextjs-tutorial.png",
    status: "published" as const,
    excerpt: "Learn how to get started with Next.js 14 and its new features.",
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    content: "<h2>React Patterns</h2><p>Exploring advanced patterns in React...</p>",
    author: "Jane Smith",
    publishedAt: "2024-01-10T14:30:00Z",
    tags: ["react", "patterns", "javascript"],
    featuredImage: "/react-patterns.png",
    status: "draft" as const,
    excerpt: "Deep dive into advanced React patterns and best practices.",
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const post = blogPosts.find((p) => p.id === params.id)
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const postIndex = blogPosts.findIndex((p) => p.id === params.id)

    if (postIndex === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    const updatedPost = {
      ...blogPosts[postIndex],
      ...body,
      publishedAt: new Date(body.publishedAt).toISOString(),
    }

    blogPosts[postIndex] = updatedPost

    return NextResponse.json(updatedPost)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const postIndex = blogPosts.findIndex((p) => p.id === params.id)

    if (postIndex === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    blogPosts.splice(postIndex, 1)

    return NextResponse.json({ message: "Post deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 })
  }
}
