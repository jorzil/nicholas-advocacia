import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServiceSidebar } from "@/components/service-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { SchedulingForm } from "@/components/scheduling-form"
import { FadeIn } from "@/components/fade-in"

export default function RegularizacaoImoveisPage() {
  const breadcrumbItems = [
    { label: "Serviços", href: "/servicos" },
    { label: "Regularização de Imóveis", href: "/servicos/regularizacao-imoveis" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/law-office-background.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <FadeIn>
              <h1 className="text-5xl font-bold text-white text-center">Regularização de Imóveis</h1>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex flex-col lg:flex-row gap-12 mt-8">
              <div className="lg:w-2/3 space-y-8">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-[#1e2c49]">Por que regularizar seu imóvel?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A regularização de imóveis é um processo fundamental para garantir a segurança jurídica da sua
                    propriedade. Um imóvel irregular pode gerar diversos problemas, como dificuldades na venda,
                    impossibilidade de financiamento, multas e até mesmo a perda da propriedade. Nosso escritório
                    oferece soluções completas para regularizar seu imóvel, seja ele residencial, comercial ou rural.
                  </p>
                  <Image
                    src="/property-document-checkmark.png"
                    alt="Documento de propriedade com checkmark"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-md mt-6"
                  />
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Nossos Serviços de Regularização</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Atuamos em diversas frentes para garantir a completa regularização do seu imóvel:
                  </p>
                  <Accordion type="single" collapsible className="w-full mt-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Análise Documental e Diagnóstico
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Realizamos um levantamento completo da situação jurídica e documental do imóvel, identificando
                        pendências e irregularidades.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Retificação de Registro Imobiliário
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Correção de erros ou omissões na matrícula do imóvel, como medidas, confrontações ou descrições.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Averbação de Construção/Demolição
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Registro de construções, reformas ou demolições realizadas no imóvel junto ao Cartório de
                        Registro de Imóveis.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Desmembramento e Remembramento
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Divisão de um terreno em lotes menores (desmembramento) ou união de lotes (remembramento).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Instituição de Condomínio
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Processo legal para transformar um edifício ou conjunto de casas em condomínio.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Obtenção de Certidões
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Auxílio na obtenção de todas as certidões necessárias para a regularização, como certidões
                        negativas de débitos, IPTU, etc.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Benefícios da Regularização</h2>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                    <li>Aumento do valor de mercado do imóvel.</li>
                    <li>Facilidade na venda e compra, com acesso a financiamentos.</li>
                    <li>Segurança jurídica para o proprietário.</li>
                    <li>Evita multas e sanções administrativas.</li>
                    <li>Possibilita a realização de reformas e ampliações de forma legal.</li>
                    <li>Garante a transmissão do imóvel para herdeiros sem complicações.</li>
                  </ul>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1e2c49] mb-6 text-center">Agende Sua Consulta</h2>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                      Não deixe seu imóvel em situação irregular. Entre em contato e garanta a segurança do seu
                      patrimônio.
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
