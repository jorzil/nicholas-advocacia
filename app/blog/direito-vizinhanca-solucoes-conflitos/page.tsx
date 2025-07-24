import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { BlogSidebar } from "@/components/blog-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function DireitoVizinhancaSolucoesConflitosPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Direito de Vizinhança: Soluções para Conflitos", href: "/blog/direito-vizinhanca-solucoes-conflitos" },
  ]

  const articleTitle = "Direito de Vizinhança: Soluções para Conflitos e Manutenção da Harmonia"
  const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/direito-vizinhanca-solucoes-conflitos`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/neighbors-property-discussion.png')" }}
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
                      A convivência entre vizinhos é uma parte essencial da vida em comunidade, mas nem sempre é fácil.
                      Conflitos podem surgir por diversos motivos, desde barulho excessivo até questões de limites de
                      propriedade. O Direito de Vizinhança, previsto no Código Civil, oferece as ferramentas legais para
                      resolver essas disputas e garantir o bem-estar de todos.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Entendendo o Direito de Vizinhança</h2>
                    <p>
                      Este ramo do direito visa regular o uso da propriedade de forma a evitar que o exercício do
                      direito de um vizinho prejudique o sossego, a segurança e a saúde do outro. Ele abrange temas
                      como:
                    </p>
                    <ul className="list-disc list-inside">
                      <li>Uso anormal da propriedade (ruídos, fumaça, vibrações).</li>
                      <li>Árvores limítrofes.</li>
                      <li>Passagem forçada e servidões.</li>
                      <li>Limites entre prédios e direito de tapagem (muros, cercas).</li>
                      <li>Direito de construir (janelas, goteiras, beirais).</li>
                      <li>Direito de águas.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      Estratégias para Resolução de Conflitos
                    </h2>
                    <p>Antes de buscar a via judicial, é sempre recomendável tentar soluções amigáveis:</p>
                    <ol className="list-decimal list-inside">
                      <li>
                        <strong>Comunicação Direta e Cordial:</strong> Muitas vezes, o vizinho não tem consciência do
                        incômodo que está causando. Uma conversa educada pode resolver a maioria dos problemas.
                      </li>
                      <li>
                        <strong>Registro de Ocorrências:</strong> Documente os fatos (datas, horários, fotos, vídeos,
                        testemunhas). Isso será útil caso a situação escale.
                      </li>
                      <li>
                        <strong>Notificação Extrajudicial:</strong> Uma carta formal, preferencialmente enviada por um
                        advogado, pode demonstrar a seriedade da sua intenção de resolver o problema.
                      </li>
                      <li>
                        <strong>Mediação ou Conciliação:</strong> Buscar um terceiro imparcial (mediador) para facilitar
                        o diálogo e ajudar as partes a chegarem a um acordo. Isso pode ser feito em câmaras de mediação
                        privadas ou em centros de conciliação judiciais (CEJUSC).
                      </li>
                    </ol>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Quando Recorrer à Via Judicial</h2>
                    <p>
                      Se as tentativas amigáveis falharem, a via judicial pode ser necessária. As ações mais comuns são:
                    </p>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Ação de Dano Infecto:</strong> Para prevenir ou cessar um dano iminente ou já existente
                        causado pelo vizinho.
                      </li>
                      <li>
                        <strong>Ação de Obrigação de Fazer/Não Fazer:</strong> Para compelir o vizinho a realizar ou
                        deixar de realizar algo.
                      </li>
                      <li>
                        <strong>Ação de Indenização:</strong> Para buscar reparação por danos materiais ou morais já
                        causados.
                      </li>
                      <li>
                        <strong>Ação Demarcatória/Divisória:</strong> Para definir ou restabelecer os limites da
                        propriedade.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      A Importância do Advogado Especialista
                    </h2>
                    <p>Um advogado especializado em Direito Imobiliário e de Vizinhança é fundamental para:</p>
                    <ul className="list-disc list-inside">
                      <li>Analisar a situação e identificar a melhor estratégia legal.</li>
                      <li>Coletar e organizar as provas.</li>
                      <li>Elaborar as notificações e petições judiciais.</li>
                      <li>Representar seus interesses em negociações, mediações e no tribunal.</li>
                      <li>Garantir que seus direitos sejam protegidos e que a solução seja justa e duradoura.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Conclusão</h2>
                    <p>
                      Conflitos de vizinhança são uma realidade, mas com o conhecimento adequado e a assessoria jurídica
                      certa, é possível encontrar soluções eficazes que restabeleçam a harmonia e protejam seu direito
                      ao sossego e à propriedade. Não deixe que pequenos atritos se tornem grandes problemas.
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
