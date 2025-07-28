// This component was previously assumed correct and is included here for completeness.
// No specific refactoring was requested or applied to this file.
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils" // Assuming cn utility is available

export function ServiceSidebar() {
  const pathname = usePathname()

  const services = [
    { name: "Usucapião", href: "/servicos/usucapiao" },
    { name: "Regularização de Imóveis", href: "/servicos/regularizacao-imoveis" },
    { name: "Contratos Imobiliários e Due Diligence", href: "/servicos/contratos-imobiliarios" },
    { name: "Litígios Imobiliários", href: "/servicos/litigios-imobiliarios" },
    { name: "Incorporação Imobiliária", href: "/servicos/incorporacao-imobiliaria" },
    { name: "Direito Condominial", href: "/servicos/direito-condominial" },
    { name: "Ações Locatícias (Aluguel)", href: "/servicos/acoes-locaticias" },
    { name: "Recuperação de Conta Mercado Livre", href: "/servicos/recuperacao-conta-mercado-livre" },
  ]

  return (
    <aside className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-24 lg:top-28">
      <h3 className="text-xl font-bold text-[#1e2c49] mb-4">Nossos Serviços</h3>
      <nav>
        <ul className="space-y-2">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-gray-700 hover:bg-[#d4b26a]/20 hover:text-[#1e2c49] transition-colors",
                  pathname === service.href && "bg-[#d4b26a] text-[#1e2c49] font-semibold",
                )}
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
