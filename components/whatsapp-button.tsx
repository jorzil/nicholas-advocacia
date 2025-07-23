"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: false, // Keep observing
    threshold: 0.1, // Trigger when 10% of the element is visible
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [inView])

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5582999999999"
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de mais informações sobre os serviços de advocacia imobiliária.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div
      ref={ref}
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
    >
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button
          className="relative h-16 w-16 rounded-full shadow-lg flex items-center justify-center p-0 overflow-hidden"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <Image
            src="/whatsapp-icon-new.png"
            alt="WhatsApp Icon"
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="sr-only">WhatsApp</span>
        </Button>
      </Link>
    </div>
  )
}
