import Link from "next/link"
import { FacebookIcon, InstagramIcon, LinkedinIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Nicholas Advocacia</h3>
          <p className="text-sm leading-relaxed">
            Especialistas em Direito Imobiliário, oferecendo soluções jurídicas personalizadas e eficientes para
            garantir a segurança e tranquilidade dos seus bens.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-white transition-colors" href="/servicos/usucapiao">
                Usucapião
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="/servicos/regularizacao-imoveis">
                Regularização de Imóveis
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="/servicos/contratos-imobiliarios">
                Contratos Imobiliários
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="/servicos/litigios-imobiliarios">
                Litígios Imobiliários
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="/servicos/incorporacao-imobiliaria">
                Incorporação Imobiliária
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="/servicos/direito-condominial">
                Direito Condominial
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="/servicos/recuperacao-conta-mercado-livre">
                Recuperação de Conta Mercado Livre
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-gray-500" />
              <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                +55 11 99999-9999
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-gray-500" />
              <a href="mailto:contato@nicholasadvocacia.com.br" className="hover:text-white transition-colors">
                contato@nicholasadvocacia.com.br
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="h-4 w-4 text-gray-500 mt-1" />
              <span>
                Rua Exemplo, 123 - Conj. 45 - Centro
                <br />
                São Paulo - SP, 01000-000
              </span>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nicholas Advocacia. Todos os direitos reservados.
      </div>
    </footer>
  )
}
