import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UsucapiaoContactForm } from "@/components/usucapiao-contact-form"
import { UsucapiaoFaq } from "@/components/usucapiao-faq"
import { FadeIn } from "@/components/fade-in"
import { ServiceSidebar } from "@/components/service-sidebar"

export const metadata = {
  title: "Usucapião - Nicholas Advocacia",
  description: "Entenda o que é usucapião, seus tipos e como regularizar seu imóvel com a Nicholas Advocacia.",
  keywords:
    "usucapião, regularização de imóveis, direito imobiliário, advogado usucapião, tipos de usucapião, como fazer usucapião",
  openGraph: {
    title: "Usucapião - Nicholas Advocacia",
    description: "Entenda o que é usucapião, seus tipos e como regularizar seu imóvel com a Nicholas Advocacia.",
    url: "https://www.nicholasadvocacia.com.br/servicos/usucapiao",
  },
}

export default function UsucapiaoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Usucapião: Regularize seu Imóvel
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Garanta a propriedade legal do seu imóvel com segurança e agilidade.
                </p>
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20usucapião!"
                    className="flex items-center gap-2"
                  >
                    Falar com Especialista
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/usucapiao-hero-bg.png" alt="Fundo de usucapião" fill className="object-cover" priority />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ServiceSidebar />
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none text-gray-700">
                <h2>O que é Usucapião?</h2>
                <p>
                  A usucapião é um modo de aquisição da propriedade de um bem (móvel ou imóvel) pela posse prolongada,
                  contínua e ininterrupta, com a intenção de ser dono, e cumprindo os requisitos legais. É uma forma de
                  regularizar a situação de um imóvel que não possui documentação formal, transformando a posse em
                  propriedade.
                </p>

                <h2>Tipos de Usucapião de Imóveis</h2>
                <p>
                  Existem diversos tipos de usucapião, cada um com requisitos específicos de tempo de posse e outras
                  condições:
                </p>
                <ul>
                  <li>
                    <strong>Usucapião Extraordinária:</strong> Exige 15 anos de posse ininterrupta, sem oposição e sem
                    necessidade de justo título ou boa-fé. O prazo pode ser reduzido para 10 anos se o possuidor tiver
                    estabelecido no imóvel sua moradia habitual ou realizado obras ou serviços de caráter produtivo.
                  </li>
                  <li>
                    <strong>Usucapião Ordinária:</strong> Exige 10 anos de posse contínua e incontestada, com justo
                    título e boa-fé. O prazo pode ser reduzido para 5 anos se o imóvel tiver sido adquirido
                    onerosamente, com base em registro cancelado, e os possuidores nele tiverem estabelecido sua moradia
                    ou realizado investimentos de interesse social e econômico.
                  </li>
                  <li>
                    <strong>Usucapião Especial Urbana:</strong> Exige 5 anos de posse ininterrupta e sem oposição, de
                    área urbana de até 250 m², utilizada para moradia própria ou da família, desde que o possuidor não
                    seja proprietário de outro imóvel urbano ou rural.
                  </li>
                  <li>
                    <strong>Usucapião Especial Rural (Pro Labore):</strong> Exige 5 anos de posse ininterrupta e sem
                    oposição, de área rural de até 50 hectares, utilizada para moradia e tornando-a produtiva pelo
                    trabalho próprio ou da família, desde que o possuidor não seja proprietário de outro imóvel.
                  </li>
                  <li>
                    <strong>Usucapião Familiar (por Abandono de Lar):</strong> Exige 2 anos de posse ininterrupta e sem
                    oposição, de imóvel urbano de até 250 m², por ex-cônjuge ou ex-companheiro que ficou na posse do
                    imóvel após o abandono do lar pelo outro, utilizando-o para sua moradia ou de sua família, desde que
                    não seja proprietário de outro imóvel.
                  </li>
                  <li>
                    <strong>Usucapião Coletiva:</strong> Aplicável a áreas urbanas ocupadas por população de baixa renda
                    para sua moradia, por 5 anos ininterruptos e sem oposição, onde não for possível identificar os
                    terrenos ocupados por cada possuidor.
                  </li>
                </ul>

                <h2>Como a Nicholas Advocacia Pode Ajudar?</h2>
                <p>
                  Nosso escritório é especializado em Direito Imobiliário e possui vasta experiência em processos de
                  usucapião, tanto na via judicial quanto na extrajudicial. Oferecemos:
                </p>
                <ul>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Análise detalhada do seu caso para identificar o tipo de usucapião aplicável e os documentos
                    necessários.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Orientação completa sobre os requisitos legais e os passos do processo.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Elaboração e acompanhamento de toda a documentação.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Representação jurídica em todas as etapas, buscando a solução mais rápida e eficiente.
                  </li>
                </ul>

                <p>
                  Não adie a regularização do seu patrimônio. Entre em contato conosco e agende uma consulta para
                  avaliar seu caso.
                </p>

                <div className="mt-8 text-center">
                  <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                    <Link
                      href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20usucapião!"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Falar com Especialista
                    </Link>
                  </Button>
                </div>
              </article>

              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center">
                  Perguntas Frequentes sobre Usucapião
                </h2>
                <UsucapiaoFaq />
              </div>

              {/* Contact Form Section */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center">
                  Solicite uma Avaliação do seu Caso de Usucapião
                </h2>
                <UsucapiaoContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
