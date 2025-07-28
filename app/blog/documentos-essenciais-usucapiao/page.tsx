import Image from "next/image"
import { Calendar, User, Clock } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { CtaButton } from "@/components/cta-button"
import { BlogSidebar } from "@/components/blog-sidebar"
import { calculateReadTime, formatDate } from "@/lib/utils"

export const metadata = {
  title: "Os 7 Documentos Essenciais para Garantir o Sucesso do seu Processo de Usucapião - Nicholas Advocacia",
  description:
    "Conheça os documentos indispensáveis que podem fazer toda a diferença no resultado do seu processo de usucapião.",
  keywords: "documentos usucapião, usucapião, advogado usucapião, processo de usucapião, regularização de imóveis",
  openGraph: {
    title: "Os 7 Documentos Essenciais para Garantir o Sucesso do seu Processo de Usucapião - Nicholas Advocacia",
    description:
      "Conheça os documentos indispensáveis que podem fazer toda a diferença no resultado do seu processo de usucapião.",
    url: "https://www.nicholasadvocacia.com.br/blog/documentos-essenciais-usucapiao",
    images: ["/blog-documentos-usucapiao.png"],
  },
}

export default function BlogPostPage() {
  const post = {
    title: "Os 7 Documentos Essenciais para Garantir o Sucesso do seu Processo de Usucapião",
    author: "Nicholas Nascimento",
    publishedAt: "2023-04-15T10:00:00Z",
    featuredImage: "/blog-documentos-usucapiao.png",
    content: `
      <h2>Introdução</h2>
      <p>O processo de usucapião, seja ele judicial ou extrajudicial, exige uma série de documentos que comprovem a posse e o cumprimento dos requisitos legais. A falta ou a incorreção de qualquer um deles pode atrasar ou até mesmo inviabilizar o reconhecimento da propriedade. Conheça os 7 documentos essenciais para garantir o sucesso do seu processo.</p>

      <h2>1. Documentos Pessoais do Possuidor</h2>
      <p>RG, CPF, comprovante de residência, certidão de casamento (se for o caso) ou união estável. Se houver mais de um possuidor (por exemplo, um casal), os documentos de todos devem ser apresentados.</p>

      <h2>2. Comprovantes da Posse</h2>
      <p>São documentos que demonstram o tempo e a natureza da posse, como contas de água, luz, telefone, IPTU, comprovantes de pagamento de taxas condominiais, declarações de imposto de renda, contratos de locação antigos (se você era inquilino e passou a possuir), recibos de benfeitorias realizadas no imóvel, e testemunhas.</p>

      <h2>3. Planta e Memorial Descritivo do Imóvel</h2>
      <p>Esses documentos técnicos são elaborados por um profissional habilitado (engenheiro ou arquiteto) e detalham as medidas, confrontações e características do imóvel. São cruciais para identificar o bem de forma precisa e evitar conflitos de área.</p>

      <h2>4. Certidão de Matrícula do Imóvel (ou de Inexistência)</h2>
      <p>É a certidão atualizada do Cartório de Registro de Imóveis onde o bem está localizado. Ela informará se o imóvel possui registro anterior, quem é o proprietário atual (se houver), e se existem ônus ou gravames (hipotecas, penhoras). Se o imóvel nunca foi registrado, será emitida uma certidão negativa.</p>

      <h2>5. Certidões Negativas de Débitos</h2>
      <p>Certidões negativas de débitos fiscais (IPTU, ITR) e de outras taxas relacionadas ao imóvel. Elas comprovam que o possuidor tem agido como dono, arcando com as obrigações do bem.</p>

      <h2>6. Justo Título e Boa-Fé (para Usucapião Ordinária)</h2>
      <p>Se o seu caso for de Usucapião Ordinária, você precisará de um "justo título", que é um documento que, em tese, seria capaz de transferir a propriedade, mas que por algum motivo não o fez (ex: contrato de compra e venda sem registro, promessa de compra e venda). A boa-fé é a crença de que você é o legítimo proprietário, mesmo com o vício no título.</p>

      <h2>7. Declaração de Não Propriedade de Outros Imóveis (para Usucapião Especial)</h2>
      <p>Para os tipos de Usucapião Especial (Urbana e Rural), é necessário comprovar que o possuidor não é proprietário de outro imóvel urbano ou rural. Isso é feito por meio de certidões negativas de propriedade dos cartórios de registro de imóveis da sua cidade e de outras onde possa ter bens.</p>

      <h2>Conclusão</h2>
      <p>A organização e a apresentação correta desses documentos são fundamentais para o sucesso do seu processo de usucapião. Contar com a assessoria de um advogado especialista desde o início fará toda a diferença, garantindo que você reúna a documentação necessária e evite atrasos e problemas burocráticos.</p>
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
              { label: "Documentos Essenciais para Usucapião", href: "/blog/documentos-essenciais-usucapiao" },
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
