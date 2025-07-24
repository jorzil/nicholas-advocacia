import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export function NavbarSimple() {
  return (
    <header className="w-full bg-[#1e2c49] text-white py-4 px-4 md:px-6 flex items-center justify-between shadow-md">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/logo-nicholas-nascimento.png"
          alt="Nicholas Nascimento Advocacia"
          width={180}
          height={40}
          className="h-10 w-auto"
        />
        <span className="sr-only">Nicholas Nascimento Advocacia</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-sm font-medium hover:text-[#d4b26a] transition-colors" prefetch={false}>
          Início
        </Link>
        <Link href="/sobre" className="text-sm font-medium hover:text-[#d4b26a] transition-colors" prefetch={false}>
          Sobre Nós
        </Link>
        <Link href="/servicos" className="text-sm font-medium hover:text-[#d4b26a] transition-colors" prefetch={false}>
          Serviços
        </Link>
        <Link href="/blog" className="text-sm font-medium hover:text-[#d4b26a] transition-colors" prefetch={false}>
          Blog
        </Link>
        <Link href="/contato" className="text-sm font-medium hover:text-[#d4b26a] transition-colors" prefetch={false}>
          Contato
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-white text-[#1e2c49] w-[250px] sm:w-[300px]">
          <Link href="/" className="flex items-center gap-2 py-4" prefetch={false}>
            <Image
              src="/logo-nicholas-nascimento.png"
              alt="Nicholas Nascimento Advocacia"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
            <span className="sr-only">Nicholas Nascimento Advocacia</span>
          </Link>
          <nav className="grid gap-4 py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#d4b26a] transition-colors"
              prefetch={false}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#d4b26a] transition-colors"
              prefetch={false}
            >
              Sobre Nós
            </Link>
            <Link
              href="/servicos"
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#d4b26a] transition-colors"
              prefetch={false}
            >
              Serviços
            </Link>
            <Link
              href="/blog"
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#d4b26a] transition-colors"
              prefetch={false}
            >
              Blog
            </Link>
            <Link
              href="/contato"
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#d4b26a] transition-colors"
              prefetch={false}
            >
              Contato
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
