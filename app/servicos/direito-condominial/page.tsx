import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form" // Reusing general contact form
import { FadeIn } from "@/components/fade-in"
import { ServiceSidebar } from "@/components/service-sidebar"

export const metadata = {
  title: "Direito Condominial - Nicholas Advocacia",
  description: "Assessoria jurídica para condomínios, síndicos e condôminos em questões de direito condominial.",
  keywords:
    "direito condominial, condomínio, síndico, condômino, conflitos condominiais, cobrança de condomínio, advogado condominial",
  openGraph: {
    title: "Direito Condominial - Nicholas Advocacia",
    description: "Assessoria jurídica para condomínios, síndicos e condôminos em questões de direito condominial.",
    url: "https://www.nicholasadvocacia.com.br/servicos/direito-condominial",
  },
}

export default function DireitoCondominialPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Direito Condominial
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Soluções jurídicas para síndicos, condomínios e condôminos.
                </p>
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20direito%20condominial!"
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
            src="/condominium-building-icon-white.png" // Placeholder image
            alt="Fundo de direito condominial"
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
                <h2>Assessoria Jurídica para Condomínios e Condôminos</h2>
                <p>
                  O Direito Condominial abrange as relações jurídicas que surgem dentro de um condomínio, envolvendo
                  síndicos, administradoras e condôminos. Conflitos são comuns e exigem uma atuação jurídica
                  especializada para garantir a harmonia e o cumprimento das regras.
                </p>

                <h2>Nossa Atuação em Direito Condominial</h2>
                <p>Oferecemos suporte jurídico para:</p>
                <ul>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Síndicos e Administradoras:</strong> Assessoria na elaboração e revisão de convenções e
                    regimentos internos, cobrança de cotas condominiais, representação em assembleias, e resolução de
                    conflitos.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Condôminos:</strong> Defesa em casos de cobranças indevidas, multas, problemas com obras,
                    conflitos com vizinhos, e representação em assembleias.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Elaboração de Pareceres:</strong> Análise e emissão de pareceres sobre questões jurídicas
                    complexas do condomínio.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Mediação de Conflitos:</strong> Atuação para mediar e resolver disputas de forma amigável,
                    evitando a judicialização.
                  </li>
                </ul>

                <h2>Por que Escolher a Nicholas Advocacia?</h2>
                <p>
                  Com nossa experiência em Direito Condominial, ajudamos a manter a ordem e a legalidade no seu
                  condomínio, protegendo os direitos de todos e promovendo um ambiente de convivência pacífica.
                </p>

                <div className="mt-8 text-center">
                  <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                    <Link
                      href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20direito%20condominial!"
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
                  Precisa de Ajuda com Questões Condominiais?
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
