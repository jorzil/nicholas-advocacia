"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusIcon, SearchIcon, EditIcon, Loader2 } from "lucide-react"
import { DeleteConfirmDialog } from "@/components/delete-confirm-dialog"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

interface BlogPost {
  id: string
  title: string
  author: string
  created_at: string
  slug: string
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)
  const [postsPerPage] = useState(10)
  const { toast } = useToast()
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()

  const fetchPosts = useCallback(async () => {
    if (authLoading || !user) {
      // Wait for auth to load or if user is not logged in, do nothing
      return
    }

    setLoading(true)
    try {
      const res = await fetch(
        `/api/admin/blog?query=${searchTerm}&page=${page}&limit=${postsPerPage}`,
        { cache: "no-store" }, // Ensure fresh data
      )
      if (!res.ok) {
        if (res.status === 401) {
          toast({
            title: "Não autorizado",
            description: "Sua sessão expirou ou você não tem permissão. Redirecionando para o login.",
            variant: "destructive",
          })
          router.push("/admin/login")
          return
        }
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data = await res.json()
      setPosts(data.posts)
      setTotalPosts(data.total)
    } catch (error) {
      console.error("Erro ao buscar postagens:", error)
      toast({
        title: "Erro",
        description: "Falha ao carregar as postagens do blog.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }, [searchTerm, page, postsPerPage, toast, user, authLoading, router])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleDelete = async (id: string, title: string) => {
    try {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: "DELETE",
      })
      if (res.ok) {
        toast({
          title: "Sucesso!",
          description: `Postagem '${title}' excluída com sucesso.`,
        })
        fetchPosts() // Refresh the list
      } else {
        const errorData = await res.json()
        toast({
          title: "Erro",
          description: errorData.error || `Falha ao excluir a postagem '${title}'.`,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Erro ao excluir postagem:", error)
      toast({
        title: "Erro",
        description: "Ocorreu um erro de rede ao excluir a postagem.",
        variant: "destructive",
      })
    }
  }

  const totalPages = Math.ceil(totalPosts / postsPerPage)

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader2 className="h-12 w-12 animate-spin text-[#d4b26a]" />
        <span className="sr-only">Carregando autenticação...</span>
      </div>
    )
  }

  if (!user) {
    // This case should ideally be handled by middleware redirect, but as a fallback
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Acesso negado. Por favor, faça login.</p>
        <Button onClick={() => router.push("/admin/login")}>Ir para Login</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#1e2c49]">Gerenciar Postagens do Blog</h1>
        <Link href="/admin/blog/new" passHref>
          <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e]">
            <PlusIcon className="mr-2 h-4 w-4" /> Nova Postagem
          </Button>
        </Link>
      </div>

      <Card className="flex-1 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Lista de Postagens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Buscar postagens..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setPage(1) // Reset to first page on new search
                    fetchPosts()
                  }
                }}
                className="pl-9 pr-4 py-2 border rounded-md w-full"
              />
            </div>
            <Button
              onClick={() => {
                setPage(1)
                fetchPosts()
              }}
              className="bg-[#1e2c49] text-white hover:bg-[#2a3c5e]"
            >
              Buscar
            </Button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-[#d4b26a]" />
              <span className="ml-2 text-gray-600">Carregando postagens...</span>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8 text-gray-600">Nenhuma postagem encontrada.</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead>Data de Criação</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell>{new Date(post.created_at).toLocaleDateString("pt-BR")}</TableCell>
                        <TableCell className="text-right flex justify-end gap-2">
                          <Link href={`/admin/blog/edit/${post.id}`} passHref>
                            <Button variant="outline" size="icon" aria-label={`Editar ${post.title}`}>
                              <EditIcon className="h-4 w-4" />
                              <span className="sr-only">Editar</span>
                            </Button>
                          </Link>
                          <DeleteConfirmDialog
                            onConfirm={() => handleDelete(post.id, post.title)}
                            itemType="postagem"
                            itemName={post.title}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex justify-between items-center mt-6">
                <Button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1 || loading}
                  variant="outline"
                >
                  Anterior
                </Button>
                <span className="text-sm text-gray-700">
                  Página {page} de {totalPages}
                </span>
                <Button
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={page === totalPages || loading}
                  variant="outline"
                >
                  Próxima
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
