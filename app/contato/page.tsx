import NextImage from "next/image"
import Link from "next/link"
import { Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/fade-in"

export const metadata = {
  title: "Contato - Nicholas Advocacia",
  description: "Entre em contato com a Nicholas Advocacia para agendar uma consulta ou tirar suas dúvidas.",
  keywords: "contato, advogado, direito imobiliário, telefone, email, horário de atendimento",
  openGraph: {
    title: "Contato - Nicholas Advocacia",
    description: "Entre em contato com a Nicholas Advocacia para agendar uma consulta ou tirar suas dúvidas.",
    url: "https://www.nicholasadvocacia.com.br/contato",
  },
}

export default function ContatoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Entre em Contato
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Estamos prontos para ajudar você a resolver seus problemas imobiliários.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <NextImage src="/law-banner.png" alt="Fundo de contato" fill className="object-cover" priority />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </section>

      {/* Contact Details and Form Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <FadeIn direction="left" className="space-y-8">
              <h2 className="text-3xl font-bold text-[#1e2c49] mb-4">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#d4b26a] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e2c49]">Telefone / WhatsApp</h3>
                    <p className="text-gray-700">(33) 99330-09228</p>
                    <Link
                      href="https://wa.me/5533933009228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!"
                      className="text-[#d4b26a] hover:underline flex items-center gap-1 mt-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enviar mensagem via WhatsApp <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#d4b26a] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e2c49]">Email</h3>
                    <p className="text-gray-700">adv@nicholasadvocacia.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[#d4b26a] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e2c49]">Horário de Atendimento</h3>
                    <p className="text-gray-700">Segunda a Sexta: 09:00 - 18:00</p>
                    <p className="text-gray-700">Sábado e Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center lg:text-left">Envie sua Mensagem</h2>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
