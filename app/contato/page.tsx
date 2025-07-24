import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/fade-in"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1e2c49] to-[#2a3c5e] text-white">
          <div className="container px-4 md:px-6 text-center">
            <FadeIn>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Fale Conosco</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Estamos prontos para ouvir suas necessidades e oferecer a melhor solução jurídica.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FadeIn>
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-[#1e2c49] mb-4">Informações de Contato</h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-[#d4b26a]" />
                      <p>Rua Exemplo, 123, Centro, Cidade - SP, CEP 00000-000</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-[#d4b26a]" />
                      <p>
                        <a href="tel:+5511999999999" className="hover:underline">
                          (11) 99999-9999
                        </a>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-[#d4b26a]" />
                      <p>
                        <a href="mailto:contato@nicholasnascimento.adv.br" className="hover:underline">
                          contato@nicholasnascimento.adv.br
                        </a>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-[#d4b26a]" />
                      <p>Segunda a Sexta: 09:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-[#1e2c49] mb-4">Localização</h3>
                    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5000000000005!2d-46.6333333!3d-23.550519999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8c8c8c8c8%3A0x94ce59c8c8c8c8c8!2sRua%20Exemplo%2C%20123%2C%20Centro%2C%20Cidade%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização do escritório no Google Maps"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
