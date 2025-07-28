import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Contato - Nicholas Nascimento Advocacia",
  description:
    "Entre em contato com Nicholas Nascimento Advocacia. Especialistas em direito imobiliário e civil em Governador Valadares - MG.",
  keywords: "contato, advogado, direito imobiliário, Governador Valadares, Nicholas Nascimento",
}

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e2c49] to-[#2a3f5f] py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Estamos prontos para ajudar você com suas questões jurídicas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-[#1e2c49] mb-8">Informações de Contato</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#d4b26a] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e2c49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e2c49] mb-2">Telefone</h3>
                      <p className="text-gray-600">(33) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#d4b26a] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e2c49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e2c49] mb-2">E-mail</h3>
                      <p className="text-gray-600">contato@nicholasnascimento.adv.br</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#d4b26a] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e2c49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e2c49] mb-2">Horário de Atendimento</h3>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-8">
                  <WhatsAppButton />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#1e2c49] mb-8">Envie sua Mensagem</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e2c49] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Precisa de Ajuda Jurídica?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para oferecer a melhor solução para seu caso
          </p>
          <WhatsAppButton />
        </div>
      </section>
    </div>
  )
}
