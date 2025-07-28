import { BlogPostForm } from "@/components/blog-post-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  author: string
  publishedAt: string
  status: "published" | "draft"
  tags: string[]
  featuredImage?: string
}

interface EditBlogPostPageProps {
  params: {
    id: string
  }
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const { id } = params

  let post: BlogPost | null = null
  let error: string | null = null

  try {
    // Use NEXT_PUBLIC_APP_URL para garantir que a chamada funcione em produção
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/admin/blog/${id}`, {
      cache: "no-store", // Ensure fresh data on every request
    })

    if (!response.ok) {
      if (response.status === 404) {
        notFound() // Trigger Next.js not-found page
      }
      const errorText = await response.text()
      console.error(`Failed to fetch post ${id}: HTTP status ${response.status}, response: ${errorText}`)
      throw new Error(`Failed to fetch post: ${response.statusText}`)
    }

    post = await response.json()
  } catch (e: any) {
    console.error("Error fetching post for edit:", e)
    error = `Não foi possível carregar o post: ${e.message}`
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 text-red-600">
        <h1 className="text-2xl font-bold mb-4">Erro ao Carregar Post</h1>
        <p>{error}</p>
      </div>
    )
  }

  if (!post) {
    notFound() // Should not happen if error is handled, but as a fallback
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Editar Post</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogPostForm initialData={post} />
        </CardContent>
      </Card>
    </div>
  )
}
