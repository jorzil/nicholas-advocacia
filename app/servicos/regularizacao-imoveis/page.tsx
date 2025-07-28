import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form" // Reusing general contact form
import { FadeIn } from "@/components/fade-in"
import { ServiceSidebar } from "@/components/service-sidebar"
import { ChevronRight } from "lucide-react" // Declaring the variable before using it

export const metadata = {
  title: "Regularização de Imóveis - Nicholas Advocacia",
  description: "Serviços de regularização de imóveis para garantir a legalidade e valorização do seu patrimônio.",
  keywords:
    "regularização de imóveis, imóvel irregular, escritura, registro de imóveis, direito imobiliário, advogado imobiliário",
  openGraph: {
    title: "Regularização de Imóveis - Nicholas Advocacia",
    description: "Serviços de regularização de imóveis para garantir a legalidade e valorização do seu patrimônio.",
    url: "https://www.nicholasadvocacia.com.br/servicos/regularizacao-imoveis",
  },
}

export default function RegularizacaoImoveisPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Regularização de Imóveis
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Transforme seu imóvel irregular em um bem legalizado e valorizado.
                </p>
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20regularização%20de%20imóveis!"
                    className="flex items-center gap-2"
                  >
                    Falar com Especialista
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/property-document-checkmark.png" // Placeholder image
            alt="Fundo de regularização de imóveis"
            fill
            className="object-cover"
            priority
          />
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
                <h2>Por que Regularizar seu Imóvel?</h2>
                <p>
                  A regularização de um imóvel é fundamental para garantir a segurança jurídica do seu patrimônio. Um
                  imóvel irregular pode trazer diversos problemas, como dificuldade para vender, alugar, obter
                  financiamentos, e até mesmo multas e desapropriações. A regularização valoriza o bem e permite que
                  você exerça plenamente seus direitos de propriedade.
                </p>

                <h2>Principais Situações de Irregularidade</h2>
                <p>As irregularidades mais comuns incluem:</p>
                <ul>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Imóveis sem escritura ou registro.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Construções ou reformas sem alvará ou habite-se.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Diferenças entre a área construída real e a registrada.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Imóveis com dívidas de IPTU ou outras taxas.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Heranças não formalizadas (inventário).
                  </li>
                </ul>

                <h2>Como a Nicholas Advocacia Pode Ajudar?</h2>
                <p>
                  Nosso escritório oferece assessoria completa para a regularização de imóveis, atuando em todas as
                  etapas do processo:
                </p>
                <ul>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Análise da situação jurídica do imóvel e identificação das irregularidades.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Levantamento e organização da documentação necessária.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Representação junto a cartórios, prefeituras e demais órgãos.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Acompanhamento de processos de usucapião, inventário, retificação de área, etc.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    Obtenção de certidões e alvarás.
                  </li>
                </ul>

                <p>
                  Com nossa expertise, você terá a tranquilidade de saber que seu imóvel estará totalmente legalizado,
                  livre de problemas e com seu valor de mercado garantido.
                </p>

                <div className="mt-8 text-center">
                  <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                    <Link
                      href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20regularização%20de%20imóveis!"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Falar com Especialista
                    </Link>
                  </Button>
                </div>
              </article>

              {/* Contact Form Section */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center">
                  Solicite um Orçamento para Regularização do seu Imóvel
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
