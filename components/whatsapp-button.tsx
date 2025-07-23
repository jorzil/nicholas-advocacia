"use client"

import { Button } from "@/components/ui/button"
import { MessageCircleMore } from "lucide-react"
import { useEffect, useState } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999" // Replace with your WhatsApp number
    const message = encodeURIComponent("Olá, gostaria de mais informações sobre os seus serviços.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      className={`fixed bottom-6 right-6 rounded-full p-4 shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleWhatsAppClick}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircleMore className="h-6 w-6 text-white" />
    </Button>
  )
}
