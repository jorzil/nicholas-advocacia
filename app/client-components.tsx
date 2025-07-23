"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ClientComponents({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Função para enviar eventos para o Google Analytics
  const sendPageView = (url: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }
  }

  useEffect(() => {
    // Envia pageview quando a rota muda
    sendPageView(pathname)
  }, [pathname])

  const isAdminRoute = pathname.startsWith("/admin")

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className={!isAdminRoute ? "pt-[72px]" : ""}>{children}</main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </>
  )
}
