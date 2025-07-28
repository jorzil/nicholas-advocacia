import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ClientComponents } from "./client-components"
import { Toaster } from "@/components/ui/toaster" // Ensure Toaster is imported

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nicholas Advocacia - Especialistas em Direito Imobiliário",
  description:
    "Escritório de advocacia especializado em direito imobiliário, usucapião, regularização de imóveis e contratos. Atendimento personalizado e resultados garantidos.",
  keywords:
    "advogado, direito imobiliário, usucapião, regularização de imóveis, contratos imobiliários, Nicholas Advocacia, Arapiraca, Alagoas",
  authors: [{ name: "Nicholas Advocacia" }],
  creator: "Nicholas Advocacia",
  publisher: "Nicholas Advocacia",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.nicholasadvocacia.com.br",
    title: "Nicholas Advocacia - Especialistas em Direito Imobiliário",
    description:
      "Escritório de advocacia especializado em direito imobiliário, usucapião, regularização de imóveis e contratos.",
    siteName: "Nicholas Advocacia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Advocacia - Especialistas em Direito Imobiliário",
    description:
      "Escritório de advocacia especializado em direito imobiliário, usucapião, regularização de imóveis e contratos.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#1e2c49" />
        <link rel="canonical" href="https://www.nicholasadvocacia.com.br" />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              if(f && f.parentNode) {
                f.parentNode.insertBefore(j,f);
              } else {
                (d.head || d.getElementsByTagName('head')[0]).appendChild(j);
              }
              })(window,document,'script','dataLayer','GTM-PZ96Q3PZ');
            `,
          }}
        />

        {/* Google Ads Conversion Tracking */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16734697271" strategy="afterInteractive" />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16734697271');
            `,
          }}
        />

        {/* Google Analytics - Conditional */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZ96Q3PZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientComponents>{children}</ClientComponents>
        <Toaster /> {/* Ensure Toaster is rendered */}
      </body>
    </html>
  )
}
