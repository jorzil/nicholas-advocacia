import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

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
  ]
}

export async function BlogSection() {
  const blogPosts = await getBlogPosts()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e2c49] mb-8">Últimas do Blog</h2>
          <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
            Artigos e notícias sobre direito imobiliário e digital para você se manter informado.
          </p>
        </FadeIn>
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
        <FadeIn delay={0.4}>
          <div className="mt-12">
            <Link href="/blog" passHref>
              <Button className="bg-[#1e2c49] text-white hover:bg-[#2a3c5e] px-8 py-3 text-lg font-semibold shadow transition-colors">
                Ver Todas as Postagens
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
