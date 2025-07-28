"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function UsucapiaoContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [usucapiaoType, setUsucapiaoType] = useState("")
  const [timePossession, setTimePossession] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      usucapiaoType,
      possessionTime: timePossession, // Corrected key to match API route
      subject: "Consulta sobre Usucapião",
      formType: "usucapiao",
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Mensagem enviada",
          description: "Entraremos em contato em breve para avaliar seu caso.",
        })
        // Reset form
        const form = e.target as HTMLFormElement
        form.reset()
        setUsucapiaoType("")
        setTimePossession("")
      } else {
        console.error("API error:", result.message)
        throw new Error(result.message || "Erro desconhecido ao enviar mensagem.")
      }
    } catch (error) {
      console.error("Error submitting usucapiao form:", error)
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome completo</Label>
        <Input id="name" name="name" required placeholder="Seu nome" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone/WhatsApp</Label>
        <Input id="phone" name="phone" required placeholder="(00) 00000-0000" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="usucapiao-type">Tipo de Usucapião</Label>
        <Select name="usucapiao-type" value={usucapiaoType} onValueChange={setUsucapiaoType}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma opção" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="extraordinaria">Extraordinária</SelectItem>
            <SelectItem value="ordinaria">Ordinária</SelectItem>
            <SelectItem value="especial-urbana">Especial Urbana</SelectItem>
            <SelectItem value="especial-rural">Especial Rural</SelectItem>
            <SelectItem value="familiar">Familiar</SelectItem>
            <SelectItem value="coletiva">Coletiva</SelectItem>
            <SelectItem value="nao-sei">Não sei / Não tenho certeza</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="time-possession">Tempo de posse do imóvel</Label>
        <Select name="time-possession" value={timePossession} onValueChange={setTimePossession}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma opção" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="menos-2">Menos de 2 anos</SelectItem>
            <SelectItem value="2-5">Entre 2 e 5 anos</SelectItem>
            <SelectItem value="5-10">Entre 5 e 10 anos</SelectItem>
            <SelectItem value="10-15">Entre 10 e 15 anos</SelectItem>
            <SelectItem value="mais-15">Mais de 15 anos</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Descreva brevemente seu caso</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Conte-nos sobre o imóvel e sua situação..."
          className="min-h-[100px]"
        />
      </div>
      <Button type="submit" className="w-full bg-[#1e2c49] text-white hover:bg-[#2a3c5e]" disabled={isSubmitting}>
        {isSubmitting ? (
          <>Enviando...</>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Solicitar Avaliação
          </>
        )}
      </Button>
      <p className="text-center text-xs text-gray-500">Ao enviar, você concorda com nossa política de privacidade.</p>
    </form>
  )
}
