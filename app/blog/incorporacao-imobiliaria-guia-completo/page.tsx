import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { BlogSidebar } from "@/components/blog-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function IncorporacaoImobiliariaGuiaCompletoPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Incorporação Imobiliária: Guia Completo", href: "/blog/incorporacao-imobiliaria-guia-completo" },
  ]

  const articleTitle = "Incorporação Imobiliária: Guia Completo para Construtoras e Investidores"
  const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/incorporacao-imobiliaria-guia-completo`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/blog-incorporacao-imobiliaria.png')" }}
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
                      A incorporação imobiliária é o processo pelo qual uma construtora ou incorporadora se compromete a
                      construir um edifício ou conjunto de unidades autônomas (apartamentos, casas, salas comerciais) em
                      um terreno, vendendo as frações ideais antes ou durante a construção. É um processo complexo,
                      regido pela Lei nº 4.591/64, que exige rigorosa conformidade legal para garantir a segurança de
                      todos os envolvidos.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Etapas da Incorporação Imobiliária</h2>
                    <p>O processo de incorporação envolve diversas fases cruciais:</p>
                    <ol className="list-decimal list-inside">
                      <li>
                        <strong>Aquisição do Terreno:</strong> A primeira etapa é a compra do terreno onde o
                        empreendimento será construído. É fundamental realizar uma análise jurídica completa da
                        propriedade.
                      </li>
                      <li>
                        <strong>Estudo de Viabilidade:</strong> Análise técnica, econômica e jurídica para determinar a
                        viabilidade do projeto, considerando zoneamento, licenças, custos e potencial de vendas.
                      </li>
                      <li>
                        <strong>Projeto Arquitetônico e Aprovações:</strong> Elaboração do projeto e sua aprovação junto
                        aos órgãos municipais (prefeitura) e demais entidades reguladoras.
                      </li>
                      <li>
                        <strong>Registro do Memorial de Incorporação:</strong> Este é o passo mais importante. O
                        incorporador deve registrar no Cartório de Registro de Imóveis uma série de documentos, como o
                        projeto aprovado, o quadro de áreas, a minuta da futura Convenção de Condomínio, as certidões
                        negativas, entre outros. Somente após este registro as unidades podem ser legalmente
                        comercializadas.
                      </li>
                      <li>
                        <strong>Comercialização das Unidades:</strong> Venda das frações ideais do terreno, que
                        correspondem às futuras unidades autônomas. Os contratos de promessa de compra e venda são
                        formalizados nesta fase.
                      </li>
                      <li>
                        <strong>Construção:</strong> Execução da obra conforme o projeto aprovado.
                      </li>
                      <li>
                        <strong>Obtenção do Habite-se:</strong> Após a conclusão da obra, é necessário obter o
                        "Habite-se" junto à prefeitura, que atesta que a construção está de acordo com as normas.
                      </li>
                      <li>
                        <strong>Averbação da Construção e Individualização das Matrículas:</strong> O Habite-se é
                        averbado na matrícula do terreno, e as matrículas individuais de cada unidade autônoma são
                        abertas no Cartório de Registro de Imóveis.
                      </li>
                      <li>
                        <strong>Instituição e Convenção de Condomínio:</strong> Registro da Convenção de Condomínio, que
                        passa a reger a vida dos futuros moradores.
                      </li>
                      <li>
                        <strong>Entrega das Chaves:</strong> A posse das unidades é transferida aos compradores.
                      </li>
                    </ol>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      A Importância da Assessoria Jurídica
                    </h2>
                    <p>
                      Devido à complexidade e ao alto risco envolvido, a assessoria jurídica especializada é
                      indispensável em todas as etapas da incorporação imobiliária. Um advogado pode:
                    </p>
                    <ul className="list-disc list-inside">
                      <li>Realizar a due diligence do terreno.</li>
                      <li>Auxiliar na obtenção de licenças e alvarás.</li>
                      <li>
                        Elaborar e revisar o Memorial de Incorporação e todos os contratos (compra e venda, construção,
                        financiamento).
                      </li>
                      <li>Garantir a conformidade com a Lei nº 4.591/64 e demais legislações.</li>
                      <li>Prevenir litígios e passivos futuros.</li>
                      <li>Oferecer consultoria tributária e ambiental.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Conclusão</h2>
                    <p>
                      A incorporação imobiliária é um motor fundamental da economia, mas exige um planejamento jurídico
                      impecável. Para construtoras e investidores, contar com um escritório de advocacia especializado é
                      a garantia de segurança, conformidade e sucesso em seus empreendimentos.
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
