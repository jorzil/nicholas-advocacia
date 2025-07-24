import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { BlogSidebar } from "@/components/blog-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function ErrosFataisContratosImobiliariosPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Erros Fatais em Contratos Imobiliários", href: "/blog/erros-fatais-contratos-imobiliarios" },
  ]

  const articleTitle = "Erros Fatais em Contratos Imobiliários: Como Evitá-los e Garantir Sua Segurança"
  const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/erros-fatais-contratos-imobiliarios`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/blog-erros-contratos-imoveis.png')" }}
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
                      A compra, venda ou locação de um imóvel é um dos maiores investimentos que uma pessoa pode fazer.
                      No entanto, a complexidade dos contratos imobiliários pode levar a erros graves, que resultam em
                      prejuízos financeiros e dores de cabeça. Conhecer os erros mais comuns e como evitá-los é crucial
                      para garantir a segurança jurídica da sua transação.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      1. Falta de Análise Documental Aprofundada
                    </h2>
                    <p>
                      Um dos erros mais fatais é não verificar a documentação do imóvel e das partes envolvidas. Isso
                      inclui certidões negativas de débitos, histórico de propriedade, existência de ônus (hipotecas,
                      penhoras), e a capacidade legal dos vendedores.
                    </p>
                    <p>
                      <strong>Como evitar:</strong> Contrate um advogado especialista em direito imobiliário para
                      realizar uma due diligence completa. Ele verificará a idoneidade do imóvel e dos vendedores,
                      identificando qualquer risco antes da assinatura do contrato.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">2. Contrato Genérico ou Incompleto</h2>
                    <p>
                      Utilizar modelos de contrato encontrados na internet ou documentos incompletos é um convite a
                      problemas. Cada transação imobiliária possui particularidades que devem ser refletidas no
                      contrato.
                    </p>
                    <p>
                      <strong>Como evitar:</strong> O contrato deve ser personalizado e detalhar todos os termos: preço,
                      forma de pagamento, prazos, condições de entrega, responsabilidades por impostos e taxas, multas
                      por descumprimento, e cláusulas específicas para o seu caso. Um advogado pode redigir um contrato
                      sob medida.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">3. Não Registrar o Contrato</h2>
                    <p>
                      Muitas pessoas acreditam que a assinatura do contrato de compra e venda já garante a propriedade.
                      No entanto, no Brasil, a propriedade de um imóvel só é transferida com o registro da escritura
                      pública no Cartório de Registro de Imóveis.
                    </p>
                    <p>
                      <strong>Como evitar:</strong> Após a assinatura do contrato e o pagamento, providencie a escritura
                      pública e, imediatamente, o registro na matrícula do imóvel. Isso garante que o imóvel esteja
                      legalmente em seu nome e o protege contra terceiros.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      4. Desconhecimento das Cláusulas Contratuais
                    </h2>
                    <p>
                      Assinar um contrato sem compreender todas as suas cláusulas é um risco enorme. Cláusulas ambíguas
                      ou desfavoráveis podem gerar grandes prejuízos no futuro.
                    </p>
                    <p>
                      <strong>Como evitar:</strong> Leia o contrato com atenção e, se tiver dúvidas, peça
                      esclarecimentos ao seu advogado. Não assine nada que não compreenda totalmente.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">5. Não Prever Multas e Penalidades</h2>
                    <p>
                      Um contrato eficaz deve prever as consequências para o caso de descumprimento por qualquer das
                      partes. A ausência de multas ou penalidades pode dificultar a reparação de danos.
                    </p>
                    <p>
                      <strong>Como evitar:</strong> Inclua cláusulas claras sobre multas por atraso na entrega,
                      desistência, ou qualquer outra infração contratual. Isso serve como um incentivo ao cumprimento e
                      uma garantia em caso de falha.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Conclusão</h2>
                    <p>
                      Evitar erros em contratos imobiliários é fundamental para a segurança do seu patrimônio. A
                      assessoria de um advogado especialista é um investimento que previne problemas futuros e garante
                      que sua transação seja realizada com total tranquilidade e segurança jurídica.
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
