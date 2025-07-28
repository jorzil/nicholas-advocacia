"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link
        href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <Image src="/whatsapp-icon-new.png" alt="WhatsApp" width={64} height={64} className="rounded-full" />
      </Link>
    </div>
  )
}
