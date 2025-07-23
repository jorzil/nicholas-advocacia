"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth" // Import useAuth

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const { user, isLoading, logout } = useAuth() // Safely destructure user, isLoading, and logout

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest("nav")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden" // Prevent scrolling when mobile menu is open
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false) // Close mobile menu on click
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If not on home page, navigate to home with hash
      window.location.href = `/#${sectionId}`
    }
  }

  if (!isMounted) {
    // Render a basic placeholder or nothing until mounted to prevent hydration mismatch
    return (
      <nav className="fixed top-0 z-50 w-full bg-white shadow-md" role="navigation" aria-label="Menu principal">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Ir para página inicial">
              <div className="h-16 w-32 relative">
                <Image
                  src="/logo-nicholas-nascimento.png"
                  alt="Nicholas Nascimento Advocacia"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md" role="navigation" aria-label="Menu principal">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Ir para página inicial">
            <div className="h-16 w-32 relative">
              <Image
                src="/logo-nicholas-nascimento.png"
                alt="Nicholas Nascimento Advocacia"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#d4b26a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4b26a] rounded-md px-2 py-1"
              aria-label="Ir para página inicial"
            >
              Home
            </Link>
            <button
              onClick={() => handleNavClick("sobre-escritorio")}
              className="text-gray-700 hover:text-[#d4b26a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4b26a] rounded-md px-2 py-1 cursor-pointer"
              aria-label="Sobre o escritório"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavClick("servicos")}
              className="text-gray-700 hover:text-[#d4b26a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4b26a] rounded-md px-2 py-1 cursor-pointer"
              aria-label="Atuação jurídica especializada"
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavClick("blog-section")}
              className="text-gray-700 hover:text-[#d4b26a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4b26a] rounded-md px-2 py-1 cursor-pointer"
              aria-label="Blog jurídico"
            >
              Blog
            </button>
            <button
              onClick={() => handleNavClick("contato-section")}
              className="text-gray-700 hover:text-[#d4b26a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4b26a] rounded-md px-2 py-1 cursor-pointer"
              aria-label="Entre em contato"
            >
              Contato
            </button>
            {isLoading ? null : user ? (
              <>
                <span className="text-gray-700">Olá, {user.username}!</span>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="text-gray-700 border-gray-700 hover:bg-[#d4b26a] hover:text-white bg-transparent"
                >
                  Sair
                </Button>
                <Link href="/admin/blog">
                  <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] focus:ring-2 focus:ring-[#d4b26a]">
                    Admin
                  </Button>
                </Link>
              </>
            ) : (
              <Link href="/admin/login">
                <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] focus:ring-2 focus:ring-[#d4b26a]">
                  Login Admin
                </Button>
              </Link>
            )}
            <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] focus:ring-2 focus:ring-[#d4b26a]">
              <Link
                href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!"
                className="flex items-center gap-2"
                aria-label="Falar com especialista no WhatsApp"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Falar com Especialista
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#d4b26a]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t border-gray-200"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-[#d4b26a] hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b26a]"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                aria-label="Ir para página inicial"
              >
                Home
              </Link>
              <button
                onClick={() => handleNavClick("sobre-escritorio")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#d4b26a] hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b26a]"
                role="menuitem"
                aria-label="Sobre o escritório"
              >
                Sobre
              </button>
              <button
                onClick={() => handleNavClick("servicos")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#d4b26a] hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b26a]"
                role="menuitem"
                aria-label="Atuação jurídica especializada"
              >
                Serviços
              </button>
              <button
                onClick={() => handleNavClick("blog-section")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#d4b26a] hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b26a]"
                role="menuitem"
                aria-label="Blog jurídico"
              >
                Blog
              </button>
              <button
                onClick={() => handleNavClick("contato-section")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#d4b26a] hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b26a]"
                role="menuitem"
                aria-label="Entre em contato"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                {isLoading ? null : user ? (
                  <>
                    <span className="text-sm text-gray-700 block mb-2">Olá, {user.username}!</span>
                    <Button
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      variant="outline"
                      className="w-full text-gray-700 border-gray-700 hover:bg-[#d4b26a] hover:text-white bg-transparent mb-2"
                    >
                      Sair
                    </Button>
                    <Link href="/admin/blog">
                      <Button
                        className="w-full bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] focus:ring-2 focus:ring-[#d4b26a]"
                        onClick={() => setIsOpen(false)}
                      >
                        Admin
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Link href="/admin/login">
                    <Button
                      className="w-full bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] focus:ring-2 focus:ring-[#d4b26a]"
                      onClick={() => setIsOpen(false)}
                    >
                      Login Admin
                    </Button>
                  </Link>
                )}
              </div>
              <div className="px-3 py-2">
                <Button className="w-full bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] focus:ring-2 focus:ring-[#d4b26a]">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!"
                    className="flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                    aria-label="Falar com especialista no WhatsApp"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Falar com Especialista
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
