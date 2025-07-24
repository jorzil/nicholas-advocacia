import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/auth-context"
import { Navbar } from "@/components/navbar"
import { ClientComponents } from "./client-components"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nicholas Nascimento Advocacia",
  description:
    "Escritório de advocacia especializado em direito imobiliário e digital. Usucapião, regularização de imóveis, contratos, litígios e recuperação de contas Mercado Livre.",
  keywords: [
    "advocacia",
    "direito imobiliário",
    "usucapião",
    "regularização de imóveis",
    "contratos imobiliários",
    "litígios imobiliários",
    "direito digital",
    "Mercado Livre",
    "advogado imobiliário",
    "São Paulo",
  ],
  openGraph: {
    title: "Nicholas Nascimento Advocacia",
    description:
      "Escritório de advocacia especializado em direito imobiliário e digital. Soluções jurídicas completas para seu patrimônio.",
    url: "https://www.nicholasnascimento.adv.br",
    siteName: "Nicholas Nascimento Advocacia",
    images: [
      {
        url: "https://www.nicholasnascimento.adv.br/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Nicholas Nascimento Advocacia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Nascimento Advocacia",
    description:
      "Escritório de advocacia especializado em direito imobiliário e digital. Soluções jurídicas completas para seu patrimônio.",
    images: ["https://www.nicholasnascimento.adv.br/twitter-image.jpg"], // Replace with your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  canonical: "https://www.nicholasnascimento.adv.br",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX`} {/* Replace with your GTM ID */}
            height="0"\
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Toaster />
          <ClientComponents /> {/* For removing "Built with V0" */}
        </AuthProvider>
      </body>
    </html>
  )
}
