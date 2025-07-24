import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

export function ServicesSection() {
  const services = [
    {
      title: "Usucapião",
      description: "Regularize seu imóvel e garanta sua propriedade de forma legal e segura.",
      image: "/usucapiao-card-image.png",
      link: "/servicos/usucapiao",
    },
    {
      title: "Regularização de Imóveis",
      description: "Soluções completas para deixar seu imóvel em dia com a legislação.",
      image: "/regularizacao-imoveis-card.png",
      link: "/servicos/regularizacao-imoveis",
    },
    {
      title: "Contratos Imobiliários",
      description: "Elaboração e análise de contratos para transações imobiliárias seguras.",
      image: "/contratos-imobiliarios-card.png",
      link: "/servicos/contratos-imobiliarios",
    },
    {
      title: "Litígios Imobiliários",
      description: "Representação jurídica em disputas e conflitos relacionados a imóveis.",
      image: "/litigios-imobiliarios-card.png",
      link: "/servicos/litigios-imobiliarios",
    },
    {
      title: "Incorporação Imobiliária",
      description: "Assessoria jurídica para projetos de incorporação e construção civil.",
      image: "/incorporacao-imobiliaria-card.png",
      link: "/servicos/incorporacao-imobiliaria",
    },
    {
      title: "Direito Condominial",
      description: "Consultoria e defesa em questões de condomínio para síndicos e moradores.",
      image: "/direito-condominial-card.png",
      link: "/servicos/direito-condominial",
    },
    {
      title: "Recuperação de Conta Mercado Livre",
      description: "Assessoria jurídica para reativar contas suspensas no Mercado Livre.",
      image: "/marketplace-suspension-hero.png",
      link: "/servicos/recuperacao-conta-mercado-livre",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e2c49] mb-8">
            Nossas Áreas de Atuação
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
            Oferecemos expertise jurídica em diversas áreas do direito imobiliário e digital, com foco em soluções
            práticas e eficientes.
          </p>
        </FadeIn>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl font-bold text-[#1e2c49]">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Link href={service.link} passHref>
                    <Button className="w-full bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e] transition-colors">
                      Saiba Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.5}>
          <div className="mt-12">
            <Link href="/servicos" passHref>
              <Button className="bg-[#1e2c49] text-white hover:bg-[#2a3c5e] px-8 py-3 text-lg font-semibold shadow transition-colors">
                Ver Todos os Serviços
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
