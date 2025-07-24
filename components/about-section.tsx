import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <Image
              src="/nicholas-nascimento-professional.jpg"
              width={600}
              height={400}
              alt="Nicholas Nascimento Advogado"
              className="mx-auto rounded-xl object-cover shadow-lg"
            />
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e2c49]">
                Experiência e Confiança ao Seu Lado
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-gray-700 leading-relaxed">
                No Nicholas Nascimento Advocacia e Consultoria Jurídica, combinamos expertise jurídica com um
                atendimento humanizado para oferecer soluções eficazes e personalizadas. Nossa missão é descomplicar o
                direito, garantindo a segurança e a tranquilidade dos nossos clientes em questões imobiliárias e
                digitais.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Com anos de experiência e um histórico de sucesso, estamos preparados para enfrentar os desafios mais
                complexos, sempre com ética, transparência e dedicação total aos seus objetivos.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <Link href="/sobre" passHref>
                <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e] px-6 py-3 text-md font-semibold shadow transition-colors">
                  Saiba Mais Sobre Nós
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
