import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { BlogSidebar } from "@/components/blog-sidebar"
import { calculateReadTime, formatDate, generateExcerpt } from "@/lib/utils"

export const metadata = {
  title: "Blog - Nicholas Advocacia",
  description:
    "Artigos e notícias sobre Direito Imobiliário e Civil para você se manter informado e proteger seus direitos.",
  keywords: "blog jurídico, direito imobiliário, artigos, notícias, usucapião, contratos, regularização de imóveis",
  openGraph: {
    title: "Blog - Nicholas Advocacia",
    description:
      "Artigos e notícias sobre Direito Imobiliário e Civil para você se manter informado e proteger seus direitos.",
    url: "https://www.nicholasadvocacia.com.br/blog",
  },
}

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  author: string
  published_at: string // Changed from publishedAt to published_at to match Supabase schema
  tags: string[]
  featured_image: string // Changed from featuredImage to featured_image
  status: "published" | "draft"
  excerpt?: string // Make excerpt optional as it can be generated
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Fetch from your own API route which now connects to Supabase
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blog`, {
      next: { revalidate: 60 }, // Revalidate data every 60 seconds
    })

    if (!response.ok) {
      console.error(`Failed to fetch blog posts: HTTP status ${response.status}`)
      // Fallback to mock data or throw an error
      return [] // Return empty array on error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return [] // Return empty array on error
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/law-banner.png" // Placeholder image for blog hero
            alt="Fundo do blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-6 text-white">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Nosso Blog</h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl">
            Artigos e notícias sobre Direito Imobiliário e Civil para você se manter informado.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid gap-8 md:grid-cols-2">
                {blogPosts
                  .filter((post) => post.status === "published")
                  .map((post) => (
                    <Card
                      key={post.id}
                      className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.featured_image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="flex flex-grow flex-col p-6">
                        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{formatDate(post.published_at)}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="mr-1 h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{calculateReadTime(post.content)}</span>
                          </div>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-[#1e2c49] line-clamp-2">{post.title}</h3>
                        <p className="mb-4 flex-grow text-gray-600 line-clamp-3">
                          {post.excerpt || generateExcerpt(post.content)}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                          <Link href={`/blog/${post.slug}`} className="flex items-center">
                            Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar posts={blogPosts.filter((post) => post.status === "published")} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
