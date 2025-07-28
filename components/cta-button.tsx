"use client"

import type React from "react"

import NextImage from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

interface CTAButtonProps {
  href?: string
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
  className?: string
  onClick?: () => void
}

export function CTAButton({
  href,
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
}: CTAButtonProps) {
  const buttonContent = (
    <Button variant={variant} size={size} className={`group ${className}`} onClick={onClick}>
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}

// Named export for compatibility
export const CtaButton = CTAButton

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
