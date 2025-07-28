import Link from "next/link"
import NextImage from "next/image"
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e2c49] text-white py-12">
      <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center">
            <div className="h-16 w-32 relative">
              <NextImage
                src="/logo-nicholas-nascimento.png"
                alt="Nicholas Nascimento Advocacia"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-gray-300 text-sm">
            Advocacia especializada em Direito Imobiliário, com atendimento online em todo o Brasil.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/nicholasadvocacia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-gray-300 hover:text-[#d4b26a] transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/nicholasadvocacia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-gray-300 hover:text-[#d4b26a] transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/nicholas-advocacia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-[#d4b26a] transition-colors" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#d4b26a]">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-[#d4b26a] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="text-gray-300 hover:text-[#d4b26a] transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="text-gray-300 hover:text-[#d4b26a] transition-colors">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-300 hover:text-[#d4b26a] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contato" className="text-gray-300 hover:text-[#d4b26a] transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#d4b26a]">Nossos Serviços</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/servicos/usucapiao" className="text-gray-300 hover:text-[#d4b26a] transition-colors">
                Usucapião
              </Link>
            </li>
            <li>
              <Link
                href="/servicos/regularizacao-imoveis"
                className="text-gray-300 hover:text-[#d4b26a] transition-colors"
              >
                Regularização de Imóveis
              </Link>
            </li>
            <li>
              <Link
                href="/servicos/contratos-imobiliarios"
                className="text-gray-300 hover:text-[#d4b26a] transition-colors"
              >
                Contratos Imobiliários
              </Link>
            </li>
            <li>
              <Link
                href="/servicos/litigios-imobiliarios"
                className="text-gray-300 hover:text-[#d4b26a] transition-colors"
              >
                Litígios Imobiliários
              </Link>
            </li>
            <li>
              <Link
                href="/servicos/incorporacao-imobiliaria"
                className="text-gray-300 hover:text-[#d4b26a] transition-colors"
              >
                Incorporação Imobiliária
              </Link>
            </li>
            <li>
              <Link
                href="/servicos/direito-condominial"
                className="text-gray-300 hover:text-[#d4b26a] transition-colors"
              >
                Direito Condominial
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#d4b26a]">Contato</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-300" />
              <a href="tel:+55339933009228" className="text-gray-300 hover:text-[#d4b26a] transition-colors">
                (33) 99330-09228
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-300" />
              <a
                href="mailto:adv@nicholasadvocacia.com.br"
                className="text-gray-300 hover:text-[#d4b26a] transition-colors"
              >
                adv@nicholasadvocacia.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Nicholas Nascimento Advocacia. Todos os direitos reservados.</p>
        <p>
          <Link href="/politica-de-privacidade" className="hover:underline">
            Política de Privacidade
          </Link>{" "}
          |{" "}
          <Link href="/termos-de-uso" className="hover:underline">
            Termos de Uso
          </Link>
        </p>
      </div>
    </footer>
  )
}
