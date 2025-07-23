"use client"

import { BlogPostForm } from "@/components/blog-post-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewBlogPostPage() {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Criar Novo Post</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogPostForm />
        </CardContent>
      </Card>
    </div>
  )
}
