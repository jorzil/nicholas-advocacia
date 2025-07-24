import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/hero-banner-nn.jpg"
        alt="Banner de Advocacia Imobiliária"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e2c49]/80 to-[#1e2c49]/60 z-10" />
      <div className="relative z-20 px-4 md:px-6 max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
            Sua Segurança Jurídica em Direito Imobiliário e Digital
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Especialistas em Usucapião, Regularização de Imóveis, Contratos, Litígios e Recuperação de Contas em
            Marketplaces.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/servicos" passHref>
              <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e] px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                Nossos Serviços
              </Button>
            </Link>
            <Link href="/contato" passHref>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1e2c49] px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Agende uma Consulta
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
