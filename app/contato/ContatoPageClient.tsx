"use client"

import NextImage from "next/image"
import { Phone, Mail, Clock, MessageCircle } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContatoPageClient() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5533999887766"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta jurídica.")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1e2c49] text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-blue-100 mb-8">
              Estamos prontos para ajudar você com suas questões jurídicas. Entre em contato e agende sua consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1e2c49] mb-6">Fale Conosco</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Nossa equipe está pronta para atendê-lo com a excelência que você merece. Entre em contato através dos
                  canais abaixo.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-l-4 border-l-[#1e2c49]">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#1e2c49] p-3 rounded-full">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1e2c49] mb-1">Telefone</h3>
                        <p className="text-gray-600">(33) 99988-7766</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#1e2c49]">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#1e2c49] p-3 rounded-full">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1e2c49] mb-1">Email</h3>
                        <p className="text-gray-600">contato@nicholasnascimento.adv.br</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#1e2c49]">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#1e2c49] p-3 rounded-full">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1e2c49] mb-1">Horário de Atendimento</h3>
                        <div className="text-gray-600">
                          <p>Segunda a Sexta: 8h às 18h</p>
                          <p>Sábado: 8h às 12h</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Atendimento via WhatsApp</h3>
                  <p className="text-green-700 mb-4">
                    Para maior agilidade, entre em contato diretamente pelo WhatsApp
                  </p>
                  <Button
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1e2c49]">Envie sua Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-xl">
              <NextImage
                src="/nicholas-nascimento-professional.jpg"
                alt="Nicholas Nascimento - Advogado Especialista"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#1e2c49] mb-4">Nicholas Nascimento</h3>
            <p className="text-gray-600 text-lg mb-6">Advogado especialista em Direito Imobiliário e Civil</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Com anos de experiência na área jurídica, oferecemos atendimento personalizado e soluções eficazes para
              suas questões legais. Nossa missão é garantir que seus direitos sejam protegidos com excelência e
              dedicação.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
