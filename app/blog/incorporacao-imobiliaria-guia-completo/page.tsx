import Image from "next/image"
import { Calendar, User, Clock } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { CtaButton } from "@/components/cta-button"
import { BlogSidebar } from "@/components/blog-sidebar"
import { calculateReadTime, formatDate } from "@/lib/utils"

export const metadata = {
  title: "Incorporação Imobiliária: Guia Completo para Construtoras e Investidores - Nicholas Advocacia",
  description:
    "Um guia completo sobre incorporação imobiliária, suas etapas e como garantir a segurança e o sucesso do seu projeto.",
  keywords:
    "incorporação imobiliária, construtora, investidor imobiliário, direito imobiliário, registro de incorporação, guia completo",
  openGraph: {
    title: "Incorporação Imobiliária: Guia Completo para Construtoras e Investidores - Nicholas Advocacia",
    description:
      "Um guia completo sobre incorporação imobiliária, suas etapas e como garantir a segurança e o sucesso do seu projeto.",
    url: "https://www.nicholasadvocacia.com.br/blog/incorporacao-imobiliaria-guia-completo",
    images: ["/blog-incorporacao-imobiliaria.png"],
  },
}

export default function BlogPostPage() {
  const post = {
    title: "Incorporação Imobiliária: Guia Completo para Construtoras e Investidores",
    author: "Nicholas Nascimento",
    publishedAt: "2023-01-20T10:00:00Z",
    featuredImage: "/blog-incorporacao-imobiliaria.png",
    content: `
      <h2>Introdução</h2>
      <p>A incorporação imobiliária é um dos pilares do mercado de construção civil, permitindo a construção e comercialização de empreendimentos como edifícios de apartamentos, condomínios de casas e loteamentos. É um processo complexo, que exige profundo conhecimento jurídico e técnico para garantir a segurança e o sucesso do projeto. Este guia completo aborda os aspectos essenciais para construtoras e investidores.</p>
      <h2>O que é Incorporação Imobiliária?</h2>
      <p>A incorporação imobiliária é a atividade que visa a construção de edificações ou conjunto de edificações, compostas de unidades autônomas, para alienação total ou parcial. Em termos práticos, é o processo de transformar um terreno em um empreendimento imobiliário, com a venda das unidades antes, durante ou após a construção.</p>
      <h2>Etapas Essenciais da Incorporação</h2>
      <ol>
        <li><strong>Aquisição do Terreno:</strong> A primeira etapa é a compra do terreno, que deve ser feita com uma análise jurídica prévia (due diligence) para verificar a regularidade da propriedade e a inexistência de ônus.</li>
        <li><strong>Estudo de Viabilidade:</strong> Análise técnica, econômica e jurídica para determinar a viabilidade do empreendimento, considerando zoneamento, licenças, custos e potencial de vendas.</li>
        <li><strong>Projeto e Aprovações:</strong> Elaboração do projeto arquitetônico e de engenharia, e obtenção das aprovações necessárias junto à prefeitura e outros órgãos.</li>
        <li><strong>Registro da Incorporação:</strong> Etapa crucial onde todos os documentos do empreendimento (projeto, memorial descritivo, convenção de condomínio, etc.) são registrados no Cartório de Registro de Imóveis. Este registro é indispensável para a venda das unidades na planta.</li>
        <li><strong>Comercialização:</strong> Venda das unidades, geralmente por meio de contratos de promessa de compra e venda.</li>
        <li><strong>Construção:</strong> Execução da obra conforme o projeto aprovado.</li>
        <li><strong>Habite-se e Individualização das Matrículas:</strong> Após a conclusão da obra, é obtido o "habite-se" (autorização para ocupação) e as matrículas das unidades autônomas são individualizadas no cartório.</li>
        <li><strong>Entrega das Chaves:</strong> Entrega das unidades aos compradores.</li>
      </ol>
      <h2>Riscos e Como Mitigá-los</h2>
      <p>A incorporação imobiliária envolve diversos riscos, como atrasos na obra, problemas com licenças, desistência de compradores, e litígios. A mitigação desses riscos passa por:</p>
      <ul>
        <li><strong>Assessoria Jurídica Especializada:</strong> Contar com advogados experientes em todas as etapas, desde a due diligence do terreno até a entrega das chaves.</li>
        <li><strong>Contratos Bem Elaborados:</strong> Utilizar contratos claros, completos e que prevejam todas as situações possíveis.</li>
        <li><strong>Planejamento Financeiro Sólido:</strong> Garantir que o fluxo de caixa do projeto seja suficiente para cobrir todas as despesas.</li>
        <li><strong>Gestão de Riscos:</strong> Identificar e monitorar proativamente os riscos do projeto.</li>
      </ul>
      <h2>Conclusão</h2>
      <p>A incorporação imobiliária é uma atividade de grande potencial, mas que exige rigor e profissionalismo. Construtoras e investidores que buscam segurança e sucesso em seus empreendimentos devem investir em uma assessoria jurídica completa e especializada, garantindo que todas as etapas sejam cumpridas com a máxima conformidade legal e minimizando os riscos.</p>
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
              { label: "Incorporação Imobiliária", href: "/blog/incorporacao-imobiliaria-guia-completo" },
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
