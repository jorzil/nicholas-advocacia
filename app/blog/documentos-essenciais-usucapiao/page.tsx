import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { BlogSidebar } from "@/components/blog-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function DocumentosEssenciaisUsucapiaoPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Documentos Essenciais para Usucapião", href: "/blog/documentos-essenciais-usucapiao" },
  ]

  const articleTitle = "Documentos Essenciais para Usucapião: Guia Completo para Regularizar Seu Imóvel"
  const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/documentos-essenciais-usucapiao`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/blog-documentos-usucapiao.png')" }}
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
                      A usucapião é um caminho legal para adquirir a propriedade de um imóvel pela posse prolongada. No
                      entanto, o sucesso do processo depende, em grande parte, da correta reunião e apresentação da
                      documentação necessária. A falta de um documento ou um erro na sua apresentação pode atrasar ou
                      até inviabilizar o reconhecimento da sua propriedade.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Documentos do Imóvel</h2>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Planta e Memorial Descritivo:</strong> Elaborados por um profissional habilitado
                        (engenheiro ou arquiteto), detalham as medidas, confrontações e características do imóvel.
                        Essenciais para identificar o bem.
                      </li>
                      <li>
                        <strong>Certidão de Matrícula Atualizada:</strong> Obtida no Cartório de Registro de Imóveis,
                        mostra o histórico do imóvel e quem é o proprietário registral. Mesmo que o imóvel não esteja em
                        seu nome, essa certidão é crucial.
                      </li>
                      <li>
                        <strong>Certidão Negativa de Débitos de IPTU:</strong> Comprova que não há dívidas de imposto
                        territorial urbano.
                      </li>
                      <li>
                        <strong>Comprovantes de Pagamento de Contas de Consumo:</strong> Contas de água, luz, telefone,
                        internet em nome do possuidor, que demonstrem a posse contínua e o uso do imóvel.
                      </li>
                      <li>
                        <strong>Comprovantes de Obras e Melhorias:</strong> Notas fiscais de materiais de construção,
                        recibos de serviços, projetos de reforma, que demonstrem a intenção de dono (animus domini).
                      </li>
                      <li>
                        <strong>Declaração de Confrontantes:</strong> Documento assinado pelos vizinhos, atestando a
                        posse mansa e pacífica do requerente sobre o imóvel.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      Documentos do Possuidor (Requerente)
                    </h2>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Documentos Pessoais:</strong> RG, CPF, comprovante de residência.
                      </li>
                      <li>
                        <strong>Certidão de Casamento/Nascimento:</strong> Se for casado(a) ou união estável, é
                        fundamental apresentar a certidão para que o cônjuge também participe do processo.
                      </li>
                      <li>
                        <strong>Comprovante de Renda:</strong> Pode ser solicitado para comprovar a capacidade de arcar
                        com as despesas do processo.
                      </li>
                      <li>
                        <strong>Declaração de Não Propriedade de Outro Imóvel:</strong> Em algumas modalidades de
                        usucapião (como a especial urbana ou rural), é requisito não possuir outro imóvel.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Outros Documentos Relevantes</h2>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Contratos de Compra e Venda (ainda que informais):</strong> Se houver algum documento
                        que comprove a origem da posse, mesmo que não tenha sido registrado.
                      </li>
                      <li>
                        <strong>Recibos de Pagamento:</strong> De impostos, taxas, ou qualquer despesa relacionada ao
                        imóvel.
                      </li>
                      <li>
                        <strong>Correspondências:</strong> Cartas, boletos, extratos bancários enviados para o endereço
                        do imóvel.
                      </li>
                      <li>
                        <strong>Testemunhas:</strong> Pessoas que possam atestar a posse do imóvel pelo tempo
                        necessário.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      A Importância da Assessoria Jurídica
                    </h2>
                    <p>
                      A lista de documentos pode parecer extensa e complexa, e de fato é. A reunião e a organização
                      correta desses papéis são cruciais para o sucesso do processo de usucapião. Um advogado
                      especialista em direito imobiliário não só orientará sobre quais documentos são específicos para a
                      sua modalidade de usucapião, mas também auxiliará na obtenção deles e na elaboração de peças
                      processuais.
                    </p>
                    <p>
                      Não arrisque seu direito à propriedade. Conte com a expertise de profissionais para garantir que
                      seu processo de usucapião seja conduzido de forma segura e eficiente.
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
