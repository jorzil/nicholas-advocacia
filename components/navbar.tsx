"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail, MapPin, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/contexts/auth-context" // Import useAuth
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { user, isLoading, logout } = useAuth() // Get user, isLoading, logout from AuthContext
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.substring(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setActiveSection(id)
      }
    } else {
      // For regular links, let Next.js handle navigation
      setActiveSection("") // Clear active section for external pages
    }
  }

  const navItems = [
    { name: "Início", href: "/#hero" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-nicholas-nascimento.png"
            alt="Nicholas Advocacia Logo"
            width={180}
            height={40}
            className="h-auto w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-lg font-medium transition-colors hover:text-[#d4b26a] ${
                pathname === item.href || activeSection === item.href.substring(2)
                  ? "text-[#d4b26a]"
                  : isScrolled
                    ? "text-gray-700"
                    : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {!isLoading && user ? (
            <>
              <Link
                href="/admin/blog"
                className={`text-lg font-medium transition-colors hover:text-[#d4b26a] ${
                  pathname === "/admin/blog" ? "text-[#d4b26a]" : isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Admin
              </Link>
              <Button
                onClick={logout}
                variant="ghost"
                size="sm"
                className="text-lg font-medium text-red-500 hover:text-red-600"
              >
                <LogOut className="mr-2 h-5 w-5" /> Sair
              </Button>
            </>
          ) : (
            !isLoading &&
            pathname !== "/admin/login" && (
              <Link href="/admin/login">
                <Button variant="ghost" size="sm" className="text-lg font-medium text-white hover:text-[#d4b26a]">
                  Login Admin
                </Button>
              </Link>
            )
          )}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <div className="flex flex-col items-start gap-4 p-4">
              <Link href="/" className="mb-4">
                <Image
                  src="/logo-nicholas-nascimento.png"
                  alt="Nicholas Advocacia Logo"
                  width={180}
                  height={40}
                  className="h-auto w-auto"
                />
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-medium text-gray-700 hover:text-[#d4b26a]"
                >
                  {item.name}
                </Link>
              ))}
              {!isLoading && user ? (
                <>
                  <Link href="/admin/blog" className="text-lg font-medium text-gray-700 hover:text-[#d4b26a]">
                    Admin
                  </Link>
                  <Button
                    onClick={logout}
                    variant="ghost"
                    size="sm"
                    className="text-lg font-medium text-red-500 hover:text-red-600"
                  >
                    <LogOut className="mr-2 h-5 w-5" /> Sair
                  </Button>
                </>
              ) : (
                !isLoading &&
                pathname !== "/admin/login" && (
                  <Link href="/admin/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-lg font-medium text-gray-700 hover:text-[#d4b26a]"
                    >
                      Login Admin
                    </Button>
                  </Link>
                )
              )}
              <div className="mt-6 w-full space-y-3 border-t pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+55 (XX) XXXXX-XXXX"}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>contato@nicholasadvocacia.com.br</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>Rua Exemplo, 123, Centro, Cidade - SP</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
