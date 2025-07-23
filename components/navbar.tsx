"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, LogInIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context" // Import useAuth
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const { user, isLoading, logout } = useAuth() // Safely destructure user, isLoading, and logout

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ]

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
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950"
        role="navigation"
        aria-label="Menu principal"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
          <Link className="flex items-center gap-2" href="/">
            <div className="h-16 w-32 relative">
              <Image
                src="/logo-nicholas-nascimento.png"
                alt="Nicholas Advocacia Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="sr-only">Nicholas Advocacia</span>
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950"
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        <Link className="flex items-center gap-2" href="/">
          <div className="h-16 w-32 relative">
            <Image
              src="/logo-nicholas-nascimento.png"
              alt="Nicholas Nascimento Advocacia"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="sr-only">Nicholas Advocacia</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className={cn(
                "font-medium transition-colors hover:text-primary-foreground",
                pathname === link.href ? "text-primary-foreground" : "text-gray-500 dark:text-gray-400",
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
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
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="md:hidden bg-transparent" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className={cn(
                    "font-medium transition-colors hover:text-primary-foreground",
                    pathname === link.href ? "text-primary-foreground" : "text-gray-500 dark:text-gray-400",
                  )}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
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
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
