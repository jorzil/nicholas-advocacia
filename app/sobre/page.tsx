import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CounterAnimation } from "@/components/counter-animation"
import { FadeIn } from "@/components/fade-in"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nicholas Nascimento",
      title: "Advogado Fundador",
      image: "/advogado-nicholas.png",
      description:
        "Especialista em Direito Imobiliário e Digital, com vasta experiência em regularização de imóveis e litígios complexos. Lidera a equipe com foco em soluções inovadoras e personalizadas.",
    },
    {
      name: "Amanda Costa",
      title: "Advogada Associada",
      image: "/advogada-amanda.png",
      description:
        "Atua com foco em contratos imobiliários e direito condominial, oferecendo segurança jurídica e clareza nas transações. Sua expertise garante a proteção dos interesses de nossos clientes.",
    },
    {
      name: "Ricardo Silva",
      title: "Advogado Sênior",
      image: "/advogado-ricardo.png",
      description:
        "Com profundo conhecimento em usucapião e regularização fundiária, Ricardo é essencial para casos que exigem atenção aos detalhes e estratégias eficazes para a aquisição de propriedade.",
    },
    {
      name: "Carolina Mendes",
      title: "Advogada Júnior",
      image: "/advogada-carolina.png",
      description:
        "Dedicada ao suporte em todas as áreas do direito imobiliário, Carolina contribui com pesquisa aprofundada e agilidade nos processos, garantindo um atendimento eficiente e de qualidade.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1e2c49] to-[#2a3c5e] text-white">
          <div className="container px-4 md:px-6 text-center">
            <FadeIn>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Sobre Nós</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Conheça a história, os valores e a equipe por trás do Nicholas Nascimento Advocacia e Consultoria
                Jurídica.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <Image
                  src="/escritorio-nicholas-advocacia.png"
                  width={600}
                  height={400}
                  alt="Escritório Nicholas Nascimento Advocacia"
                  className="mx-auto rounded-xl object-cover shadow-lg"
                />
              </FadeIn>
              <div className="space-y-6">
                <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e2c49]">
                    Nossa História e Missão
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Fundado com a missão de oferecer soluções jurídicas inovadoras e eficazes, o Nicholas Nascimento
                    Advocacia e Consultoria Jurídica se destaca pela excelência no atendimento e pelo compromisso com os
                    resultados. Nossa trajetória é marcada pela dedicação em cada caso, buscando sempre a melhor
                    estratégia para nossos clientes.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Acreditamos que o direito deve ser acessível e compreensível. Por isso, nossa equipe trabalha com
                    transparência, ética e um atendimento humanizado, construindo relações de confiança e duradouras.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e2c49] mb-12">Nossos Valores</h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <Image src="/expertise-icon.png" alt="Expertise" width={64} height={64} className="mb-4" />
                    <CardTitle className="text-xl font-bold text-[#1e2c49]">Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Conhecimento aprofundado e atualização constante nas áreas de atuação.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <Image
                      src="/personalized-service-icon.png"
                      alt="Atendimento Personalizado"
                      width={64}
                      height={64}
                      className="mb-4"
                    />
                    <CardTitle className="text-xl font-bold text-[#1e2c49]">Atendimento Personalizado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Soluções sob medida para as necessidades específicas de cada cliente.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <Image src="/experience-icon.png" alt="Resultados" width={64} height={64} className="mb-4" />
                    <CardTitle className="text-xl font-bold text-[#1e2c49]">Resultados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Foco na obtenção dos melhores resultados para os casos de nossos clientes.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e2c49] mb-12">Nossa Equipe</h2>
            </FadeIn>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      width={160}
                      height={160}
                      alt={member.name}
                      className="rounded-full object-cover mb-4 w-40 h-40"
                    />
                    <CardTitle className="text-xl font-bold text-[#1e2c49] mb-2">{member.name}</CardTitle>
                    <p className="text-md font-semibold text-[#d4b26a] mb-4">{member.title}</p>
                    <CardContent className="text-gray-700 text-center flex-grow">
                      <p>{member.description}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1e2c49] to-[#2a3c5e] text-white">
          <div className="container px-4 md:px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Números que Inspiram Confiança</h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-[#d4b26a]">
                    <CounterAnimation end={1000} suffix="+" />
                  </div>
                  <p className="text-lg text-gray-200">Casos de Sucesso</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-[#d4b26a]">
                    <CounterAnimation end={15} suffix="+" />
                  </div>
                  <p className="text-lg text-gray-200">Anos de Experiência</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-[#d4b26a]">
                    <CounterAnimation end={98} suffix="%" />
                  </div>
                  <p className="text-lg text-gray-200">Satisfação do Cliente</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e2c49] mb-8">
                Pronto para Começar?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
                Entre em contato conosco hoje mesmo para agendar uma consulta e descobrir como podemos ajudar você a
                resolver suas questões jurídicas.
              </p>
              <Link href="/contato" passHref>
                <Button className="inline-flex h-12 items-center justify-center rounded-md bg-[#d4b26a] px-8 text-lg font-medium text-[#1e2c49] shadow transition-colors hover:bg-[#c0a05e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4b26a]">
                  Agendar Consulta
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
