"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UploadCloudIcon, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ImageUploadProps {
  onUploadComplete: (url: string) => void
  initialImageUrl?: string
}

export function ImageUpload({ onUploadComplete, initialImageUrl }: ImageUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    } else {
      setFile(null)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "Erro",
        description: "Por favor, selecione um arquivo para upload.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        onUploadComplete(data.url)
        toast({
          title: "Sucesso!",
          description: "Imagem enviada com sucesso.",
        })
        setFile(null) // Clear the selected file after successful upload
      } else {
        const errorData = await response.json()
        toast({
          title: "Erro no Upload",
          description: errorData.error || "Falha ao enviar a imagem.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Erro ao enviar imagem:", error)
      toast({
        title: "Erro",
        description: "Ocorreu um erro de rede ao enviar a imagem.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="image-upload">Upload de Imagem</Label>
      <div className="flex items-center space-x-2">
        <Input id="image-upload" type="file" accept="image/*" onChange={handleFileChange} />
        <Button onClick={handleUpload} disabled={loading || !file}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
            </>
          ) : (
            <>
              <UploadCloudIcon className="mr-2 h-4 w-4" /> Upload
            </>
          )}
        </Button>
      </div>
      {initialImageUrl && !file && (
        <p className="text-sm text-gray-500">
          URL da imagem atual:{" "}
          <a href={initialImageUrl} target="_blank" rel="noopener noreferrer" className="underline">
            {initialImageUrl}
          </a>
        </p>
      )}
      {file && <p className="text-sm text-gray-500">Arquivo selecionado: {file.name}</p>}
    </div>
  )
}
