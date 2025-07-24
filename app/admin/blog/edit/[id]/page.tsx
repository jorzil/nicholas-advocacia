import { BlogPostForm } from "@/components/blog-post-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface EditBlogPostPageProps {
  params: {
    id: string
  }
}

async function getBlogPost(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/admin/blog/${id}`, {
      cache: "no-store", // Ensure fresh data
    })

    if (res.status === 404) {
      notFound()
    }

    if (!res.ok) {
      console.error(`Failed to fetch blog post: ${res.status} ${res.statusText}`)
      throw new Error("Failed to fetch blog post")
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching blog post:", error)
    notFound() // Treat any fetch error as not found for simplicity
  }
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const blogPost = await getBlogPost(params.id)

  if (!blogPost) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/blog">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-[#1e2c49]">Editar Postagem</h1>
      </div>
      <BlogPostForm initialData={blogPost} />
    </div>
  )
}
