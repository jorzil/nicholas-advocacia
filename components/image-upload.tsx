"use client"

import type React from "react"

import { useState } from "react"
import { UploadCloud, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  folder?: string // Optional folder to organize uploads
}

export function ImageUpload({ value, onChange, folder = "general" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("folder", folder) // Append folder name

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.url) {
        onChange(result.url)
        toast({
          title: "Upload Concluído",
          description: "Imagem enviada com sucesso!",
        })
      } else {
        throw new Error(result.message || "Falha no upload da imagem.")
      }
    } catch (error: any) {
      console.error("Erro no upload:", error)
      toast({
        title: "Erro no Upload",
        description: error.message || "Não foi possível enviar a imagem. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
      // Clear the input field to allow re-uploading the same file if needed
      event.target.value = ""
    }
  }

  const handleRemoveImage = () => {
    onChange("")
    toast({
      title: "Imagem Removida",
      description: "A imagem destacada foi removida.",
    })
  }

  return (
    <div className="space-y-2">
      {value ? (
        <div className="relative w-full h-48 rounded-md overflow-hidden border border-gray-200 flex items-center justify-center">
          <img src={value || "/placeholder.svg"} alt="Uploaded image" className="object-contain w-full h-full" />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 rounded-full"
            onClick={handleRemoveImage}
            aria-label="Remover imagem"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          {isUploading ? (
            <div className="flex flex-col items-center">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
              <span className="mt-2 text-gray-600">Enviando...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <UploadCloud className="h-10 w-10 text-gray-400" />
              <span className="mt-2 text-gray-600">Arraste e solte ou clique para enviar</span>
              <span className="text-sm text-gray-500">Max 5MB (JPG, PNG, GIF)</span>
            </div>
          )}
          <Input
            id="image-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/jpeg,image/png,image/gif"
            disabled={isUploading}
          />
        </Label>
      )}
    </div>
  )
}
