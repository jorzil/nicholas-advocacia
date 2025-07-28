import Image from "next/image"
import { Calendar, User, Clock } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { CtaButton } from "@/components/cta-button"
import { BlogSidebar } from "@/components/blog-sidebar"
import { calculateReadTime, formatDate } from "@/lib/utils"

export const metadata = {
  title: "5 Erros Fatais em Contratos Imobiliários que Podem Custar seu Patrimônio - Nicholas Advocacia",
  description:
    "Evite prejuízos financeiros e dores de cabeça conhecendo os erros mais comuns em contratos de compra e venda de imóveis.",
  keywords:
    "erros contratos imobiliários, contrato de compra e venda, due diligence, advogado imobiliário, segurança jurídica",
  openGraph: {
    title: "5 Erros Fatais em Contratos Imobiliários que Podem Custar seu Patrimônio - Nicholas Advocacia",
    description:
      "Evite prejuízos financeiros e dores de cabeça conhecendo os erros mais comuns em contratos de compra e venda de imóveis.",
    url: "https://www.nicholasadvocacia.com.br/blog/erros-fatais-contratos-imobiliarios",
    images: ["/blog-erros-contratos-imoveis.png"],
  },
}

export default function BlogPostPage() {
  const post = {
    title: "5 Erros Fatais em Contratos Imobiliários que Podem Custar seu Patrimônio",
    author: "Nicholas Nascimento",
    publishedAt: "2023-03-22T10:00:00Z",
    featuredImage: "/blog-erros-contratos-imoveis.png",
    content: `
      <h2>Introdução</h2>
      <p>A compra ou venda de um imóvel é uma das transações mais importantes na vida de uma pessoa. No entanto, a complexidade dos contratos imobiliários pode levar a erros graves, que resultam em prejuízos financeiros e dores de cabeça. Conhecer os riscos é o primeiro passo para se proteger.</p>

      <h2>1. Não Realizar a Due Diligence Completa</h2>
      <p>A due diligence é a investigação minuciosa da situação jurídica do imóvel e das partes envolvidas. Muitos compradores e vendedores pulam essa etapa crucial, confiando apenas na boa-fé. Sem uma due diligence, você pode descobrir tarde demais que o imóvel possui dívidas, penhoras, ou que o vendedor não é o verdadeiro proprietário.</p>
      <p><strong>Como evitar:</strong> Contrate um advogado especialista para realizar uma due diligence completa, que inclui a análise de certidões do imóvel, dos vendedores e compradores, e de processos judiciais.</p>

      <h2>2. Contrato de Gaveta ou Verbal</h2>
      <p>Contratos informais, como os "de gaveta" (sem registro em cartório) ou acordos verbais, são extremamente perigosos. Eles não oferecem segurança jurídica e podem ser facilmente contestados. Em caso de litígio, provar os termos acordados se torna um desafio imenso.</p>
      <p><strong>Como evitar:</strong> Sempre formalize a transação por meio de um contrato escrito, com cláusulas claras e específicas, e, se possível, registre-o em cartório.</p>

      <h2>3. Cláusulas Ambíguas ou Incompletas</h2>
      <p>Um contrato imobiliário deve ser claro e detalhado, abordando todos os aspectos da negociação: preço, forma de pagamento, prazos, condições de entrega, responsabilidades por impostos e taxas, multas por descumprimento, etc. Cláusulas ambíguas ou a falta de informações essenciais abrem brechas para interpretações diversas e futuros conflitos.</p>
      <p><strong>Como evitar:</strong> Tenha um advogado para elaborar ou revisar o contrato, garantindo que todas as cláusulas sejam precisas e que nada importante seja omitido.</p>

      <h2>4. Não Prever Multas e Penalidades</h2>
      <p>A ausência de cláusulas que estabeleçam multas e penalidades em caso de descumprimento do contrato por uma das partes é um erro comum. Sem essas previsões, a parte lesada terá mais dificuldade em ser ressarcida por perdas e danos, ou em compelir a outra parte a cumprir sua obrigação.</p>
      <p><strong>Como evitar:</strong> Inclua cláusulas de multa por atraso na entrega, desistência, ou qualquer outra violação contratual, de forma proporcional e justa.</p>

      <h2>5. Não Registrar o Contrato ou a Escritura</h2>
      <p>No Brasil, "quem não registra não é dono". A simples assinatura de um contrato de compra e venda ou até mesmo de uma escritura pública não garante a propriedade do imóvel. A transferência da propriedade só ocorre com o registro do título (geralmente a escritura pública) na matrícula do imóvel no Cartório de Registro de Imóveis.</p>
      <p><strong>Como evitar:</strong> Após a assinatura da escritura, providencie imediatamente o seu registro no Cartório de Registro de Imóveis competente. Isso garante a publicidade da transação e a segurança jurídica da sua propriedade.</p>

      <h2>Conclusão</h2>
      <p>A prevenção é sempre o melhor caminho no mercado imobiliário. Contar com a assessoria de um advogado especialista em Direito Imobiliário desde o início da negociação é um investimento que protege seu patrimônio e evita problemas futuros. Não arrisque seu maior bem por economia ou desconhecimento.</p>
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
              { label: "Erros Fatais em Contratos Imobiliários", href: "/blog/erros-fatais-contratos-imobiliarios" },
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
