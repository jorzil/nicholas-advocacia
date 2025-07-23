import Image from "next/image"
import { Calendar, User, Clock } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { CtaButton } from "@/components/cta-button"
import { BlogSidebar } from "@/components/blog-sidebar"
import { calculateReadTime, formatDate } from "@/lib/utils"

export const metadata = {
  title: "Direito de Vizinhança: Soluções para Conflitos Comuns - Nicholas Advocacia",
  description:
    "Explore as soluções jurídicas para os conflitos mais frequentes entre vizinhos, garantindo a harmonia e o respeito mútuo.",
  keywords: "conflitos de vizinhança, direito de vizinhança, barulho, obras, limites, advogado imobiliário, mediação",
  openGraph: {
    title: "Direito de Vizinhança: Soluções para Conflitos Comuns - Nicholas Advocacia",
    description:
      "Explore as soluções jurídicas para os conflitos mais frequentes entre vizinhos, garantindo a harmonia e o respeito mútuo.",
    url: "https://www.nicholasadvocacia.com.br/blog/direito-vizinhanca-solucoes-conflitos",
    images: ["/neighbors-property-discussion.png"],
  },
}

export default function BlogPostPage() {
  const post = {
    title: "Direito de Vizinhança: Soluções para Conflitos Comuns",
    author: "Nicholas Nascimento",
    publishedAt: "2023-02-10T10:00:00Z", // Same as previous, assuming it's an update or related post
    featuredImage: "/neighbors-property-discussion.png",
    content: `
      <h2>Introdução</h2>
      <p>A convivência em sociedade, especialmente em áreas urbanas, muitas vezes gera conflitos entre vizinhos. O Direito de Vizinhança é o ramo do Direito Civil que regula as relações entre proprietários de imóveis vizinhos, buscando a harmonia e o equilíbrio. Conhecer seus direitos e deveres é essencial para resolver disputas de forma pacífica e legal.</p>
      <h2>Principais Conflitos de Vizinhança</h2>
      <p>Os problemas mais comuns entre vizinhos incluem:</p>
      <ul>
        <li><strong>Uso Nocivo da Propriedade:</strong> Barulho excessivo (festas, obras), fumaça, odores, vibrações que perturbam o sossego e a saúde dos vizinhos.</li>
        <li><strong>Árvores Limítrofes:</strong> Questões sobre galhos e raízes que invadem a propriedade vizinha, frutos caídos, e responsabilidade pela poda.</li>
        <li><strong>Passagem Forçada e Servidão de Passagem:</strong> Direito de acesso a imóvel encravado (sem saída para via pública) e uso de passagem por propriedade alheia.</li>
        <li><strong>Águas:</strong> Problemas com escoamento de água da chuva, infiltrações, e uso de águas comuns.</li>
        <li><strong>Limites entre Imóveis e Direito de Construir:</strong> Disputas sobre demarcação de limites, construção de muros, janelas e aberturas, e direito de construir até o limite da propriedade.</li>
      </ul>
      <h2>Como Resolver Conflitos de Vizinhança</h2>
      <p>A melhor forma de resolver um conflito de vizinhança é sempre buscar o diálogo e a conciliação. Se o diálogo não for suficiente, algumas etapas podem ser seguidas:</p>
      <ol>
        <li><strong>Notificação Extrajudicial:</strong> Enviar uma notificação formal ao vizinho, com a ajuda de um advogado, expondo o problema e buscando uma solução amigável.</li>
        <li><strong>Mediação ou Conciliação:</strong> Buscar um mediador ou conciliador (pode ser um profissional particular ou um órgão público, como o Centro Judiciário de Solução de Conflitos e Cidadania - CEJUSC) para auxiliar na negociação.</li>
        <li><strong>Ação Judicial:</strong> Em último caso, se as tentativas amigáveis falharem, é possível ingressar com uma ação judicial para resolver o conflito. As ações mais comuns são as de dano infecto, nunciação de obra nova, ou ações possessórias.</li>
      </ol>
      <h2>Conclusão</h2>
      <p>O Direito de Vizinhança visa garantir que o uso da propriedade de um não prejudique o sossego, a segurança e a saúde do outro. Em caso de conflitos, a Nicholas Advocacia oferece assessoria jurídica especializada para ajudar você a encontrar a melhor solução, seja por meio do diálogo, mediação ou, se necessário, pela via judicial, protegendo seus direitos e promovendo a boa convivência.</p>
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
              { label: "Direito de Vizinhança", href: "/blog/direito-vizinhanca-solucoes-conflitos" },
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
