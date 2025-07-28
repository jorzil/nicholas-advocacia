import NextImage from "next/image"
import Link from "next/link"
import { Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e2c49] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <NextImage
                src="/logo-nicholas-nascimento.png"
                alt="Nicholas Nascimento Advocacia"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">Nicholas Nascimento</h3>
                <p className="text-sm text-blue-200">Advocacia</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Especialistas em direito imobiliário e civil, oferecendo soluções jurídicas personalizadas com excelência
              e dedicação.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos/usucapiao" className="text-blue-100 hover:text-white transition-colors">
                  Usucapião
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/regularizacao-imoveis"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Regularização de Imóveis
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/contratos-imobiliarios"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Contratos Imobiliários
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/litigios-imobiliarios"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Litígios Imobiliários
                </Link>
              </li>
              <li>
                <Link href="/servicos/direito-condominial" className="text-blue-100 hover:text-white transition-colors">
                  Direito Condominial
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-blue-100 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-blue-100 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-blue-100 hover:text-white transition-colors">
                  Todos os Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-blue-100">(33) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-100">contato@nicholasnascimento.adv.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-blue-300 mt-0.5" />
                <div className="text-blue-100">
                  <p>Seg-Sex: 8h às 18h</p>
                  <p>Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>© {new Date().getFullYear()} Nicholas Nascimento Advocacia. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/politica-privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
