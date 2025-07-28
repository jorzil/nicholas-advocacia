"use client"

import Link from "next/link"
import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

type Post = {
  slug: string
  title: string
  publishedAt: string
}

interface BlogSidebarProps {
  /** Array com os posts já carregados pela página principal */
  posts?: Post[]
}

/**
 * Sidebar simples sem dependências de autenticação.
 * Seguro para pré-render e build estático.
 */
export function BlogSidebar({ posts }: BlogSidebarProps) {
  if (!posts || posts.length === 0) return null

  const recent = posts.slice(0, 6)

  return (
    <aside className="space-y-4">
      <h3 className="text-xl font-bold text-[#1e2c49]">Posts Recentes</h3>

      {recent.map((p) => (
        <Card key={p.slug} className="border-none shadow hover:shadow-md transition">
          <CardContent className="p-4">
            <Link href={`/blog/${p.slug}`} className="block font-medium hover:underline">
              {p.title}
            </Link>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <Calendar className="mr-1 h-4 w-4" />
              {formatDate(p.publishedAt)}
            </div>
          </CardContent>
        </Card>
      ))}
    </aside>
  )
}

export default BlogSidebar
