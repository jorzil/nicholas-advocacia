"use client"

import { useEffect, type ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

interface ClientComponentsProps {
  children: ReactNode
}

export default function ClientComponents({ children }: ClientComponentsProps) {
  useEffect(() => {
    const removeV0Attribution = () => {
      // Attempt to remove by XPath (more robust for specific elements)
      const xpath =
        "//div[contains(@class, 'fixed') and contains(@class, 'bottom-0') and contains(@class, 'right-0') and contains(@class, 'z-50') and contains(@class, 'p-4') and contains(@class, 'text-xs') and contains(@class, 'text-gray-500') and contains(., 'Built with')]"
      const result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
      for (let i = 0; i < result.snapshotLength; i++) {
        result.snapshotItem(i)?.remove()
      }

      // Fallback: Remove by specific selectors if XPath fails or element structure changes
      const selectors = [
        "div.fixed.bottom-0.right-0.z-50.p-4.text-xs.text-gray-500",
        "div[data-v0-t]", // Common attribute for v0 generated elements
        "div:has(> a[href*='v0.dev'])", // Div containing a link to v0.dev
      ]
      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          if (el.textContent?.includes("Built with v0")) {
            el.remove()
          }
        })
      })

      // Fallback: Remove by text content (less precise, but catches dynamic additions)
      const bodyText = document.body.textContent
      if (bodyText?.includes("Built with v0")) {
        const elements = document.body.getElementsByTagName("*")
        for (let i = 0; i < elements.length; i++) {
          const el = elements[i]
          if (el.textContent?.includes("Built with v0")) {
            el.remove()
          }
        }
      }
    }

    // Run once on mount
    removeV0Attribution()

    // Use a MutationObserver to catch dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          removeV0Attribution()
        }
      })
    })

    // Observe changes to the body and its descendants
    observer.observe(document.body, { childList: true, subtree: true })

    // Clean up observer on unmount
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
