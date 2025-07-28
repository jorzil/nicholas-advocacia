import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form" // Reusing general contact form
import { FadeIn } from "@/components/fade-in"
import { ServiceSidebar } from "@/components/service-sidebar"

const ChevronRight = ArrowRight // Declare the variable before using it

export const metadata = {
  title: "Recuperação de Conta Mercado Livre - Nicholas Advocacia",
  description: "Assessoria jurídica para vendedores com contas suspensas ou bloqueadas no Mercado Livre.",
  keywords:
    "recuperação conta mercado livre, conta bloqueada mercado livre, conta suspensa mercado livre, advogado mercado livre, direito digital, e-commerce",
  openGraph: {
    title: "Recuperação de Conta Mercado Livre - Nicholas Advocacia",
    description: "Assessoria jurídica para vendedores com contas suspensas ou bloqueadas no Mercado Livre.",
    url: "https://www.nicholasadvocacia.com.br/servicos/recuperacao-conta-mercado-livre",
  },
}

export default function RecuperacaoContaMercadoLivrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Recuperação de Conta Mercado Livre
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Assessoria jurídica para vendedores com contas suspensas ou bloqueadas.
                </p>
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20recuperação%20de%20conta%20Mercado%20Livre!"
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
            src="/marketplace-suspension-hero.png" // Placeholder image
            alt="Fundo de recuperação de conta Mercado Livre"
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
                <h2>Conta Suspensa ou Bloqueada no Mercado Livre?</h2>
                <p>
                  A suspensão ou bloqueio de contas no Mercado Livre pode causar grandes prejuízos para vendedores,
                  interrompendo suas operações e afetando sua renda. Muitas vezes, essas medidas são aplicadas de forma
                  indevida ou sem a devida justificativa.
                </p>

                <h2>Como a Nicholas Advocacia Pode Ajudar?</h2>
                <p>Oferecemos assessoria jurídica especializada para:</p>
                <ul>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Análise do Caso:</strong> Avaliação dos motivos da suspensão/bloqueio e da viabilidade de
                    reversão.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Notificações e Recursos:</strong> Elaboração de notificações extrajudiciais e recursos
                    administrativos ao Mercado Livre.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Ações Judiciais:</strong> Propositura de ações judiciais para desbloqueio da conta,
                    indenização por perdas e danos, e outras medidas cabíveis.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Defesa de Direitos:</strong> Proteção dos direitos do vendedor contra práticas abusivas da
                    plataforma.
                  </li>
                </ul>

                <h2>Por que Escolher a Nicholas Advocacia?</h2>
                <p>
                  Com nossa expertise em direito digital e e-commerce, atuamos para reverter a suspensão ou bloqueio da
                  sua conta no Mercado Livre, minimizando seus prejuízos e garantindo a continuidade das suas vendas.
                </p>

                <div className="mt-8 text-center">
                  <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                    <Link
                      href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20recuperação%20de%20conta%20Mercado%20Livre!"
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
                  Solicite Ajuda para Recuperar sua Conta
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
