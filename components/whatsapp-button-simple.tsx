"use client"

import Image from "next/image"
import Link from "next/link"

export function WhatsAppButtonSimple() {
  return (
    <Link
      href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20b858] transition-colors"
    >
      <Image
        src="/whatsapp-icon-new.png"
        alt="WhatsApp"
        width={20}
        height={20}
        className="filter brightness-0 invert"
      />
      WhatsApp
    </Link>
  )
}
