"use client"

import { Input } from "@/components/ui/input"

import type React from "react"

import { useTransition } from "react"
import { UploadCloud, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

interface ImageUploadProps {
  value?: string
  onChange: (url: string) => void
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [isUploading, startTransition] = useTransition()
  const { toast } = useToast()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast({
        title: "Erro de Upload",
        description: "Por favor, selecione um arquivo de imagem válido.",
        variant: "destructive",
      })
      return
    }

    startTransition(async () => {
      try {
        const formData = new FormData()
        formData.append("file", file)

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || "Falha no upload da imagem.")
        }

        const data = await response.json()
        onChange(data.url)
        toast({
          title: "Sucesso!",
          description: "Imagem enviada com sucesso.",
        })
      } catch (error: any) {
        console.error("Upload error:", error)
        toast({
          title: "Erro de Upload",
          description: error.message || "Não foi possível enviar a imagem. Tente novamente.",
          variant: "destructive",
        })
      }
    })
  }

  const handleRemoveImage = () => {
    onChange("")
    toast({
      title: "Imagem Removida",
      description: "A imagem destacada foi removida.",
    })
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
      {value ? (
        <div className="relative w-full h-48 rounded-md overflow-hidden">
          <Image
            src={value || "/placeholder.svg"}
            alt="Imagem Destacada"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 rounded-full"
            onClick={handleRemoveImage}
            disabled={isUploading}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <>
          <UploadCloud className="h-12 w-12 text-gray-400" />
          <p className="text-sm text-gray-500">Arraste e solte uma imagem aqui, ou</p>
          <Button asChild disabled={isUploading}>
            <label htmlFor="file-upload" className="cursor-pointer">
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                </>
              ) : (
                "Selecionar Imagem"
              )}
              <Input
                id="file-upload"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                accept="image/*"
                disabled={isUploading}
              />
            </label>
          </Button>
          {isUploading && <p className="text-sm text-gray-500">Aguarde o upload...</p>}
        </>
      )}
    </div>
  )
}
