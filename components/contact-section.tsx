import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1e2c49] to-[#2a3c5e] text-white">
      <div className="container px-4 md:px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Pronto para dar o próximo passo?</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
            Entre em contato conosco hoje mesmo para agendar uma consulta e descobrir como podemos ajudar você a
            resolver suas questões jurídicas.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contato" passHref>
              <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e] px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                Agendar Consulta
              </Button>
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1e2c49] px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Fale pelo WhatsApp
              </Button>
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.6}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-200">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-[#d4b26a]" />
              <a href="tel:+5511999999999" className="hover:underline">
                (11) 99999-9999
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#d4b26a]" />
              <a href="mailto:contato@nicholasnascimento.adv.br" className="hover:underline">
                contato@nicholasnascimento.adv.br
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#d4b26a]" />
              <span>Rua Exemplo, 123, Centro, Cidade - SP</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
