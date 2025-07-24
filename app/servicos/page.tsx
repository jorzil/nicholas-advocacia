import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function ServicosPage() {
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1e2c49] to-[#2a3c5e] text-white">
          <div className="container px-4 md:px-6 text-center">
            <FadeIn>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Nossos Serviços</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Oferecemos uma gama completa de serviços jurídicos especializados em direito imobiliário e digital,
                garantindo soluções eficazes e personalizadas para suas necessidades.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
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
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
