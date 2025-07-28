"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { CalendarIcon, Save, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { RichTextEditor } from "@/components/rich-text-editor"
import { ImageUpload } from "@/components/image-upload"

interface BlogPostFormProps {
  initialData?: {
    id?: string
    title: string
    slug: string
    content: string
    author: string
    publishedAt: string
    status: "published" | "draft"
    tags: string[]
    featuredImage?: string
  }
}

export function BlogPostForm({ initialData }: BlogPostFormProps) {
  const [title, setTitle] = useState(initialData?.title || "")
  const [slug, setSlug] = useState(initialData?.slug || "")
  const [content, setContent] = useState(initialData?.content || "")
  const [author, setAuthor] = useState(initialData?.author || "")
  const [publishedAt, setPublishedAt] = useState<Date | undefined>(
    initialData?.publishedAt ? new Date(initialData.publishedAt) : undefined,
  )
  const [status, setStatus] = useState<"published" | "draft">(initialData?.status || "draft")
  const [tags, setTags] = useState(initialData?.tags.join(", ") || "")
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage || "")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (title && !initialData?.slug) {
      setSlug(
        title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-*|-*$/g, ""),
      )
    }
  }, [title, initialData?.slug])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const postData = {
      title,
      slug,
      content,
      author,
      publishedAt: publishedAt?.toISOString() || new Date().toISOString(),
      status,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      featuredImage,
    }

    const method = initialData?.id ? "PUT" : "POST"
    const url = initialData?.id ? `/api/admin/blog/${initialData.id}` : "/api/admin/blog"

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Failed to save post")
      }

      toast({
        title: "Sucesso!",
        description: `Post ${initialData?.id ? "atualizado" : "criado"} com sucesso.`,
      })
      router.push("/admin/blog")
      router.refresh() // Refresh the page to show updated list
    } catch (e: any) {
      toast({
        title: "Erro ao salvar post",
        description: e.message || "Ocorreu um erro ao salvar o post. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Título do Post</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do seu artigo"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">Slug (URL amigável)</Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="titulo-do-seu-artigo"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">Autor</Label>
        <Input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Nome do autor"
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="publishedAt">Data de Publicação</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !publishedAt && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {publishedAt ? format(publishedAt, "PPP") : <span>Escolha uma data</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={publishedAt} onSelect={setPublishedAt} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={status} onValueChange={(value: "published" | "draft") => setStatus(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Rascunho</SelectItem>
              <SelectItem value="published">Publicado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
        <Input id="tags" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="tag1, tag2, tag3" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="featuredImage">Imagem Destacada</Label>
        <ImageUpload
          value={featuredImage}
          onChange={setFeaturedImage}
          folder="blog-images" // Specify a folder for blog images
        />
        {featuredImage && (
          <div className="mt-2 relative w-48 h-32 rounded-md overflow-hidden">
            <img
              src={featuredImage || "/placeholder.svg"}
              alt="Imagem Destacada"
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Conteúdo do Post</Label>
        <RichTextEditor value={content} onChange={setContent} />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...
          </>
        ) : (
          <>
            <Save className="mr-2 h-4 w-4" /> Salvar Post
          </>
        )}
      </Button>
    </form>
  )
}
