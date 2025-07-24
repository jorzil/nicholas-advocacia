import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { BlogSidebar } from "@/components/blog-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function DireitoVizinhancaResolverConflitosPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Direito de Vizinhança: Como Resolver Conflitos", href: "/blog/direito-vizinhanca-resolver-conflitos" },
  ]

  const articleTitle = "Direito de Vizinhança: Como Resolver Conflitos e Manter a Harmonia"
  const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/direito-vizinhanca-resolver-conflitos`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/blog-direito-vizinhanca.png')" }}
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
                      A convivência em sociedade, especialmente entre vizinhos, pode gerar atritos e conflitos. O
                      Direito de Vizinhança é o ramo do Direito Civil que estabelece as regras para o uso da
                      propriedade, buscando harmonizar os interesses dos proprietários de imóveis contíguos e prevenir
                      desavenças. Conhecer seus direitos e deveres é fundamental para uma boa convivência.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Principais Conflitos de Vizinhança</h2>
                    <p>Os problemas mais comuns entre vizinhos incluem:</p>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Uso Nocivo da Propriedade:</strong> Barulho excessivo (festas, obras, animais), fumaça,
                        odores, vibrações que perturbam o sossego e a saúde dos vizinhos.
                      </li>
                      <li>
                        <strong>Árvores e Frutos:</strong> Galhos que invadem a propriedade vizinha, raízes que
                        danificam muros ou calçadas, frutos que caem no terreno alheio.
                      </li>
                      <li>
                        <strong>Passagem Forçada e Servidão:</strong> Questões relacionadas ao acesso a imóveis
                        encravados (sem saída para via pública) ou à passagem de tubulações e fiações.
                      </li>
                      <li>
                        <strong>Limites entre Imóveis:</strong> Disputas sobre a demarcação de divisas, construção de
                        muros e cercas.
                      </li>
                      <li>
                        <strong>Direito de Construir:</strong> Respeito às regras de recuo, altura, ventilação e
                        iluminação nas construções.
                      </li>
                      <li>
                        <strong>Águas:</strong> Escoamento de águas pluviais ou servidas que causem danos ao vizinho.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Como Resolver Conflitos</h2>
                    <p>
                      A melhor abordagem para resolver conflitos de vizinhança é sempre buscar uma solução amigável
                      antes de recorrer à via judicial:
                    </p>
                    <ol className="list-decimal list-inside">
                      <li>
                        <strong>Diálogo:</strong> Tente conversar com o vizinho de forma calma e educada, expondo o
                        problema e buscando um acordo. Muitas vezes, o vizinho nem percebe que está causando incômodo.
                      </li>
                      <li>
                        <strong>Notificação Extrajudicial:</strong> Se o diálogo não funcionar, uma notificação formal
                        (por carta com aviso de recebimento ou por meio de um advogado) pode demonstrar a seriedade da
                        situação e incentivar uma solução.
                      </li>
                      <li>
                        <strong>Mediação/Conciliação:</strong> Buscar um mediador (profissional ou órgão como o Centro
                        Judiciário de Solução de Conflitos e Cidadania - CEJUSC) pode ajudar as partes a chegarem a um
                        acordo mutuamente satisfatório.
                      </li>
                      <li>
                        <strong>Ação Judicial:</strong> Como último recurso, é possível ingressar com uma ação judicial
                        (ação de dano infecto, ação de obrigação de fazer/não fazer, ação de indenização) para que o
                        Poder Judiciário determine a solução.
                      </li>
                    </ol>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      A Importância da Assessoria Jurídica
                    </h2>
                    <p>
                      Um advogado especialista em Direito Imobiliário e de Vizinhança pode ser crucial em todas as
                      etapas:
                    </p>
                    <ul className="list-disc list-inside">
                      <li>Orientar sobre seus direitos e deveres.</li>
                      <li>Analisar a situação e as provas (fotos, vídeos, testemunhas).</li>
                      <li>Elaborar notificações e acordos.</li>
                      <li>Representar você em mediações ou processos judiciais.</li>
                      <li>Buscar a solução mais rápida e eficaz para o seu problema.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Conclusão</h2>
                    <p>
                      Conflitos de vizinhança podem ser desgastantes, mas não precisam se tornar uma guerra. Com
                      conhecimento das leis e a abordagem correta, é possível resolver as desavenças e restabelecer a
                      harmonia. Não hesite em buscar ajuda profissional para proteger seu direito ao sossego e à
                      propriedade.
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
