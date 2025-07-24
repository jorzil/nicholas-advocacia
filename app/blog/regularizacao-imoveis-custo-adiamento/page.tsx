import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { BlogSidebar } from "@/components/blog-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function RegularizacaoImoveisCustoAdiamentoPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Custo do Adiamento da Regularização de Imóveis", href: "/blog/regularizacao-imoveis-custo-adiamento" },
  ]

  const articleTitle = "O Custo do Adiamento: Por Que Regularizar Seu Imóvel Não Pode Esperar"
  const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/regularizacao-imoveis-custo-adiamento`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/blog-regularizacao-imoveis.png')" }}
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
                      Muitos proprietários adiam a regularização de seus imóveis por considerarem o processo burocrático
                      ou caro. No entanto, a verdade é que a irregularidade de um bem pode gerar custos muito maiores e
                      problemas complexos no futuro. Entender os riscos e as vantagens da regularização é o primeiro
                      passo para proteger seu patrimônio.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Os Riscos de um Imóvel Irregular</h2>
                    <p>
                      Um imóvel sem a devida regularização no Cartório de Registro de Imóveis ou na prefeitura pode
                      trazer uma série de dores de cabeça:
                    </p>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Dificuldade na Venda:</strong> Imóveis irregulares são de difícil comercialização, pois
                        bancos não aprovam financiamentos e compradores se sentem inseguros. Isso pode desvalorizar o
                        bem em até 30%.
                      </li>
                      <li>
                        <strong>Impossibilidade de Financiamento:</strong> Sem a documentação em dia, você não consegue
                        usar o imóvel como garantia para empréstimos ou financiamentos.
                      </li>
                      <li>
                        <strong>Multas e Fiscalizações:</strong> Construções não averbadas ou alterações sem licença
                        podem gerar multas pesadas por parte da prefeitura.
                      </li>
                      <li>
                        <strong>Perda da Propriedade:</strong> Em casos extremos, a falta de regularização pode levar à
                        perda do imóvel, especialmente em situações de usucapião por terceiros.
                      </li>
                      <li>
                        <strong>Problemas na Herança:</strong> A transmissão de um imóvel irregular para herdeiros é
                        mais complexa e cara, podendo gerar disputas familiares.
                      </li>
                      <li>
                        <strong>Valorização Limitada:</strong> Um imóvel regularizado tende a se valorizar mais no
                        mercado, pois oferece segurança e liquidez.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Benefícios da Regularização</h2>
                    <p>Regularizar seu imóvel é um investimento que traz inúmeros benefícios:</p>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Segurança Jurídica:</strong> Você se torna o legítimo proprietário, com todos os
                        direitos garantidos por lei.
                      </li>
                      <li>
                        <strong>Valorização do Patrimônio:</strong> Imóveis regularizados são mais valorizados e atraem
                        mais compradores.
                      </li>
                      <li>
                        <strong>Acesso a Crédito:</strong> Possibilidade de usar o imóvel como garantia em operações
                        financeiras.
                      </li>
                      <li>
                        <strong>Tranquilidade na Transmissão:</strong> Facilidade na venda, doação ou herança do bem.
                      </li>
                      <li>
                        <strong>Evita Problemas Futuros:</strong> Previne multas, fiscalizações e litígios.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Como Iniciar a Regularização?</h2>
                    <p>
                      O processo de regularização pode variar dependendo da situação do imóvel (falta de escritura,
                      construção não averbada, etc.). Geralmente, envolve:
                    </p>
                    <ol className="list-decimal list-inside">
                      <li>Levantamento e análise da documentação existente.</li>
                      <li>Identificação das pendências (cartorárias, fiscais, urbanísticas).</li>
                      <li>Elaboração de projetos e laudos técnicos (se necessário).</li>
                      <li>Pagamento de taxas e impostos.</li>
                      <li>Registro e averbação nos órgãos competentes.</li>
                    </ol>
                    <p>
                      A assessoria de um advogado especialista em direito imobiliário é fundamental para conduzir o
                      processo de forma eficiente e segura, evitando erros e agilizando a regularização.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Conclusão</h2>
                    <p>
                      Adiar a regularização do seu imóvel é, na verdade, acumular problemas e custos futuros. Proteger
                      seu patrimônio significa garantir que ele esteja em conformidade com a lei. Não espere que a
                      irregularidade se torne um obstáculo intransponível. Invista na segurança jurídica do seu bem hoje
                      mesmo.
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
