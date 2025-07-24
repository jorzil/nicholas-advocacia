import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServiceSidebar } from "@/components/service-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { UsucapiaoContactForm } from "@/components/usucapiao-contact-form"
import { UsucapiaoFAQ } from "@/components/usucapiao-faq"
import { FadeIn } from "@/components/fade-in"

export default function UsucapiaoPage() {
  const breadcrumbItems = [
    { label: "Serviços", href: "/servicos" },
    { label: "Usucapião", href: "/servicos/usucapiao" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/usucapiao-hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <FadeIn>
              <h1 className="text-5xl font-bold text-white text-center">Usucapião</h1>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex flex-col lg:flex-row gap-12 mt-8">
              <div className="lg:w-2/3 space-y-8">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-[#1e2c49]">O que é Usucapião?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A usucapião é um instituto jurídico que permite a aquisição da propriedade de um bem (móvel ou
                    imóvel) pela posse prolongada e ininterrupta, desde que cumpridos os requisitos legais. É uma forma
                    de regularizar a situação de posse e transformá-la em propriedade, garantindo segurança jurídica ao
                    possuidor.
                  </p>
                  <Image
                    src="/property-legal-documents.png"
                    alt="Documentos legais de propriedade"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-md mt-6"
                  />
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Tipos de Usucapião</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Existem diversas modalidades de usucapião, cada uma com seus próprios requisitos de tempo de posse e
                    características específicas. As principais são:
                  </p>
                  <Accordion type="single" collapsible className="w-full mt-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Usucapião Extrajudicial
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Realizada diretamente em cartório, sem a necessidade de processo judicial, tornando o processo
                        mais rápido e menos burocrático. Exige consenso entre as partes e documentação completa.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Usucapião Ordinária
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Requer posse mansa e pacífica por 10 anos, justo título e boa-fé. O prazo pode ser reduzido para
                        5 anos em casos específicos, como aquisição onerosa do imóvel com registro cancelado.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Usucapião Extraordinária
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Exige posse mansa e pacífica por 15 anos, independentemente de título e boa-fé. O prazo pode ser
                        reduzido para 10 anos se o possuidor tiver estabelecido no imóvel sua moradia habitual ou
                        realizado obras de caráter produtivo.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Usucapião Especial Urbana
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Para imóveis urbanos de até 250m², com posse por 5 anos, utilizada para moradia própria ou da
                        família, sem ser proprietário de outro imóvel.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Usucapião Especial Rural
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Para imóveis rurais de até 50 hectares, com posse por 5 anos, tornando-o produtivo por seu
                        trabalho ou de sua família, e tendo nele sua moradia, sem ser proprietário de outro imóvel.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Usucapião Familiar (por Abandono de Lar)
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Permite que o cônjuge ou companheiro que permaneceu no imóvel após o abandono do lar pelo outro,
                        adquira a propriedade integral do bem em 2 anos, desde que não possua outro imóvel.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Como podemos ajudar?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nosso escritório é especializado em direito imobiliário e possui vasta experiência em processos de
                    usucapião, tanto na via judicial quanto na extrajudicial. Oferecemos:
                  </p>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                    <li>Análise detalhada da sua situação e da documentação necessária.</li>
                    <li>Orientação sobre a modalidade de usucapião mais adequada ao seu caso.</li>
                    <li>Elaboração e acompanhamento de todo o processo, seja judicial ou extrajudicial.</li>
                    <li>Representação legal para garantir seus direitos e a segurança da sua propriedade.</li>
                    <li>Assessoria completa para evitar burocracias e agilizar a regularização.</li>
                  </ul>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <UsucapiaoFAQ />
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1e2c49] mb-6 text-center">Fale Conosco</h2>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                      Preencha o formulário abaixo para agendar uma consulta e regularizar seu imóvel.
                    </p>
                    <UsucapiaoContactForm />
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
