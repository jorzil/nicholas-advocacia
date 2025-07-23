import Image from "next/image"
import { Calendar, User, Clock } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { CtaButton } from "@/components/cta-button"
import { BlogSidebar } from "@/components/blog-sidebar"
import { calculateReadTime, formatDate } from "@/lib/utils"

export const metadata = {
  title: "Direito Condominial: Gestão e Solução de Conflitos em Condomínios - Nicholas Advocacia",
  description:
    "Entenda o Direito Condominial, o papel do síndico e como resolver conflitos em condomínios de forma eficaz.",
  keywords:
    "direito condominial, condomínio, síndico, conflitos condominiais, advogado condominial, gestão de condomínios",
  openGraph: {
    title: "Direito Condominial: Gestão e Solução de Conflitos em Condomínios - Nicholas Advocacia",
    description:
      "Entenda o Direito Condominial, o papel do síndico e como resolver conflitos em condomínios de forma eficaz.",
    url: "https://www.nicholasadvocacia.com.br/blog/direito-condominial-gestao-conflitos",
    images: ["/blog-direito-condominial.png"],
  },
}

export default function BlogPostPage() {
  const post = {
    title: "Direito Condominial: Gestão e Solução de Conflitos em Condomínios",
    author: "Nicholas Nascimento",
    publishedAt: "2023-01-05T10:00:00Z",
    featuredImage: "/blog-direito-condominial.png",
    content: `
      <h2>Introdução</h2>
      <p>A vida em condomínio, seja ele residencial ou comercial, é regida por um conjunto de regras e leis que visam garantir a boa convivência e a manutenção do patrimônio comum. O Direito Condominial é o ramo jurídico que trata dessas relações, oferecendo ferramentas para a gestão eficiente e a solução de conflitos. Síndicos, administradoras e condôminos precisam estar cientes de seus direitos e deveres para evitar problemas.</p>
      <h2>Principais Aspectos do Direito Condominial</h2>
      <ul>
        <li><strong>Convenção de Condomínio e Regimento Interno:</strong> São os documentos que estabelecem as regras de convivência, direitos e deveres dos condôminos, forma de administração, e as penalidades para infrações.</li>
        <li><strong>Assembleias Condominiais:</strong> São o principal fórum de decisão do condomínio, onde são aprovadas contas, eleitos síndicos, e deliberadas sobre obras e outras questões importantes.</li>
        <li><strong>Cobrança de Cotas Condominiais:</strong> A inadimplência é um dos maiores desafios dos condomínios. O Direito Condominial oferece meios legais para a cobrança de dívidas, incluindo ações judiciais.</li>
        <li><strong>Obras em Condomínios:</strong> Regras para a realização de obras nas áreas comuns e nas unidades privativas, exigindo aprovações e licenças específicas.</li>
        <li><strong>Conflitos entre Vizinhos:</strong> Questões como barulho, animais de estimação, uso de áreas comuns, e danos a propriedades vizinhas.</li>
      </ul>
      <h2>O Papel do Síndico e da Administradora</h2>
      <p>O síndico é o representante legal do condomínio, responsável pela sua administração e pela execução das decisões das assembleias. A administradora, por sua vez, presta serviços de apoio ao síndico, como gestão financeira, contábil e de pessoal. Ambos precisam de suporte jurídico para atuar em conformidade com a lei e evitar responsabilidades.</p>
      <h2>Solução de Conflitos em Condomínios</h2>
      <p>Conflitos são inevitáveis em condomínios, mas podem ser resolvidos de forma eficaz com a intervenção jurídica adequada:</p>
      <ol>
        <li><strong>Mediação e Conciliação:</strong> Buscar um acordo amigável entre as partes, com a ajuda de um mediador.</li>
        <li><strong>Notificação Extrajudicial:</strong> Formalizar a reclamação e a busca por uma solução antes de recorrer à justiça.</li>
        <li><strong>Ações Judiciais:</strong> Em casos de inadimplência persistente, danos, ou descumprimento grave das regras, a via judicial pode ser necessária para garantir os direitos do condomínio ou dos condôminos.</li>
      </ol>
      <h2>Como a Nicholas Advocacia Pode Ajudar?</h2>
      <p>Nosso escritório oferece assessoria jurídica completa em Direito Condominial para síndicos, administradoras e condôminos, incluindo:</p>
      <ul>
        <li>Elaboração e revisão de Convenções e Regimentos Internos.</li>
        <li>Assessoria em assembleias e na tomada de decisões.</li>
        <li>Cobrança judicial e extrajudicial de cotas condominiais.</li>
        <li>Defesa em ações judiciais e extrajudiciais.</li>
        <li>Mediação de conflitos entre vizinhos.</li>
        <li>Orientação sobre obras e responsabilidades.</li>
      </ul>
      <p>Com nossa expertise, seu condomínio terá a segurança jurídica necessária para uma gestão eficiente e uma convivência harmoniosa.</p>
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
              { label: "Direito Condominial", href: "/blog/direito-condominial-gestao-conflitos" },
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
