import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServiceSidebar } from "@/components/service-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { SchedulingForm } from "@/components/scheduling-form"
import { FadeIn } from "@/components/fade-in"

export default function IncorporacaoImobiliariaPage() {
  const breadcrumbItems = [
    { label: "Serviços", href: "/servicos" },
    { label: "Incorporação Imobiliária", href: "/servicos/incorporacao-imobiliaria" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/building-document-icon.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <FadeIn>
              <h1 className="text-5xl font-bold text-white text-center">Incorporação Imobiliária</h1>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex flex-col lg:flex-row gap-12 mt-8">
              <div className="lg:w-2/3 space-y-8">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-[#1e2c49]">Assessoria Completa para Incorporadores</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A incorporação imobiliária é um processo complexo que envolve diversas etapas legais, desde a
                    aquisição do terreno até a entrega das unidades. Nosso escritório oferece assessoria jurídica
                    especializada para incorporadores, construtoras e investidores, garantindo a segurança e a
                    conformidade de seus projetos.
                  </p>
                  <Image
                    src="/building-document-icon.png"
                    alt="Ícone de edifício e documento"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-md mt-6"
                  />
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Nossos Serviços em Incorporação</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Atuamos em todas as fases da incorporação imobiliária:
                  </p>
                  <Accordion type="single" collapsible className="w-full mt-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Análise de Viabilidade Jurídica
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Verificação da regularidade do terreno, licenças e permissões necessárias para o empreendimento.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Elaboração de Memorial de Incorporação
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Preparação e registro do memorial de incorporação no Cartório de Registro de Imóveis.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Contratos de Construção e Venda
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Elaboração de contratos de promessa de compra e venda, contratos de construção por empreitada ou
                        administração.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Assessoria em Financiamento
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Orientação jurídica para obtenção de financiamentos bancários para o empreendimento.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Questões Tributárias
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Análise e planejamento tributário para otimizar a carga fiscal do projeto.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Regularização Pós-Obra
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Assessoria para obtenção de habite-se, averbação da construção e individualização das
                        matrículas.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Por que nos escolher?</h2>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                    <li>Experiência aprofundada em direito imobiliário e urbanístico.</li>
                    <li>Visão estratégica para mitigar riscos e otimizar resultados.</li>
                    <li>Assessoria completa em todas as etapas do projeto.</li>
                    <li>Agilidade na resolução de questões burocráticas.</li>
                    <li>Compromisso com a segurança jurídica e o sucesso do seu empreendimento.</li>
                  </ul>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1e2c49] mb-6 text-center">Fale Conosco</h2>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                      Garanta a segurança e o sucesso do seu projeto de incorporação.
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
