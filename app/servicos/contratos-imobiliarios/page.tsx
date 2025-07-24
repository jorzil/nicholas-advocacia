import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServiceSidebar } from "@/components/service-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { SchedulingForm } from "@/components/scheduling-form"
import { FadeIn } from "@/components/fade-in"

export default function ContratosImobiliariosPage() {
  const breadcrumbItems = [
    { label: "Serviços", href: "/servicos" },
    { label: "Contratos Imobiliários", href: "/servicos/contratos-imobiliarios" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/real-estate-contract-signing.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <FadeIn>
              <h1 className="text-5xl font-bold text-white text-center">Contratos Imobiliários</h1>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex flex-col lg:flex-row gap-12 mt-8">
              <div className="lg:w-2/3 space-y-8">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-[#1e2c49]">A Importância de Contratos Seguros</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Contratos imobiliários são a base de qualquer transação envolvendo bens imóveis. A elaboração e
                    análise cuidadosa desses documentos são cruciais para prevenir litígios, garantir a segurança
                    jurídica das partes e assegurar que todos os termos e condições sejam claros e justos. Nosso
                    escritório oferece assessoria completa para todos os tipos de contratos imobiliários.
                  </p>
                  <Image
                    src="/real-estate-contract-signing.png"
                    alt="Assinatura de contrato imobiliário"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-md mt-6"
                  />
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Nossos Serviços em Contratos</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Oferecemos expertise na elaboração, revisão e negociação de diversos contratos imobiliários:
                  </p>
                  <Accordion type="single" collapsible className="w-full mt-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Contratos de Compra e Venda
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Elaboração e análise de contratos para aquisição ou alienação de imóveis, garantindo a segurança
                        da transação.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Contratos de Locação
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Assessoria na criação de contratos de aluguel residenciais e comerciais, protegendo locadores e
                        locatários.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Contratos de Permuta
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Elaboração de contratos para troca de imóveis, com ou sem torna.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Contratos de Doação
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Assessoria na doação de bens imóveis, com ou sem cláusulas restritivas.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Contratos de Construção e Empreitada
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Elaboração de contratos para obras e reformas, definindo responsabilidades e prazos.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Pactuação de Garantias
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Assessoria na inclusão de garantias em contratos, como fiança, hipoteca e alienação fiduciária.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Por que nos escolher?</h2>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                    <li>Experiência comprovada em direito imobiliário.</li>
                    <li>Análise minuciosa para identificar riscos e oportunidades.</li>
                    <li>Elaboração de contratos claros, completos e juridicamente sólidos.</li>
                    <li>Negociação de termos e condições para proteger seus interesses.</li>
                    <li>Atendimento personalizado e focado nas suas necessidades.</li>
                  </ul>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1e2c49] mb-6 text-center">Fale Conosco</h2>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                      Garanta a segurança de suas transações imobiliárias. Entre em contato para uma consulta.
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
