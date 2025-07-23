import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form" // Reusing general contact form
import { FadeIn } from "@/components/fade-in"
import { ServiceSidebar } from "@/components/service-sidebar"

export const metadata = {
  title: "Incorporação Imobiliária - Nicholas Advocacia",
  description: "Assessoria jurídica completa para incorporadoras, construtoras e investidores no mercado imobiliário.",
  keywords:
    "incorporação imobiliária, construtora, investidor imobiliário, direito imobiliário, advogado incorporação, registro de incorporação",
  openGraph: {
    title: "Incorporação Imobiliária - Nicholas Advocacia",
    description:
      "Assessoria jurídica completa para incorporadoras, construtoras e investidores no mercado imobiliário.",
    url: "https://www.nicholasadvocacia.com.br/servicos/incorporacao-imobiliaria",
  },
}

export default function IncorporacaoImobiliariaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Incorporação Imobiliária
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Assessoria jurídica especializada para seus projetos de incorporação.
                </p>
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20incorporação%20imobiliária!"
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
          <Image
            src="/building-document-icon.png" // Placeholder image
            alt="Fundo de incorporação imobiliária"
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
                <h2>O que é Incorporação Imobiliária?</h2>
                <p>
                  A incorporação imobiliária é a atividade que visa a construção de edificações ou conjunto de
                  edificações, compostas de unidades autônomas, para alienação total ou parcial. É um processo complexo
                  que envolve diversas etapas jurídicas, desde a aquisição do terreno até a entrega das chaves aos
                  compradores.
                </p>

                <h2>Nossa Assessoria em Incorporação Imobiliária</h2>
                <p>Oferecemos suporte jurídico completo para incorporadoras, construtoras e investidores, incluindo:</p>
                <ul>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Análise de Viabilidade:</strong> Estudo da viabilidade jurídica do projeto, incluindo
                    análise de riscos e licenças necessárias.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Registro da Incorporação:</strong> Elaboração e registro de todos os documentos necessários
                    no Cartório de Registro de Imóveis.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Elaboração de Contratos:</strong> Criação de contratos de promessa de compra e venda,
                    contratos de construção, contratos com fornecedores e prestadores de serviços.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Assessoria em Vendas:</strong> Suporte jurídico na fase de comercialização das unidades,
                    garantindo a segurança das transações.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Regularização Pós-Obra:</strong> Apoio na obtenção do habite-se e na individualização das
                    matrículas.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Resolução de Conflitos:</strong> Atuação em litígios que possam surgir durante o processo de
                    incorporação.
                  </li>
                </ul>

                <h2>Por que Escolher a Nicholas Advocacia?</h2>
                <p>
                  Com nossa experiência e conhecimento aprofundado do mercado imobiliário, garantimos a segurança
                  jurídica e a conformidade de seus projetos de incorporação, minimizando riscos e otimizando
                  resultados.
                </p>

                <div className="mt-8 text-center">
                  <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                    <Link
                      href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20incorporação%20imobiliária!"
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
                  Solicite Assessoria para seu Projeto de Incorporação
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
