"use client"
import Link from "next/link"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface CTAButtonProps {
  text: string
  href: string
  whatsapp?: boolean
}

export function CTAButton({ text, href, whatsapp = false }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#d4b26a] px-6 py-3 font-medium text-[#1e2c49] transition-colors hover:bg-[#c4a25a]"
    >
      {text}
      {whatsapp && <NextImage src="/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} />}
    </Link>
  )
}

// Named export for compatibility
export { CTAButton as CtaButton }

// WhatsApp CTA Button
interface WhatsAppCTAProps {
  message?: string
  className?: string
}

export function WhatsAppCTA({ message = "Olá! Gostaria de uma consulta jurídica.", className = "" }: WhatsAppCTAProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5533999999999"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <Button className={`bg-green-600 hover:bg-green-700 text-white ${className}`}>
        <NextImage src="/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
        Falar no WhatsApp
        <Phone className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  )
}
