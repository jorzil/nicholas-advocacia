import Image from "next/image"
import { Calendar, User, Clock } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { CtaButton } from "@/components/cta-button"
import { BlogSidebar } from "@/components/blog-sidebar"
import { calculateReadTime, formatDate } from "@/lib/utils"

export const metadata = {
  title: "Usucapião Extrajudicial: Como Regularizar seu Imóvel em Metade do Tempo - Nicholas Advocacia",
  description:
    "Descubra como o procedimento extrajudicial pode acelerar significativamente o processo de usucapião, economizando tempo e dinheiro.",
  keywords: "usucapião extrajudicial, regularizar imóvel, advogado usucapião, cartório, processo rápido",
  openGraph: {
    title: "Usucapião Extrajudicial: Como Regularizar seu Imóvel em Metade do Tempo - Nicholas Advocacia",
    description:
      "Descubra como o procedimento extrajudicial pode acelerar significativamente o processo de usucapião, economizando tempo e dinheiro.",
    url: "https://www.nicholasadvocacia.com.br/blog/usucapiao-extrajudicial-como-regularizar-imovel",
    images: ["/blog-usucapiao-extrajudicial-header.png"],
  },
}

export default function BlogPostPage() {
  const post = {
    title: "Usucapião Extrajudicial: Como Regularizar seu Imóvel em Metade do Tempo",
    author: "Nicholas Nascimento",
    publishedAt: "2023-05-08T10:00:00Z",
    featuredImage: "/blog-usucapiao-extrajudicial-header.png",
    content: `
      <h2>Introdução</h2>
      <p>A usucapião é um direito fundamental para quem possui um imóvel sem a devida documentação. Tradicionalmente, o processo era longo e burocrático, tramitando na via judicial. No entanto, a Usucapião Extrajudicial surgiu como uma alternativa mais rápida e eficiente, permitindo a regularização do imóvel diretamente em cartório. Descubra como ela funciona e como pode acelerar a garantia da sua propriedade.</p>

      <h2>O que é Usucapião Extrajudicial?</h2>
      <p>A Usucapião Extrajudicial é um procedimento que permite o reconhecimento da propriedade de um imóvel por meio da posse, sem a necessidade de um processo judicial. Ela é realizada diretamente no Cartório de Registro de Imóveis, com a assistência de um advogado, e é regulamentada pelo Código de Processo Civil e pela Lei de Registros Públicos.</p>

      <h2>Vantagens da Usucapião Extrajudicial</h2>
      <ul>
        <li><strong>Rapidez:</strong> Geralmente, é muito mais rápida que a via judicial, podendo ser concluída em meses, enquanto um processo judicial pode levar anos.</li>
        <li><strong>Menos Burocracia:</strong> Embora exija documentação completa, o trâmite em cartório é menos formal e mais ágil que o judicial.</li>
        <li><strong>Menos Custos:</strong> Em muitos casos, os custos totais podem ser menores, especialmente ao considerar a economia de tempo e a ausência de custas judiciais.</li>
        <li><strong>Segurança Jurídica:</strong> O reconhecimento da propriedade tem a mesma validade jurídica de uma decisão judicial.</li>
      </ul>

      <h2>Requisitos para a Usucapião Extrajudicial</h2>
      <p>Para que o procedimento extrajudicial seja possível, alguns requisitos são essenciais:</p>
      <ol>
        <li><strong>Posse Mansa e Pacífica:</strong> A posse do imóvel deve ser contínua, sem interrupções e sem oposição de terceiros.</li>
        <li><strong>Tempo de Posse:</strong> O prazo de posse exigido pela lei para cada tipo de usucapião (extraordinária, ordinária, especial urbana, etc.) deve ser cumprido.</li>
        <li><strong>Intenção de Dono (Animus Domini):</strong> O possuidor deve agir como se fosse o verdadeiro proprietário do imóvel.</li>
        <li><strong>Inexistência de Litígio:</strong> Não pode haver disputa judicial sobre a posse ou propriedade do imóvel.</li>
        <li><strong>Ata Notarial:</strong> Documento lavrado por tabelião que atesta o tempo de posse e a inexistência de litígio.</li>
        <li><strong>Planta e Memorial Descritivo:</strong> Elaborados por profissional habilitado (engenheiro ou arquiteto), com ART/RRT.</li>
        <li><strong>Documentos Pessoais e do Imóvel:</strong> RG, CPF, comprovantes de residência, certidões de casamento, certidão de matrícula do imóvel (se houver), comprovantes de pagamento de IPTU, contas de consumo, etc.</li>
        <li><strong>Concordância dos Confrontantes:</strong> Os vizinhos do imóvel devem dar sua anuência ao pedido de usucapião.</li>
      </ol>

      <h2>Como a Nicholas Advocacia Pode Ajudar?</h2>
      <p>Nosso escritório é especializado em Direito Imobiliário e possui vasta experiência em Usucapião Extrajudicial. Oferecemos:</p>
      <ul>
        <li>Análise completa do seu caso para verificar a viabilidade do procedimento extrajudicial.</li>
        <li>Orientação sobre a documentação necessária e auxílio na sua obtenção.</li>
        <li>Elaboração da Ata Notarial e dos documentos técnicos (planta e memorial descritivo) em parceria com profissionais qualificados.</li>
        <li>Representação e acompanhamento de todo o processo junto ao Cartório de Registro de Imóveis.</li>
        <li>Resolução de eventuais pendências e comunicação com os envolvidos.</li>
      </ul>
      <p>Com nossa assessoria, você terá a tranquilidade de regularizar seu imóvel de forma segura, rápida e eficiente, garantindo a sua propriedade.</p>
    `,
  }

  const readTime = calculateReadTime(post.content)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.featuredImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-6 text-white">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Usucapião Extrajudicial", href: "/blog/usucapiao-extrajudicial-como-regularizar-imovel" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-lg text-gray-200">
            <div className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Post Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Share Buttons */}
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-[#1e2c49] mb-4">Compartilhe este artigo:</h3>
                <SocialShare
                  title={post.title}
                  url={`https://www.nicholasadvocacia.com.br/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                />
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <CtaButton />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
