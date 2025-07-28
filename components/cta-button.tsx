"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Pequeno botão CTA reutilizado no rodapé
 * e no final dos posts do blog.
 */
export function CtaButton() {
  return (
    <Button asChild size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
      <Link
        href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site!"
        className="flex items-center gap-2"
      >
        <Phone className="h-5 w-5" />
        Falar no WhatsApp
      </Link>
    </Button>
  )
}

/* allow `import CtaButton from '@/components/cta-button'` as well */
export default CtaButton
