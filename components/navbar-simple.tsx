// This component is not used in the current structure but is kept for completeness
// if a simpler navbar is needed elsewhere.
import Link from "next/link"
import Image from "next/image"

export function NavbarSimple() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
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
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#d4b26a] transition-colors">
              Home
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-[#d4b26a] transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
