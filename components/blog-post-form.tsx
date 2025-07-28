"use client"

import { useState, useEffect, useTransition } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { RichTextEditor } from "@/components/rich-text-editor"
import { ImageUpload } from "@/components/image-upload"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
  title: z.string().min(5, "O título deve ter pelo menos 5 caracteres."),
  slug: z
    .string()
    .min(5, "O slug deve ter pelo menos 5 caracteres.")
    .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens."),
  content: z.string().min(50, "O conteúdo deve ter pelo menos 50 caracteres."),
  author: z.string().min(3, "O autor deve ter pelo menos 3 caracteres."),
  publishedAt: z.date({ required_error: "A data de publicação é obrigatória." }),
  status: z.enum(["published", "draft"]),
  tags: z.array(z.string()).min(1, "Selecione pelo menos uma tag."),
  featuredImage: z.string().optional(),
})

type BlogPostFormValues = z.infer<typeof formSchema>

interface BlogPostFormProps {
  initialData?: BlogPostFormValues & { id?: string }
}

export function BlogPostForm({ initialData }: BlogPostFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()
  const [newTag, setNewTag] = useState("")

  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      slug: "",
      content: "",
      author: "Nicholas Nascimento", // Default author
      publishedAt: new Date(),
      status: "draft",
      tags: [],
      featuredImage: "",
    },
  })

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = form
  const watchedTags = watch("tags")
  const watchedContent = watch("content")
  const watchedFeaturedImage = watch("featuredImage")

  useEffect(() => {
    if (initialData?.content) {
      setValue("content", initialData.content, { shouldValidate: true })
    }
    if (initialData?.featuredImage) {
      setValue("featuredImage", initialData.featuredImage, { shouldValidate: true })
    }
  }, [initialData, setValue])

  const onSubmit = async (values: BlogPostFormValues) => {
    startTransition(async () => {
      try {
        const method = initialData?.id ? "PUT" : "POST"
        const url = initialData?.id
          ? `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/blog/${initialData.id}`
          : `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/blog`

        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || "Erro ao salvar o post.")
        }

        toast({
          title: "Sucesso!",
          description: `Post ${initialData?.id ? "atualizado" : "criado"} com sucesso.`,
        })
        router.push("/admin/blog")
        router.refresh() // Revalidate data on the blog management page
      } catch (error: any) {
        toast({
          title: "Erro",
          description: error.message || "Ocorreu um erro ao salvar o post.",
          variant: "destructive",
        })
      }
    })
  }

  const handleAddTag = () => {
    if (newTag && !watchedTags.includes(newTag)) {
      setValue("tags", [...watchedTags, newTag])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setValue(
      "tags",
      watchedTags.filter((tag) => tag !== tagToRemove),
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input id="title" {...register("title")} />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>
          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input id="slug" {...register("slug")} />
            {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
          </div>
          <div>
            <Label htmlFor="author">Autor</Label>
            <Input id="author" {...register("author")} />
            {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
          </div>
          <div>
            <Label htmlFor="publishedAt">Data de Publicação</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !watch("publishedAt") && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {watch("publishedAt") ? format(watch("publishedAt"), "PPP") : <span>Escolha uma data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={watch("publishedAt")}
                  onSelect={(date) => setValue("publishedAt", date!)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.publishedAt && <p className="text-red-500 text-sm mt-1">{errors.publishedAt.message}</p>}
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="status"
              checked={watch("status") === "published"}
              onCheckedChange={(checked) => setValue("status", checked ? "published" : "draft")}
            />
            <Label htmlFor="status">Publicar Post</Label>
          </div>
          <div>
            <Label htmlFor="tags">Tags</Label>
            <div className="flex gap-2 mb-2">
              <Input
                id="newTag"
                placeholder="Adicionar nova tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddTag()
                  }
                }}
              />
              <Button type="button" onClick={handleAddTag}>
                Adicionar
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {watchedTags.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <button type="button" onClick={() => handleRemoveTag(tag)} className="ml-1 text-xs">
                    &times;
                  </button>
                </Badge>
              ))}
            </div>
            {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>}
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="featuredImage">Imagem Destacada</Label>
            <ImageUpload value={watchedFeaturedImage} onChange={(url) => setValue("featuredImage", url)} />
            {errors.featuredImage && <p className="text-red-500 text-sm mt-1">{errors.featuredImage.message}</p>}
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="content">Conteúdo do Post</Label>
        <RichTextEditor
          value={watchedContent}
          onChange={(value) => setValue("content", value, { shouldValidate: true })}
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {initialData?.id ? "Atualizar Post" : "Criar Post"}
      </Button>
    </form>
  )
}
