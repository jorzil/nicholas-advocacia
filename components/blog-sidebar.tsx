// This component was previously assumed correct and is included here for completeness.
// No specific refactoring was requested or applied to this file.
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils" // Assuming cn utility is available

export function BlogSidebar() {
  const pathname = usePathname()

  const recentPosts = [
    {
      title: "Usucapião Extrajudicial: Como Regularizar seu Imóvel em Metade do Tempo",
      slug: "usucapiao-extrajudicial-como-regularizar-imovel",
    },
    {
      title: "Os 7 Documentos Essenciais para Garantir o Sucesso do seu Processo de Usucapião",
      slug: "documentos-essenciais-usucapiao",
    },
    {
      title: "5 Erros Fatais em Contratos Imobiliários que Podem Custar seu Patrimônio",
      slug: "erros-fatais-contratos-imobiliarios",
    },
    {
      title: "Regularização de Imóveis: O Custo de Adiar",
      slug: "regularizacao-imoveis-custo-adiamento",
    },
    {
      title: "Direito de Vizinhança: Como Resolver Conflitos Comuns",
      slug: "direito-vizinhanca-resolver-conflitos",
    },
  ]

  const categories = [
    { name: "Usucapião", slug: "usucapiao" },
    { name: "Regularização de Imóveis", slug: "regularizacao-imoveis" },
    { name: "Contratos Imobiliários", slug: "contratos-imobiliarios" },
    { name: "Litígios Imobiliários", slug: "litigios-imobiliarios" },
    { name: "Direito Condominial", slug: "direito-condominial" },
    { name: "Direito de Vizinhança", slug: "direito-vizinhanca" },
  ]

  return (
    <aside className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-24 lg:top-28">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#1e2c49] mb-4">Posts Recentes</h3>
        <nav>
          <ul className="space-y-2">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className={cn(
                    "block px-3 py-2 rounded-md text-gray-700 hover:bg-[#d4b26a]/20 hover:text-[#1e2c49] transition-colors",
                    pathname === `/blog/${post.slug}` && "bg-[#d4b26a] text-[#1e2c49] font-semibold",
                  )}
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#1e2c49] mb-4">Categorias</h3>
        <nav>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/blog/categoria/${category.slug}`}
                  className={cn(
                    "block px-3 py-2 rounded-md text-gray-700 hover:bg-[#d4b26a]/20 hover:text-[#1e2c49] transition-colors",
                    pathname === `/blog/categoria/${category.slug}` && "bg-[#d4b26a] text-[#1e2c49] font-semibold",
                  )}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
