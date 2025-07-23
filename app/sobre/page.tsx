import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { TestimonialSection } from "@/components/testimonial-section" // Assuming this component exists and is correct

export const metadata = {
  title: "Sobre Nós - Nicholas Advocacia",
  description:
    "Conheça a Nicholas Advocacia, nosso propósito, valores e a equipe especializada em Direito Imobiliário.",
  keywords:
    "sobre nós, Nicholas Advocacia, escritório de advocacia, direito imobiliário, equipe jurídica, valores, missão",
  openGraph: {
    title: "Sobre Nós - Nicholas Advocacia",
    description:
      "Conheça a Nicholas Advocacia, nosso propósito, valores e a equipe especializada em Direito Imobiliário.",
    url: "https://www.nicholasadvocacia.com.br/sobre",
  },
}

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Sobre a Nicholas Advocacia
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Experiência, ética e resultados em Direito Imobiliário.
                </p>
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20seus%20serviços!"
                    className="flex items-center gap-2"
                  >
                    Falar com Especialista
                    <Phone className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/escritorio-nicholas-advocacia.png" // Placeholder image
            alt="Fundo do escritório Nicholas Advocacia"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </section>

      {/* About Section - Detailed */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn direction="left" className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-[#1e2c49] md:text-4xl">Nossa Missão e Valores</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  A Nicholas Nascimento Advocacia nasceu com o propósito de oferecer soluções jurídicas de alta
                  qualidade no campo do Direito Imobiliário. Nossa missão é proteger o patrimônio e os direitos de
                  nossos clientes, atuando com excelência, ética e transparência em cada caso.
                </p>
                <p>
                  Acreditamos que o acesso à justiça deve ser claro e descomplicado. Por isso, nossa comunicação é
                  direta e personalizada, garantindo que você entenda cada etapa do seu processo.
                </p>
                <p className="font-semibold text-[#1e2c49]">Nossos valores fundamentais são:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Excelência:</strong> Busca contínua pelo aprimoramento técnico e pela melhor solução
                    jurídica.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Ética:</strong> Atuação pautada pela integridade, honestidade e respeito.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Transparência:</strong> Comunicação clara e objetiva, sem juridiquês.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Comprometimento:</strong> Dedicação total aos interesses de cada cliente.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Inovação:</strong> Utilização de tecnologia para um atendimento ágil e eficiente.
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3} className="flex flex-col items-center justify-center">
              <div className="relative w-full overflow-hidden rounded-lg shadow-xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/equipe-nicholas-advocacia-1.png" // Placeholder image
                  alt="Equipe Nicholas Nascimento Advocacia"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Founder Section */}
          <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
            <FadeIn
              direction="left"
              delay={0.3}
              className="flex flex-col items-center justify-center order-2 md:order-1"
            >
              <div
                className="relative w-full overflow-hidden rounded-lg shadow-xl mb-6"
                style={{ aspectRatio: "auto" }}
              >
                <Image
                  src="/advogado-nicholas.png" // Placeholder image
                  alt="Nicholas Nascimento - Advogado Especialista em Direito Imobiliário"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="text-center max-w-md">
                <h3 className="text-xl font-bold text-[#1e2c49] mb-3">Nicholas Nascimento</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Nicholas Nascimento é advogado e fundador do escritório, com especialização em Direito Imobiliário.
                  Atua com foco exclusivo na área, e está em constante aprimoramento técnico, participando de cursos
                  avançados com os maiores especialistas do país em regularização de imóveis e litígios imobiliários.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  Após sólida experiência em escritórios e órgãos públicos, fundou sua própria banca com o propósito de
                  entregar um atendimento direto, acessível e estratégico para quem enfrenta problemas com imóveis,
                  sempre com ética, agilidade e foco no resultado.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="flex flex-col justify-center order-1 md:order-2">
              <h2 className="mb-6 text-3xl font-bold text-[#1e2c49] md:text-4xl">Nosso Fundador</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  A visão de Nicholas Nascimento para a advocacia imobiliária é de um serviço que vai além do legal,
                  focando na solução prática e na tranquilidade do cliente. Sua paixão pelo direito imobiliário e seu
                  compromisso com a excelência são a base do nosso escritório.
                </p>
                <p>
                  Ele lidera a equipe com um modelo de atendimento que prioriza a proximidade com o cliente, a clareza
                  nas informações e a busca incansável pelos melhores resultados.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Team Section (Optional - if you have more team members) */}
          <div className="mt-16">
            <h2 className="mb-8 text-3xl font-bold text-[#1e2c49] text-center md:text-4xl">Nossa Equipe</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FadeIn delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/advogada-amanda.png" // Placeholder image
                    alt="Advogada Amanda"
                    width={200}
                    height={200}
                    className="rounded-full object-cover mb-4 w-48 h-48"
                  />
                  <h3 className="text-xl font-bold text-[#1e2c49]">Amanda Costa</h3>
                  <p className="text-gray-600 text-sm">Advogada Associada</p>
                  <p className="text-gray-700 text-sm mt-2">Especialista em Regularização de Imóveis e Contratos.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/advogado-ricardo.png" // Placeholder image
                    alt="Advogado Ricardo"
                    width={200}
                    height={200}
                    className="rounded-full object-cover mb-4 w-48 h-48"
                  />
                  <h3 className="text-xl font-bold text-[#1e2c49]">Ricardo Silva</h3>
                  <p className="text-gray-600 text-sm">Advogado Associado</p>
                  <p className="text-gray-700 text-sm mt-2">Foco em Litígios Imobiliários e Direito Condominial.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/advogada-carolina.png" // Placeholder image
                    alt="Advogada Carolina"
                    width={200}
                    height={200}
                    className="rounded-full object-cover mb-4 w-48 h-48"
                  />
                  <h3 className="text-xl font-bold text-[#1e2c49]">Carolina Mendes</h3>
                  <p className="text-gray-600 text-sm">Advogada Associada</p>
                  <p className="text-gray-700 text-sm mt-2">Especialista em Usucapião e Incorporação Imobiliária.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/equipe-nicholas-advocacia-2.png" // Placeholder image
                    alt="Equipe Nicholas Nascimento Advocacia"
                    width={200}
                    height={200}
                    className="rounded-full object-cover mb-4 w-48 h-48"
                  />
                  <h3 className="text-xl font-bold text-[#1e2c49]">Equipe de Suporte</h3>
                  <p className="text-gray-600 text-sm">Administrativo e Atendimento</p>
                  <p className="text-gray-700 text-sm mt-2">
                    Garantindo agilidade e organização em todos os processos.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-16">
            <TestimonialSection />
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold text-[#1e2c49] mb-4">Fale Conosco</h2>
            <p className="text-gray-700 mb-6">
              Tem alguma dúvida ou precisa de assessoria jurídica? Entre em contato com nossa equipe.
            </p>
            <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
              <Link
                href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20seus%20serviços!"
                className="flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Falar no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
