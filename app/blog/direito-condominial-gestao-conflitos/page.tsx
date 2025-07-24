import { Breadcrumb } from "@/components/breadcrumb"
import { SocialShare } from "@/components/social-share"
import { BlogSidebar } from "@/components/blog-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function DireitoCondominialGestaoConflitosPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    {
      label: "Direito Condominial: Gestão de Conflitos e Regras Essenciais",
      href: "/blog/direito-condominial-gestao-conflitos",
    },
  ]

  const articleTitle = "Direito Condominial: Gestão de Conflitos e Regras Essenciais"
  const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/direito-condominial-gestao-conflitos`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/blog-direito-condominial-gestao-conflitos.png')" }}
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
                      A vida em condomínio, seja ele residencial ou comercial, é regida por um conjunto de regras e leis
                      que visam garantir a convivência harmoniosa e a boa gestão do patrimônio comum. O Direito
                      Condominial é a área jurídica que trata dessas normas, e sua compreensão é fundamental para
                      síndicos, administradoras e moradores.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">As Regras Essenciais do Condomínio</h2>
                    <p>
                      Os principais documentos que regem um condomínio são a Convenção de Condomínio e o Regimento
                      Interno.
                    </p>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Convenção de Condomínio:</strong> É a lei máxima do condomínio, estabelecendo direitos e
                        deveres dos condôminos, a forma de administração, as despesas, as sanções, e a destinação das
                        áreas comuns. Sua alteração exige quórum qualificado.
                      </li>
                      <li>
                        <strong>Regimento Interno:</strong> Detalha as regras de convivência, uso das áreas comuns,
                        horários, normas para animais de estimação, multas por infrações, etc. É mais flexível para
                        alterações.
                      </li>
                    </ul>
                    <p>
                      Além desses, o Código Civil Brasileiro (Lei nº 10.406/2002) e leis específicas (como a Lei do
                      Inquilinato) também aplicam-se à vida condominial.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Gestão de Conflitos no Condomínio</h2>
                    <p>Conflitos são inevitáveis em ambientes de convivência coletiva. Os mais comuns incluem:</p>
                    <ul className="list-disc list-inside">
                      <li>Barulho excessivo.</li>
                      <li>Uso indevido de áreas comuns.</li>
                      <li>Inadimplência de taxas condominiais.</li>
                      <li>Vagas de garagem.</li>
                      <li>Animais de estimação.</li>
                      <li>Obras e reformas.</li>
                    </ul>
                    <p>
                      A melhor forma de gerenciar esses conflitos é através da comunicação clara, mediação e, quando
                      necessário, a aplicação das sanções previstas na Convenção e no Regimento Interno.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">
                      O Papel do Síndico e da Assessoria Jurídica
                    </h2>
                    <p>
                      O síndico é o principal responsável pela gestão do condomínio e pela aplicação das regras. No
                      entanto, a complexidade das questões jurídicas e administrativas exige, muitas vezes, o suporte de
                      uma assessoria jurídica especializada em Direito Condominial.
                    </p>
                    <p>Um advogado pode auxiliar o síndico em:</p>
                    <ul className="list-disc list-inside">
                      <li>Cobrança de inadimplentes.</li>
                      <li>Elaboração e revisão de documentos (Convenção, Regimento).</li>
                      <li>Assessoria em assembleias.</li>
                      <li>Resolução de conflitos entre condôminos.</li>
                      <li>Questões trabalhistas dos funcionários do condomínio.</li>
                      <li>Defesa do condomínio em ações judiciais.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#1e2c49] mt-8 mb-4">Conclusão</h2>
                    <p>
                      O Direito Condominial é uma área vital para a saúde e a harmonia de qualquer condomínio.
                      Compreender suas regras e contar com o apoio jurídico adequado são passos essenciais para uma
                      gestão eficiente, a prevenção de litígios e a garantia de um ambiente de convivência tranquilo
                      para todos.
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
