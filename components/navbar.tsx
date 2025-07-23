"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, LogInIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const { user, isLoading, logout } = useAuth()

  const navLinks = [
    { href: "/", label: "Início", sectionId: "hero-section" }, // Added sectionId for homepage scrolling
    { href: "/sobre", label: "Sobre", sectionId: "sobre-escritorio" },
    { href: "/servicos", label: "Serviços", sectionId: "servicos" },
    { href: "/blog", label: "Blog", sectionId: "blog-section" },
    { href: "/contato", label: "Contato", sectionId: "contato-section" },
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest("nav") && !target.closest("[data-radix-popper-content-wrapper]")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const handleNavClick = (sectionId: string, href: string) => {
    setIsOpen(false)
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = `${href}#${sectionId}`
    }
  }

  if (!isMounted) {
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
              href={link.href}
              onClick={(e) => {
                if (link.sectionId && isHomePage) {
                  e.preventDefault()
                  handleNavClick(link.sectionId, link.href)
                }
              }}
              className={cn(
                "font-medium transition-colors hover:text-[#d4b26a]",
                pathname === link.href ? "text-[#d4b26a]" : "text-gray-500 dark:text-gray-400",
              )}
            >
              {link.label}
            </Link>
          ))}
          {isLoading ? null : user ? (
            <>
              <span className="text-gray-700 dark:text-gray-300">Olá, {user.username}!</span>
              <Button
                onClick={logout}
                variant="outline"
                className="text-gray-700 border-gray-700 hover:bg-[#d4b26a] hover:text-white bg-transparent dark:text-gray-300 dark:border-gray-600 dark:hover:bg-[#d4b26a]"
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
              <Button
                variant="ghost"
                className="h-auto p-0 font-medium text-gray-500 hover:text-[#d4b26a] dark:text-gray-400 dark:hover:text-[#d4b26a]"
              >
                <LogInIcon className="mr-2 h-4 w-4" /> Login Admin
              </Button>
            </Link>
          )}
          <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] focus:ring-2 focus:ring-[#d4b26a]">
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!`}
              className="flex items-center gap-2"
              aria-label="Falar com especialista no WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
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
                  href={link.href}
                  onClick={(e) => {
                    if (link.sectionId && isHomePage) {
                      e.preventDefault()
                      handleNavClick(link.sectionId, link.href)
                    }
                    setIsOpen(false)
                  }}
                  className={cn(
                    "font-medium transition-colors hover:text-[#d4b26a]",
                    pathname === link.href ? "text-[#d4b26a]" : "text-gray-500 dark:text-gray-400",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              {isLoading ? null : user ? (
                <>
                  <span className="text-sm text-gray-700 block mb-2 dark:text-gray-300">Olá, {user.username}!</span>
                  <Button
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                    variant="outline"
                    className="w-full text-gray-700 border-gray-700 hover:bg-[#d4b26a] hover:text-white bg-transparent mb-2 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-[#d4b26a]"
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
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!`}
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                  aria-label="Falar com especialista no WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
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
