import Image from "next/image"
import { Calendar, User, Clock } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { CtaButton } from "@/components/cta-button"
import { BlogSidebar } from "@/components/blog-sidebar"
import { calculateReadTime, formatDate } from "@/lib/utils"

export const metadata = {
  title: "Regularização de Imóveis: O Custo de Adiar - Nicholas Advocacia",
  description:
    "Descubra os riscos e custos de manter um imóvel irregular e por que a regularização é um investimento essencial.",
  keywords: "regularização de imóveis, imóvel irregular, custos, riscos, advogado imobiliário, valorização do imóvel",
  openGraph: {
    title: "Regularização de Imóveis: O Custo de Adiar - Nicholas Advocacia",
    description:
      "Descubra os riscos e custos de manter um imóvel irregular e por que a regularização é um investimento essencial.",
    url: "https://www.nicholasadvocacia.com.br/blog/regularizacao-imoveis-custo-adiamento",
    images: ["/blog-regularizacao-imoveis.png"],
  },
}

export default function BlogPostPage() {
  const post = {
    title: "Regularização de Imóveis: O Custo de Adiar",
    author: "Nicholas Nascimento",
    publishedAt: "2023-03-01T10:00:00Z",
    featuredImage: "/blog-regularizacao-imoveis.png",
    content: `
      <h2>Introdução</h2>
      <p>Muitos proprietários adiam a regularização de seus imóveis por diversos motivos, seja por desconhecimento, burocracia ou custos iniciais. No entanto, manter um imóvel irregular pode gerar problemas muito maiores e mais caros no futuro. Entender o custo de adiar é crucial para tomar a decisão certa.</p>

      <h2>O que é um Imóvel Irregular?</h2>
      <p>Um imóvel é considerado irregular quando sua situação fática (o que existe na realidade) não corresponde à sua situação jurídica (o que está registrado nos órgãos competentes, como prefeitura e cartório de imóveis). Isso pode incluir construções sem alvará, reformas não averbadas, falta de escritura, ou problemas na cadeia de propriedade.</p>

      <h2>Os Riscos e Custos de Manter um Imóvel Irregular</h2>
      <h3>1. Dificuldade na Venda e Perda de Valor</h3>
      <p>Um imóvel irregular é muito mais difícil de ser vendido. Compradores que dependem de financiamento bancário não conseguirão aprovação, e mesmo compradores à vista exigirão uma grande desvalorização para assumir o risco da regularização. Você pode perder oportunidades de negócio e ter seu patrimônio desvalorizado.</p>

      <h3>2. Impossibilidade de Financiamento e Uso como Garantia</h3>
      <p>Bancos e instituições financeiras não aceitam imóveis irregulares como garantia para empréstimos ou financiamentos. Isso limita seu acesso a crédito e impede que você utilize seu patrimônio como alavanca financeira para outros investimentos ou necessidades.</p>

      <h3>3. Multas e Fiscalização</h3>
      <p>Prefeituras e outros órgãos fiscalizadores podem aplicar multas pesadas por irregularidades, como construções sem licença ou falta de habite-se. Em casos extremos, o imóvel pode ser embargado ou até mesmo demolido, gerando prejuízos incalculáveis.</p>

      <h3>4. Problemas em Inventários e Heranças</h3>
      <p>A partilha de um imóvel irregular em um inventário é um processo complicado e demorado. A falta de documentação adequada pode atrasar a conclusão do inventário e gerar custos adicionais para os herdeiros, que terão que arcar com a regularização antes de finalizar a partilha.</p>

      <h3>5. Insegurança Jurídica</h3>
      <p>Sem a documentação em dia, você não tem a plena segurança jurídica sobre sua propriedade. Isso significa que seu direito pode ser contestado por terceiros, e você terá mais dificuldade em se defender em caso de litígios.</p>

      <h2>A Regularização como Investimento</h2>
      <p>Embora a regularização envolva custos iniciais (taxas, impostos, honorários advocatícios), ela deve ser vista como um investimento. Um imóvel regularizado:</p>
      <ul>
        <li>Aumenta seu valor de mercado.</li>
        <li>Facilita a venda e o financiamento.</li>
        <li>Evita multas e problemas com a fiscalização.</li>
        <li>Garante a segurança jurídica da sua propriedade.</li>
        <li>Simplifica processos de herança e sucessão.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Adiar a regularização do seu imóvel é adiar a solução de problemas que só tendem a se agravar. Não espere que a situação se torne insustentável. Procure um advogado especialista em Direito Imobiliário para analisar seu caso e iniciar o processo de regularização o quanto antes. É um passo fundamental para proteger seu patrimônio e garantir sua tranquilidade.</p>
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
              {
                label: "Regularização de Imóveis: O Custo de Adiar",
                href: "/blog/regularizacao-imoveis-custo-adiamento",
              },
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
