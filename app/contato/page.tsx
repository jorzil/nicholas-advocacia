import type { Metadata } from "next"
import { Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Contato - Nicholas Nascimento Advocacia",
  description:
    "Entre em contato conosco para consultoria jurídica especializada em direito imobiliário e civil. Atendimento personalizado e eficiente.",
  keywords: "contato advogado, consultoria jurídica, direito imobiliário, Nicholas Nascimento",
}

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e2c49] to-[#2a3c5e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-blue-100 mb-8">
              Estamos prontos para ajudá-lo com suas questões jurídicas. Entre em contato e agende sua consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1e2c49] mb-6">Envie sua Mensagem</h2>
                <ContactForm />
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-[#1e2c49] mb-6">Informações de Contato</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-[#1e2c49] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Telefone</h3>
                        <p className="text-gray-600">(33) 99999-9999</p>
                        <p className="text-sm text-gray-500">WhatsApp disponível</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-[#1e2c49] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">contato@nicholasnascimento.adv.br</p>
                        <p className="text-sm text-gray-500">Resposta em até 24h</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-[#1e2c49] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
                        <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-gray-600">Sábado: 8h às 12h</p>
                        <p className="text-sm text-gray-500">Atendimento de emergência via WhatsApp</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Atendimento Rápido via WhatsApp</h3>
                  <p className="text-green-700 mb-4">
                    Para consultas urgentes ou dúvidas rápidas, entre em contato diretamente pelo WhatsApp.
                  </p>
                  <WhatsAppButton message="Olá! Gostaria de agendar uma consulta jurídica." className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1e2c49] mb-12">
              Perguntas Frequentes sobre Atendimento
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1e2c49] mb-3">Como funciona a primeira consulta?</h3>
                <p className="text-gray-700">
                  A primeira consulta é uma conversa para entendermos seu caso e explicarmos como podemos ajudar. Pode
                  ser presencial ou por videoconferência, conforme sua preferência.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1e2c49] mb-3">Qual o prazo para resposta?</h3>
                <p className="text-gray-700">
                  Respondemos emails em até 24 horas úteis. Para urgências, recomendamos o contato via WhatsApp para
                  resposta mais rápida.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1e2c49] mb-3">Atendem em outras cidades?</h3>
                <p className="text-gray-700">
                  Sim, atendemos clientes em todo o estado de Minas Gerais e outras regiões. Consultas podem ser
                  realizadas por videoconferência quando necessário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
