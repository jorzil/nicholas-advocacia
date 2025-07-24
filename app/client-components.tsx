"use client"

import { useEffect } from "react"

export function ClientComponents() {
  useEffect(() => {
    const removeV0Attribution = () => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList" || mutation.type === "subtree") {
            const v0Element = document.querySelector('a[href*="v0.dev"]')
            if (v0Element) {
              v0Element.remove()
              observer.disconnect() // Stop observing once removed
              console.log("Removed 'Built with V0' attribution.")
            }
          }
        })
      })

      // Start observing the body for changes
      observer.observe(document.body, { childList: true, subtree: true })

      // Also try to remove it immediately in case it's already there
      const v0Element = document.querySelector('a[href*="v0.dev"]')
      if (v0Element) {
        v0Element.remove()
        console.log("Removed 'Built with V0' attribution on initial load.")
        observer.disconnect()
      }
    }

    // Run the removal logic
    removeV0Attribution()

    // Clean up observer on component unmount
    return () => {
      // No need to disconnect if already disconnected, but good practice
      // If you re-enable observer, ensure it's disconnected here
    }
  }, [])

  return null // This component doesn't render anything visible
}
