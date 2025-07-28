"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e2c49] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start">
          <Link href="/" className="mb-4" aria-label="Página inicial Nicholas Advocacia">
            <div className="h-20 w-40 relative">
              <Image
                src="/logo-nicholas-nascimento.png"
                alt="Nicholas Nascimento Advocacia"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="text-sm text-gray-300 text-center md:text-left max-w-xs">
            Especialistas em Direito Imobiliário e Empresarial, oferecendo soluções jurídicas personalizadas e eficazes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#d4b26a] mb-4 text-center md:text-left">Links Rápidos</h3>
          <ul className="space-y-2 text-center md:text-left">
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
          <h3 className="text-lg font-semibold text-[#d4b26a] mb-4 text-center md:text-left">Serviços</h3>
          <ul className="space-y-2 text-center md:text-left">
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
          <h3 className="text-lg font-semibold text-[#d4b26a] mb-4 text-center md:text-left">Contato</h3>
          <ul className="space-y-2 text-center md:text-left">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-5 w-5 text-[#d4b26a]" />
              <a href="tel:+5533933009228" className="text-gray-300 hover:text-[#d4b26a] transition-colors">
                +55 (33) 93300-9228
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-5 w-5 text-[#d4b26a]" />
              <a
                href="mailto:contato@nicholasadvocacia.com.br"
                className="text-gray-300 hover:text-[#d4b26a] transition-colors"
              >
                contato@nicholasadvocacia.com.br
              </a>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              
              
            </li>
          </ul>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="https://www.facebook.com/nicholasadvocacia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-gray-300 hover:text-[#d4b26a] transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/nicholasadvocacia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-gray-300 hover:text-[#d4b26a] transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/company/nicholasadvocacia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-[#d4b26a] transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nicholas Advocacia. Todos os direitos reservados.
      </div>
    </footer>
  )
}
