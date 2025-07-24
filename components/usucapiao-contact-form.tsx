"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CalendarIcon, ClockIcon, MailIcon, PhoneIcon, UserIcon } from "lucide-react"

export function UsucapiaoContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [responseMessage, setResponseMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setResponseMessage("")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Novo Contato - Usucapião",
          body: `
            Nome: ${formData.name}
            Email: ${formData.email}
            Telefone: ${formData.phone}
            Data Preferida: ${formData.date}
            Hora Preferida: ${formData.time}
            Mensagem: ${formData.message || "Nenhuma mensagem adicional."}
          `,
        }),
      })

      if (res.ok) {
        setStatus("success")
        setResponseMessage("Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        })
      } else {
        const errorData = await res.json()
        setStatus("error")
        setResponseMessage(errorData.message || "Ocorreu um erro ao enviar sua solicitação. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setStatus("error")
      setResponseMessage("Ocorreu um erro de rede. Por favor, tente novamente mais tarde.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
          <UserIcon className="h-4 w-4" /> Nome Completo
        </Label>
        <Input id="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
          <MailIcon className="h-4 w-4" /> Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
          <PhoneIcon className="h-4 w-4" /> Telefone
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(XX) XXXXX-XXXX"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="date" className="flex items-center gap-2 text-gray-700">
          <CalendarIcon className="h-4 w-4" /> Data Preferida
        </Label>
        <Input id="date" type="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="time" className="flex items-center gap-2 text-gray-700">
          <ClockIcon className="h-4 w-4" /> Hora Preferida
        </Label>
        <Input id="time" type="time" value={formData.time} onChange={handleChange} required />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="message" className="flex items-center gap-2 text-gray-700">
          Mensagem (Opcional)
        </Label>
        <Textarea
          id="message"
          placeholder="Descreva brevemente sua necessidade jurídica..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
      </div>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          className="w-full bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e] transition-colors py-3 text-lg font-semibold"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando..." : "Enviar Solicitação"}
        </Button>
      </div>
      {status === "success" && (
        <p className="sm:col-span-2 text-center text-green-600 font-medium">{responseMessage}</p>
      )}
      {status === "error" && <p className="sm:col-span-2 text-center text-red-600 font-medium">{responseMessage}</p>}
    </form>
  )
}
