import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import { FadeIn } from "./fade-in"

export function BlogSidebar() {
  const recentPosts = [
    {
      title: "Usucapião Extrajudicial: Como Regularizar Seu Imóvel",
      href: "/blog/usucapiao-extrajudicial-como-regularizar-imovel",
    },
    { title: "Documentos Essenciais para Usucapião", href: "/blog/documentos-essenciais-usucapiao" },
    { title: "Erros Fatais em Contratos Imobiliários", href: "/blog/erros-fatais-contratos-imobiliarios" },
    { title: "O Custo do Adiamento: Regularização de Imóveis", href: "/blog/regularizacao-imoveis-custo-adiamento" },
  ]

  const categories = [
    { name: "Usucapião", href: "/blog?category=usucapiao" },
    { name: "Contratos Imobiliários", href: "/blog?category=contratos" },
    { name: "Regularização de Imóveis", href: "/blog?category=regularizacao" },
    { name: "Direito Condominial", href: "/blog?category=condominial" },
    { name: "Direito de Vizinhança", href: "/blog?category=vizinhanca" },
    { name: "Direito Digital", href: "/blog?category=digital" },
  ]

  return (
    <aside className="space-y-8">
      <FadeIn>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#1e2c49]">Posts Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#d4b26a] transition-colors"
                >
                  {post.title}
                </Link>
              ))}
            </nav>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#1e2c49]">Categorias</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#d4b26a] transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.3}>
        <Card className="shadow-lg bg-[#1e2c49] text-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#d4b26a]">Fale Conosco</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-[#d4b26a]" />
              <a href="tel:+5511999999999" className="text-sm hover:underline">
                (11) 99999-9999
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-[#d4b26a]" />
              <a href="mailto:contato@nicholasnascimento.adv.br" className="text-sm hover:underline">
                contato@nicholasnascimento.adv.br
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-[#d4b26a] flex-shrink-0 mt-1" />
              <p className="text-sm">Rua Exemplo, 123, Centro, Cidade - SP</p>
            </div>
            <Link href="/contato" passHref>
              <Button className="w-full bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e] transition-colors mt-4">
                Agendar Consulta
              </Button>
            </Link>
          </CardContent>
        </Card>
      </FadeIn>
    </aside>
  )
}
