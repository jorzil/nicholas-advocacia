"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { PlusCircle, Edit, Trash2, Eye, Search, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DeleteConfirmDialog } from "@/components/delete-confirm-dialog"
import { useToast } from "@/hooks/use-toast"

interface BlogPost {
  id: string
  title: string
  slug: string
  author: string
  publishedAt: string
  status: "published" | "draft"
  tags: string[]
}

export default function BlogManagementPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchPosts = async () => {
    setLoading(true)
    setError(null)
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/blog`
      console.log("Fetching posts from:", apiUrl) // Log da URL da requisição
      const response = await fetch(apiUrl, {
        credentials: "include",
      })
      if (!response.ok) {
        const errorText = await response.text()
        console.error("API Error Response:", errorText)
        throw new Error(`HTTP error! status: ${response.status} - ${errorText.substring(0, 200)}...`)
      }
      const data = await response.json()
      setPosts(data)
    } catch (e: any) {
      setError(`Failed to fetch posts: ${e.message}`)
      toast({
        title: "Erro ao carregar posts",
        description: `Não foi possível carregar os posts do blog. Detalhes: ${e.message}. Tente novamente.`,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleDelete = async () => {
    if (!postToDelete) return

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/admin/blog/${postToDelete}`, {
        method: "DELETE",
        credentials: "include",
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to delete post")
      }

      toast({
        title: "Post excluído",
        description: "O post foi removido com sucesso.",
      })
      fetchPosts()
    } catch (e: any) {
      toast({
        title: "Erro ao excluir post",
        description: e.message || "Não foi possível excluir o post. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsDeleteDialogOpen(false)
      setPostToDelete(null)
    }
  }

  const openDeleteDialog = (postId: string) => {
    setPostToDelete(postId)
    setIsDeleteDialogOpen(true)
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-red-600">
        <XCircle className="h-12 w-12 mb-4" />
        <p className="text-xl font-semibold">Erro ao carregar posts:</p>
        <p className="text-center">{error}</p>
        <Button onClick={fetchPosts} className="mt-4">
          Tentar Novamente
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Gerenciamento de Blog</CardTitle>
          <Link href="/admin/blog/new">
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" /> Novo Post
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2">
            <Search className="h-5 w-5 text-gray-500" />
            <Input
              placeholder="Buscar posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Nenhum post encontrado.</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Autor</TableHead>
                    <TableHead>Publicado Em</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>{format(new Date(post.publishedAt), "dd/MM/yyyy")}</TableCell>
                      <TableCell>
                        <Badge variant={post.status === "published" ? "default" : "secondary"}>
                          {post.status === "published" ? "Publicado" : "Rascunho"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/blog/${post.slug}`} target="_blank">
                            <Button variant="outline" size="icon" aria-label="Visualizar post">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link href={`/admin/blog/edit/${post.id}`}>
                            <Button variant="outline" size="icon" aria-label="Editar post">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => openDeleteDialog(post.id)}
                            aria-label="Excluir post"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <DeleteConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDelete}
        title="Confirmar Exclusão"
        description="Tem certeza que deseja excluir este post? Esta ação não pode ser desfeita."
      />
    </div>
  )
}
