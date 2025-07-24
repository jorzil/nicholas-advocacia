"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { ImageUpload } from "./image-upload"
import { RichTextEditor } from "./rich-text-editor"

interface BlogPostFormProps {
  initialData?: {
    id?: string
    title: string
    content: string
    imageUrl?: string
    author: string
    tags?: string[]
    slug: string
    description: string
  }
}

export function BlogPostForm({ initialData }: BlogPostFormProps) {
  const [title, setTitle] = useState(initialData?.title || "")
  const [content, setContent] = useState(initialData?.content || "")
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "")
  const [author, setAuthor] = useState(initialData?.author || "Nicholas Nascimento")
  const [tags, setTags] = useState(initialData?.tags?.join(", ") || "")
  const [slug, setSlug] = useState(initialData?.slug || "")
  const [description, setDescription] = useState(initialData?.description || "")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

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
    setLoading(true)

    const method = initialData?.id ? "PUT" : "POST"
    const url = initialData?.id ? `/api/admin/blog/${initialData.id}` : "/api/admin/blog"

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          imageUrl,
          author,
          tags: tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          slug,
          description,
        }),
      })

      if (res.ok) {
        toast({
          title: "Sucesso!",
          description: `Postagem ${initialData?.id ? "atualizada" : "criada"} com sucesso.`,
        })
        router.push("/admin/blog")
        router.refresh()
      } else {
        const errorData = await res.json()
        toast({
          title: "Erro",
          description: errorData.error || `Falha ao ${initialData?.id ? "atualizar" : "criar"} a postagem.`,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      toast({
        title: "Erro",
        description: "Ocorreu um erro de rede. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{initialData?.id ? "Editar Postagem" : "Nova Postagem"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título da postagem"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL amigável)</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) =>
                setSlug(
                  e.target.value
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-*|-*$/g, ""),
                )
              }
              placeholder="slug-da-postagem"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição Curta (SEO)</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Uma breve descrição para SEO e prévia do artigo"
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="imageUrl">URL da Imagem de Capa</Label>
            <ImageUpload onUploadComplete={setImageUrl} initialImageUrl={imageUrl} />
            {imageUrl && (
              <div className="mt-2">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt="Prévia da Imagem"
                  className="max-w-xs h-auto rounded-md"
                />
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Conteúdo</Label>
            <RichTextEditor content={content} onContentChange={setContent} />
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
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
            <Input id="tags" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="tag1, tag2, tag3" />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Salvando..." : initialData?.id ? "Atualizar Postagem" : "Criar Postagem"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
