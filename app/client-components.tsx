"use client"

import type React from "react"
import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer" // Assuming Footer is a global component
import { WhatsAppButton } from "@/components/whatsapp-button" // Assuming WhatsAppButton is a global component

export function ClientComponents({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Remove Built with v0 Attribution
    function removeAttribution() {
      try {
        // Remove by XPath
        const xpath =
          "//div[contains(text(), 'Built with') or contains(text(), 'built with') or contains(text(), 'BUILT WITH')]"
        const result = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null)
        for (let i = 0; i < result.snapshotLength; i++) {
          const element = result.snapshotItem(i)
          if (element && element.parentNode) {
            element.parentNode.removeChild(element)
          }
        }

        // Remove by selectors
        const selectors = ["[data-v0-attribution]", ".v0-attribution", '[class*="attribution"]', '[id*="attribution"]']

        selectors.forEach((selector) => {
          const elements = document.querySelectorAll(selector)
          elements.forEach((el) => {
            if (el && el.parentNode) {
              el.parentNode.removeChild(el)
            }
          })
        })

        // Remove by text content
        const allDivs = document.querySelectorAll("div, span, p, a")
        allDivs.forEach((el) => {
          if (
            el.textContent &&
            (el.textContent.includes("Built with") ||
              el.textContent.includes("built with") ||
              el.textContent.includes("BUILT WITH") ||
              el.textContent.includes("v0.dev") ||
              el.textContent.includes("V0.DEV"))
          ) {
            if (el.parentNode) {
              el.parentNode.removeChild(el)
            }
          }
        })
      } catch (error) {
        // Silently handle any errors
      }
    }

    // Run immediately
    removeAttribution()

    // Run after DOM is loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", removeAttribution)
    }

    // Run after a delay to catch dynamic content
    setTimeout(removeAttribution, 1000)
    setTimeout(removeAttribution, 3000)

    // Set up mutation observer for dynamic content
    if (typeof MutationObserver !== "undefined") {
      const observer = new MutationObserver((mutations) => {
        let shouldRun = false
        mutations.forEach((mutation) => {
          if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            shouldRun = true
          }
        })
        if (shouldRun) {
          setTimeout(removeAttribution, 100)
        }
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })
    }
  }, [])

  return (
    <>
      <Navbar />
      <main role="main">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
