import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

interface BlogPost {
  id: string
  title: string
  description: string
  imageUrl: string
  slug: string
  author: string
  createdAt: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  // In a real application, this would fetch from a database or CMS
  // For now, we'll use static data
  return [
    {
      id: "1",
      title: "Usucapião Extrajudicial: Como Regularizar Seu Imóvel de Forma Rápida e Segura",
      description:
        "Descubra como a usucapião extrajudicial pode ser a solução para regularizar a propriedade do seu imóvel de maneira mais ágil e menos burocrática.",
      imageUrl: "/blog-usucapiao-extrajudicial.png",
      slug: "usucapiao-extrajudicial-como-regularizar-imovel",
      author: "Nicholas Nascimento",
      createdAt: "2024-07-15",
    },
    {
      id: "2",
      title: "Documentos Essenciais para Usucapião: Guia Completo para Regularizar Seu Imóvel",
      description:
        "Conheça a lista completa de documentos que você precisa para dar entrada no processo de usucapião e garantir a segurança jurídica da sua propriedade.",
      imageUrl: "/blog-documentos-usucapiao.png",
      slug: "documentos-essenciais-usucapiao",
      author: "Nicholas Nascimento",
      createdAt: "2024-07-10",
    },
    {
      id: "3",
      title: "Erros Fatais em Contratos Imobiliários: Como Evitá-los e Garantir Sua Segurança",
      description:
        "Evite armadilhas comuns em contratos de compra, venda ou locação de imóveis. Saiba quais são os erros mais graves e como se proteger.",
      imageUrl: "/blog-erros-contratos-imoveis.png",
      slug: "erros-fatais-contratos-imobiliarios",
      author: "Nicholas Nascimento",
      createdAt: "2024-07-05",
    },
    {
      id: "4",
      title: "O Custo do Adiamento: Por Que Regularizar Seu Imóvel Não Pode Esperar",
      description:
        "Descubra os riscos e prejuízos de manter seu imóvel irregular e entenda por que a regularização é um investimento essencial para seu patrimônio.",
      imageUrl: "/blog-regularizacao-imoveis.png",
      slug: "regularizacao-imoveis-custo-adiamento",
      author: "Nicholas Nascimento",
      createdAt: "2024-06-28",
    },
    {
      id: "5",
      title: "Direito de Vizinhança: Como Resolver Conflitos e Manter a Harmonia",
      description:
        "Conflitos entre vizinhos são comuns, mas podem ser resolvidos de forma amigável ou legal. Entenda seus direitos e deveres para uma boa convivência.",
      imageUrl: "/blog-direito-vizinhanca.png",
      slug: "direito-vizinhanca-resolver-conflitos",
      author: "Nicholas Nascimento",
      createdAt: "2024-06-20",
    },
    {
      id: "6",
      title: "Incorporação Imobiliária: Guia Completo para Construtoras e Investidores",
      description:
        "Entenda o processo de incorporação imobiliária, desde a aquisição do terreno até a entrega das unidades, e a importância da assessoria jurídica especializada.",
      imageUrl: "/blog-incorporacao-imobiliaria.png",
      slug: "incorporacao-imobiliaria-guia-completo",
      author: "Nicholas Nascimento",
      createdAt: "2024-06-15",
    },
    {
      id: "7",
      title: "Direito Condominial: Gestão de Conflitos e Regras Essenciais",
      description:
        "Navegue pelas complexidades do direito condominial. Este artigo aborda a gestão de conflitos, as regras essenciais e a importância de uma boa assessoria jurídica para síndicos e moradores.",
      imageUrl: "/blog-direito-condominial-gestao-conflitos.png",
      slug: "direito-condominial-gestao-conflitos",
      author: "Nicholas Nascimento",
      createdAt: "2024-06-10",
    },
  ]
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1e2c49] to-[#2a3c5e] text-white">
          <div className="container px-4 md:px-6 text-center">
            <FadeIn>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Nosso Blog</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Fique por dentro das últimas notícias e análises sobre direito imobiliário e digital.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <FadeIn key={post.id} delay={0.1 * index}>
                  <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        src={post.imageUrl || "/placeholder.svg"}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl font-bold text-[#1e2c49]">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-sm text-gray-500 mb-4">
                        Por {post.author} em {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                      </div>
                      <Link href={`/blog/${post.slug}`} passHref>
                        <Button className="w-full bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e] transition-colors">
                          Leia Mais
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
