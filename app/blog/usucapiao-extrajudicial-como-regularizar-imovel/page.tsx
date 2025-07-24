import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { BlogSidebar } from "@/components/blog-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function UsucapiaoExtrajudicialPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Usucapião Extrajudicial", href: "/blog/usucapiao-extrajudicial-como-regularizar-imovel" },
  ]

  const articleTitle = "Usucapião Extrajudicial: Como Regularizar Seu Imóvel de Forma Rápida e Segura"
  const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/usucapiao-extrajudicial-como-regularizar-imovel`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/blog-usucapiao-extrajudicial.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <FadeIn>
              <h1 className="text-4xl font-bold text-white text-center px-4">{articleTitle}</h1>
            </FadeIn>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex flex-col lg:flex-row gap-12 mt-8">
              <div className="lg:w-2/3 space-y-8">
                <FadeIn>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                      A usucapião extrajudicial é uma modalidade que permite a regularização da propriedade de um imóvel
                      diretamente em cartório, sem a necessidade de um processo judicial. Instituída pelo Novo Código de
                      Processo Civil (Lei nº 13.105/2015), essa via desburocratiza e agiliza o reconhecimento da posse
                      como propriedade, desde que preenchidos os requisitos legais e haja consenso entre as partes.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      Vantagens da Usucapião Extrajudicial
                    </h2>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Rapidez:</strong> Geralmente, o processo extrajudicial é mais rápido que o judicial,
                        podendo ser concluído em meses, enquanto o judicial pode levar anos.
                      </li>
                      <li>
                        <strong>Menos Burocracia:</strong> Evita a complexidade e os ritos processuais do Poder
                        Judiciário.
                      </li>
                      <li>
                        <strong>Menos Custos:</strong> Embora haja taxas cartorárias e honorários advocatícios, os
                        custos totais podem ser menores do que os de um processo judicial prolongado.
                      </li>
                      <li>
                        <strong>Segurança Jurídica:</strong> O reconhecimento da propriedade é feito por um tabelião,
                        com a mesma validade de uma decisão judicial.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Requisitos Essenciais</h2>
                    <p>Para que a usucapião extrajudicial seja possível, alguns requisitos são indispensáveis:</p>
                    <ol className="list-decimal list-inside">
                      <li>
                        <strong>Posse Mansa e Pacífica:</strong> A posse do imóvel deve ser exercida sem oposição do
                        proprietário ou de terceiros.
                      </li>
                      <li>
                        <strong>Posse Contínua e Ininterrupta:</strong> A posse deve ser exercida pelo tempo mínimo
                        exigido por lei para a modalidade de usucapião aplicável (ex: 5, 10 ou 15 anos).
                      </li>
                      <li>
                        <strong>Animus Domini (Intenção de Dono):</strong> O possuidor deve agir como se fosse o
                        verdadeiro dono do imóvel, cuidando, pagando impostos, realizando melhorias, etc.
                      </li>
                      <li>
                        <strong>Inexistência de Litígio:</strong> Não pode haver disputa judicial sobre a posse ou
                        propriedade do imóvel.
                      </li>
                      <li>
                        <strong>Ata Notarial:</strong> Documento lavrado por tabelião que atesta o tempo de posse e a
                        inexistência de fatos que impeçam a usucapião.
                      </li>
                      <li>
                        <strong>Planta e Memorial Descritivo:</strong> Elaborados por profissional habilitado
                        (engenheiro ou arquiteto), com ART/RRT, descrevendo o imóvel e suas confrontações.
                      </li>
                      <li>
                        <strong>Concordância dos Confrontantes:</strong> Os vizinhos do imóvel devem assinar um termo de
                        anuência ou serem notificados e não apresentarem oposição.
                      </li>
                      <li>
                        <strong>Advogado:</strong> A representação por advogado é obrigatória.
                      </li>
                    </ol>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Passo a Passo Simplificado</h2>
                    <ol className="list-decimal list-inside">
                      <li>
                        <strong>Contratar um Advogado:</strong> O primeiro passo é buscar um especialista em direito
                        imobiliário para analisar a viabilidade do seu caso e a modalidade de usucapião aplicável.
                      </li>
                      <li>
                        <strong>Reunir Documentação:</strong> O advogado orientará sobre todos os documentos necessários
                        (pessoais, do imóvel, comprovantes de posse, etc.).
                      </li>
                      <li>
                        <strong>Elaboração da Ata Notarial:</strong> O tabelião do cartório de notas lavrará a ata,
                        atestando a posse.
                      </li>
                      <li>
                        <strong>Notificação dos Envolvidos:</strong> O proprietário registral (se houver), os
                        confrontantes e as Fazendas Públicas serão notificados para se manifestarem.
                      </li>
                      <li>
                        <strong>Registro no Cartório de Imóveis:</strong> Após a aprovação, o processo é encaminhado ao
                        Cartório de Registro de Imóveis para a averbação da usucapião na matrícula do imóvel.
                      </li>
                    </ol>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Conclusão</h2>
                    <p>
                      A usucapião extrajudicial é uma excelente ferramenta para regularizar seu imóvel de forma mais
                      ágil e eficiente. No entanto, a complexidade da documentação e dos requisitos legais exige a
                      atuação de um advogado especializado. Não arrisque seu patrimônio; conte com a expertise de
                      profissionais para garantir a segurança jurídica da sua propriedade.
                    </p>
                  </div>
                </FadeIn>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#1e2c49] mb-4">Compartilhe este artigo:</h3>
                  <SocialShare title={articleTitle} url={articleUrl} />
                </div>
              </div>

              <div className="lg:w-1/3">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
