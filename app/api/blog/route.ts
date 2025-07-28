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

export async function GET() {
  try {
    // Sort by publication date, newest first
    const sortedPosts = blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    return NextResponse.json(sortedPosts)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newPost = {
      id: Date.now().toString(),
      ...body,
      publishedAt: new Date(body.publishedAt).toISOString(),
    }

    blogPosts.unshift(newPost)

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}
