"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon, LogInIcon, LogOutIcon } from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function Navbar() {
  const { user, isLoading, logout } = useAuth()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogout = async () => {
    await logout()
    router.push("/admin/login")
  }

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white shadow-sm">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden bg-transparent" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex" href="/">
            <Image
              alt="Nicholas Advocacia Logo"
              className="h-8 w-auto"
              height="32"
              src="/logo-nicholas-nascimento.png"
              style={{
                aspectRatio: "120/32",
                objectFit: "contain",
              }}
              width="120"
            />
            <span className="sr-only">Nicholas Advocacia</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
              Início
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/servicos">
              Serviços
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/sobre">
              Sobre
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/blog">
              Blog
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/contato">
              Contato
            </Link>
            {isClient && !isLoading && user && (
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/admin/blog">
                Admin Blog
              </Link>
            )}
            {isClient && !isLoading && (
              <div className="flex w-full items-center py-2 text-lg font-semibold">
                {user ? (
                  <Button onClick={handleLogout} variant="ghost" className="w-full justify-start">
                    <LogOutIcon className="mr-2 h-5 w-5" /> Sair ({user.username})
                  </Button>
                ) : (
                  <Link href="/admin/login">
                    <Button variant="ghost" className="w-full justify-start">
                      <LogInIcon className="mr-2 h-5 w-5" /> Login
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="/">
        <Image
          alt="Nicholas Advocacia Logo"
          className="h-8 w-auto"
          height="32"
          src="/logo-nicholas-nascimento.png"
          style={{
            aspectRatio: "120/32",
            objectFit: "contain",
          }}
          width="120"
        />
        <span className="sr-only">Nicholas Advocacia</span>
      </Link>
      <nav className="ml-auto hidden gap-5 lg:flex">
        <Link className="font-medium hover:underline underline-offset-4" href="/">
          Início
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="/servicos">
          Serviços
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="/sobre">
          Sobre
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="/blog">
          Blog
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="/contato">
          Contato
        </Link>
        {isClient && !isLoading && user && (
          <Link className="font-medium hover:underline underline-offset-4" href="/admin/blog">
            Admin Blog
          </Link>
        )}
        {isClient && !isLoading && (
          <>
            {user ? (
              <Button onClick={handleLogout} variant="ghost" className="h-auto p-0 font-medium">
                <LogOutIcon className="mr-2 h-4 w-4" /> Sair ({user.username})
              </Button>
            ) : (
              <Link href="/admin/login">
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  <LogInIcon className="mr-2 h-4 w-4" /> Login
                </Button>
              </Link>
            )}
          </>
        )}
      </nav>
    </header>
  )
}
