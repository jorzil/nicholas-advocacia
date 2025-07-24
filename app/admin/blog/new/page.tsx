import { BlogPostForm } from "@/components/blog-post-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function NewBlogPostPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/blog">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-[#1e2c49]">Criar Nova Postagem</h1>
      </div>
      <BlogPostForm />
    </div>
  )
}
