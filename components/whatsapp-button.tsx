"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils" // Assuming cn utility is available

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
    // Track WhatsApp click event for Google Analytics (gtag)
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "whatsapp_button_float",
      })
    }

    // Track for Google Tag Manager (dataLayer)
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: "whatsapp_click_gtm", // Use a distinct event name for GTM
        event_category: "engagement",
        event_action: "click",
        event_label: "whatsapp_button_float",
      })
    }
  }

  return (
    <Link
      href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 rounded-full", // Accessibility focus
      )}
      onClick={handleWhatsAppClick}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative w-16 h-16">
        <Image
          src="/whatsapp-icon-new.png"
          alt="WhatsApp"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </Link>
  )
}
