import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function FooterSimple() {
  return (
    <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
      <div className="container mx-auto px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo-nicholas-nascimento.png"
              alt="Nicholas Advocacia"
              width={180}
              height={40}
              className="mb-4"
            />
            <p className="mb-4 text-gray-300">
              Advocacia especializada em direito imobiliário, oferecendo soluções jurídicas personalizadas para proteger
              seu patrimônio.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-[#d4b26a]" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-[#d4b26a]" />
                <span>adv@nicholasadvocacia.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/servicos/usucapiao" className="hover:text-[#d4b26a]">
                  Usucapião
                </Link>
              </li>
              <li>
                <Link href="/servicos/regularizacao-imoveis" className="hover:text-[#d4b26a]">
                  Regularização de Imóveis
                </Link>
              </li>
              <li>
                <Link href="/servicos/contratos-imobiliarios" className="hover:text-[#d4b26a]">
                  Contratos Imobiliários
                </Link>
              </li>
              <li>
                <Link href="/servicos/litigios-imobiliarios" className="hover:text-[#d4b26a]">
                  Litígios Imobiliários
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/sobre" className="hover:text-[#d4b26a]">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#d4b26a]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/casos-de-sucesso" className="hover:text-[#d4b26a]">
                  Casos de Sucesso
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#d4b26a]">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Nicholas Nascimento Advocacia. Todos os direitos reservados.
        </p>
        <p className="text-center text-gray-400">
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
