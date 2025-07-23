"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      formType: "contact", // Explicitly set form type
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
          description: "Entraremos em contato em breve.",
        })
        // Reset form
        const form = e.target as HTMLFormElement
        form.reset()
      } else {
        // Log the specific error message from the API if available
        console.error("API error:", result.message)
        throw new Error(result.message || "Erro desconhecido ao enviar mensagem.")
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
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
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" required placeholder="Seu nome completo" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" name="phone" placeholder="(00) 00000-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Assunto</Label>
          <Input id="subject" name="subject" required placeholder="Assunto da mensagem" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Descreva seu problema ou dúvida..."
          className="min-h-[120px]"
        />
      </div>
      <Button type="submit" className="w-full bg-[#1e2c49] text-white hover:bg-[#2a3c5e]" disabled={isSubmitting}>
        {isSubmitting ? (
          <>Enviando...</>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Solicitar Contato Prioritário
          </>
        )}
      </Button>
      <p className="mt-2 text-center text-xs text-gray-500">
        Ao enviar, você concorda com nossa política de privacidade. Responderemos em até 24h.
      </p>
    </form>
  )
}
