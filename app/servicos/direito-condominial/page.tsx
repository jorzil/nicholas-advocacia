import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServiceSidebar } from "@/components/service-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { SchedulingForm } from "@/components/scheduling-form"
import { FadeIn } from "@/components/fade-in"

export default function DireitoCondominialPage() {
  const breadcrumbItems = [
    { label: "Serviços", href: "/servicos" },
    { label: "Direito Condominial", href: "/servicos/direito-condominial" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/condominium-building.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <FadeIn>
              <h1 className="text-5xl font-bold text-white text-center">Direito Condominial</h1>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex flex-col lg:flex-row gap-12 mt-8">
              <div className="lg:w-2/3 space-y-8">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-[#1e2c49]">Assessoria Jurídica para Condomínios</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    O direito condominial abrange uma série de normas e regulamentos que regem a vida em condomínios,
                    sejam eles residenciais ou comerciais. Conflitos entre moradores, inadimplência, questões
                    trabalhistas e a necessidade de atualização de regimentos internos são desafios comuns. Nosso
                    escritório oferece assessoria jurídica completa para síndicos, administradoras e condôminos.
                  </p>
                  <Image
                    src="/condominium-building.png"
                    alt="Edifício de condomínio"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-md mt-6"
                  />
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Nossos Serviços em Direito Condominial</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Atuamos em diversas frentes para garantir a boa gestão e a harmonia no condomínio:
                  </p>
                  <Accordion type="single" collapsible className="w-full mt-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Cobrança de Inadimplentes
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Ações de cobrança de cotas condominiais em atraso, buscando a recuperação dos valores devidos de
                        forma eficiente.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Elaboração e Revisão de Convenção e Regimento Interno
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Criação ou atualização dos documentos que regem o condomínio, garantindo clareza e conformidade
                        legal.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Assessoria em Assembleias
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Orientação jurídica para a realização de assembleias, elaboração de atas e cumprimento das
                        deliberações.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Resolução de Conflitos
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Mediação e representação em disputas entre condôminos, síndicos e administradoras.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Questões Trabalhistas
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Assessoria em questões relacionadas a funcionários do condomínio, como contratação, demissão e
                        passivos trabalhistas.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Responsabilidade Civil do Condomínio e Síndico
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Orientação sobre as responsabilidades legais do condomínio e do síndico, prevenindo ações
                        judiciais.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Benefícios da Assessoria Jurídica</h2>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                    <li>Redução da inadimplência.</li>
                    <li>Prevenção de litígios e ações judiciais.</li>
                    <li>Gestão condominial mais eficiente e segura.</li>
                    <li>Harmonia entre os moradores.</li>
                    <li>Conformidade com a legislação vigente.</li>
                    <li>Proteção do patrimônio do condomínio e dos condôminos.</li>
                  </ul>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1e2c49] mb-6 text-center">Fale Conosco</h2>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                      Garanta a tranquilidade e a segurança jurídica do seu condomínio.
                    </p>
                    <SchedulingForm />
                  </div>
                </FadeIn>
              </div>

              <div className="lg:w-1/3">
                <ServiceSidebar />
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
