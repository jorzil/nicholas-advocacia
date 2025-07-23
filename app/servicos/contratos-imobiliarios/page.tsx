import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form" // Reusing general contact form
import { FadeIn } from "@/components/fade-in"
import { ServiceSidebar } from "@/components/service-sidebar"

export const metadata = {
  title: "Contratos Imobiliários - Nicholas Advocacia",
  description: "Assessoria jurídica completa para elaboração e revisão de contratos imobiliários e due diligence.",
  keywords:
    "contratos imobiliários, due diligence, compra e venda de imóveis, aluguel, locação, advogado imobiliário, revisão de contrato",
  openGraph: {
    title: "Contratos Imobiliários - Nicholas Advocacia",
    description: "Assessoria jurídica completa para elaboração e revisão de contratos imobiliários e due diligence.",
    url: "https://www.nicholasadvocacia.com.br/servicos/contratos-imobiliarios",
  },
}

export default function ContratosImobiliariosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Contratos Imobiliários e Due Diligence
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Garanta transações seguras com contratos bem elaborados e análise de riscos.
                </p>
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20contratos%20imobiliários!"
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
            src="/real-estate-contract-signing.png" // Placeholder image
            alt="Fundo de contratos imobiliários"
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
                <h2>A Importância de Contratos Imobiliários Seguros</h2>
                <p>
                  Contratos imobiliários são a base de qualquer transação envolvendo bens imóveis. Um contrato bem
                  elaborado e revisado por um especialista é essencial para prevenir litígios, garantir o cumprimento
                  das obrigações e proteger os interesses de todas as partes envolvidas. Erros ou omissões podem gerar
                  grandes prejuízos e dores de cabeça.
                </p>

                <h2>Nossos Serviços em Contratos Imobiliários</h2>
                <p>Oferecemos assessoria completa para:</p>
                <ul>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Elaboração de Contratos:</strong> Criação de contratos de compra e venda, locação (aluguel),
                    permuta, doação, comodato, entre outros, personalizados para sua necessidade e com todas as
                    cláusulas de segurança.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Revisão de Contratos:</strong> Análise minuciosa de contratos propostos por terceiros,
                    identificando riscos, cláusulas abusivas ou desfavoráveis, e sugerindo alterações para proteger seus
                    direitos.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Due Diligence Imobiliária:</strong> Investigação completa da situação jurídica do imóvel e
                    das partes envolvidas na transação, incluindo certidões, histórico de propriedade, débitos e
                    pendências, para garantir uma compra ou venda segura.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Negociação de Cláusulas:</strong> Apoio na negociação de termos e condições contratuais,
                    buscando o melhor acordo para você.
                  </li>
                </ul>

                <h2>Por que Escolher a Nicholas Advocacia?</h2>
                <p>
                  Com nossa expertise em Direito Imobiliário, garantimos que seus contratos serão elaborados ou
                  revisados com a máxima segurança jurídica, protegendo seu patrimônio e evitando futuros problemas.
                </p>

                <div className="mt-8 text-center">
                  <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                    <Link
                      href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20contratos%20imobiliários!"
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
                  Solicite uma Análise de Contrato ou Due Diligence
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
