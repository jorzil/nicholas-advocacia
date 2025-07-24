import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServiceSidebar } from "@/components/service-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { SchedulingForm } from "@/components/scheduling-form"
import { FadeIn } from "@/components/fade-in"

export default function LitigiosImobiliariosPage() {
  const breadcrumbItems = [
    { label: "Serviços", href: "/servicos" },
    { label: "Litígios Imobiliários", href: "/servicos/litigios-imobiliarios" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/lady-justice-gold-blue.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <FadeIn>
              <h1 className="text-5xl font-bold text-white text-center">Litígios Imobiliários</h1>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex flex-col lg:flex-row gap-12 mt-8">
              <div className="lg:w-2/3 space-y-8">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-[#1e2c49]">Resolução de Conflitos Imobiliários</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Conflitos envolvendo imóveis podem ser complexos e desgastantes. Nosso escritório é especializado em
                    litígios imobiliários, oferecendo representação jurídica estratégica e eficaz para proteger seus
                    direitos e buscar as melhores soluções, seja por meio de negociação, mediação ou processo judicial.
                  </p>
                  <Image
                    src="/lady-justice-gold-blue.png"
                    alt="Estátua da Justiça"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-md mt-6"
                  />
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Áreas de Atuação</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Atuamos em diversas áreas de litígios imobiliários, incluindo:
                  </p>
                  <Accordion type="single" collapsible className="w-full mt-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Ações Possessórias
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Defesa e propositura de ações de reintegração de posse, manutenção de posse e interdito
                        proibitório.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Ações de Despejo
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Representação de locadores e locatários em ações de despejo por falta de pagamento, infração
                        contratual, etc.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Rescisão Contratual
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Assessoria em casos de rescisão de contratos de compra e venda, locação e outros, com ou sem
                        devolução de valores.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Disputas Condominiais
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Resolução de conflitos entre condôminos, síndicos e administradoras, incluindo cobrança de taxas
                        e questões de uso.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Ações de Usucapião
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Condução de processos judiciais para aquisição de propriedade por usucapião.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Indenizações por Danos em Imóveis
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Ações para reparação de danos causados a imóveis, seja por vizinhos, construtoras ou terceiros.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Nossa Abordagem</h2>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                    <li>Análise aprofundada do caso e das provas.</li>
                    <li>Busca por soluções amigáveis e extrajudiciais sempre que possível.</li>
                    <li>Representação combativa e estratégica em processos judiciais.</li>
                    <li>Comunicação clara e transparente com o cliente em todas as etapas.</li>
                    <li>Foco na proteção do seu patrimônio e na resolução eficiente do conflito.</li>
                  </ul>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1e2c49] mb-6 text-center">Precisa de Ajuda?</h2>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                      Se você está enfrentando um litígio imobiliário, não hesite em nos contatar.
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
