"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link className="flex items-center gap-2" href="/">
            <Image src="/logo-nicholas-nascimento.png" alt="Nicholas Advocacia Logo" width={150} height={40} priority />
            <span className="sr-only">Nicholas Advocacia</span>
          </Link>
          <p className="text-sm">
            Especialistas em Direito Imobiliário, oferecendo soluções jurídicas personalizadas e eficientes para
            proteger seu patrimônio.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
          <nav className="space-y-2">
            <Link className="block text-sm hover:text-white transition-colors" href="/">
              Início
            </Link>
            <Link className="block text-sm hover:text-white transition-colors" href="/sobre">
              Sobre
            </Link>
            <Link className="block text-sm hover:text-white transition-colors" href="/servicos">
              Serviços
            </Link>
            <Link className="block text-sm hover:text-white transition-colors" href="/blog">
              Blog
            </Link>
            <Link className="block text-sm hover:text-white transition-colors" href="/contato">
              Contato
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Serviços</h3>
          <nav className="space-y-2">
            <Link className="block text-sm hover:text-white transition-colors" href="/servicos/usucapiao">
              Usucapião
            </Link>
            <Link className="block text-sm hover:text-white transition-colors" href="/servicos/regularizacao-imoveis">
              Regularização de Imóveis
            </Link>
            <Link className="block text-sm hover:text-white transition-colors" href="/servicos/contratos-imobiliarios">
              Contratos Imobiliários
            </Link>
            <Link className="block text-sm hover:text-white transition-colors" href="/servicos/litigios-imobiliarios">
              Litígios Imobiliários
            </Link>
            <Link
              className="block text-sm hover:text-white transition-colors"
              href="/servicos/incorporacao-imobiliaria"
            >
              Incorporação Imobiliária
            </Link>
            <Link className="block text-sm hover:text-white transition-colors" href="/servicos/direito-condominial">
              Direito Condominial
            </Link>
            <Link
              className="block text-sm hover:text-white transition-colors"
              href="/servicos/recuperacao-conta-mercado-livre"
            >
              Recuperação de Conta Mercado Livre
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contato</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-foreground" />
              <p className="text-sm">Rua Boa Vista, 123, Centro, Arapiraca - AL</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary-foreground" />
              <a className="text-sm hover:text-white transition-colors" href="tel:+5582999999999">
                (82) 99999-9999
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary-foreground" />
              <a className="text-sm hover:text-white transition-colors" href="mailto:contato@nicholasadvocacia.com.br">
                contato@nicholasadvocacia.com.br
              </a>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Link aria-label="Facebook" href="#">
              <Facebook className="h-6 w-6 hover:text-white transition-colors" />
            </Link>
            <Link aria-label="Instagram" href="#">
              <Instagram className="h-6 w-6 hover:text-white transition-colors" />
            </Link>
            <Link aria-label="LinkedIn" href="#">
              <Linkedin className="h-6 w-6 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
        © {new Date().getFullYear()} Nicholas Advocacia. Todos os direitos reservados.
      </div>
    </footer>
  )
}
