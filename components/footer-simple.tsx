import Link from "next/link"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export function FooterSimple() {
  return (
    <footer className="bg-[#1e2c49] text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1: Informações de Contato */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#d4b26a]">Contato</h3>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-[#d4b26a]" />
            <p className="text-sm">Rua Exemplo, 123, Centro, Cidade - SP</p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-[#d4b26a]" />
            <p className="text-sm">(11) 99999-9999</p>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-[#d4b26a]" />
            <p className="text-sm">contato@nicholasnascimento.adv.br</p>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#d4b26a]">Navegação</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-sm hover:text-[#d4b26a] transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="text-sm hover:text-[#d4b26a] transition-colors">
              Sobre Nós
            </Link>
            <Link href="/servicos" className="text-sm hover:text-[#d4b26a] transition-colors">
              Serviços
            </Link>
            <Link href="/blog" className="text-sm hover:text-[#d4b26a] transition-colors">
              Blog
            </Link>
            <Link href="/contato" className="text-sm hover:text-[#d4b26a] transition-colors">
              Contato
            </Link>
          </nav>
        </div>

        {/* Coluna 3: Redes Sociais e Copyright */}
        <div className="space-y-4 text-center md:text-right">
          <h3 className="text-xl font-bold text-[#d4b26a]">Siga-nos</h3>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <a href="#" aria-label="Facebook" className="text-white hover:text-[#d4b26a] transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-[#d4b26a] transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#d4b26a] transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            &copy; {new Date().getFullYear()} Nicholas Nascimento Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
