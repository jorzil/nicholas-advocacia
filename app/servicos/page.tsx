import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { ServiceSidebar } from "@/components/service-sidebar"

export const metadata = {
  title: "Serviços - Nicholas Advocacia",
  description: "Conheça todos os serviços especializados em Direito Imobiliário oferecidos pela Nicholas Advocacia.",
  keywords:
    "serviços jurídicos, direito imobiliário, usucapião, regularização de imóveis, contratos imobiliários, litígios imobiliários, incorporação imobiliária, direito condominial, ações locatícias",
  openGraph: {
    title: "Serviços - Nicholas Advocacia",
    description: "Conheça todos os serviços especializados em Direito Imobiliário oferecidos pela Nicholas Advocacia.",
    url: "https://www.nicholasadvocacia.com.br/servicos",
  },
}

export default function ServicosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Nossos Serviços Jurídicos
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Soluções completas em Direito Imobiliário para proteger seu patrimônio e garantir seus direitos.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/law-office-background.png"
            alt="Fundo de escritório de advocacia"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ServiceSidebar />
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-3">
              <div className="grid gap-8 md:grid-cols-2">
                <FadeIn delay={0.1}>
                  <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image src="/usucapiao-card-image.png" alt="Usucapião" fill className="object-cover" />
                    </div>
                    <CardContent className="flex flex-grow flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Usucapião</h3>
                      <p className="mb-4 flex-grow text-gray-600">
                        Regularize seu imóvel e garanta a escritura definitiva com segurança jurídica.
                      </p>
                      <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                        <Link href="/servicos/usucapiao" className="flex items-center">
                          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/regularizacao-imoveis-card.png"
                        alt="Regularização de Imóveis"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-grow flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Regularização de Imóveis</h3>
                      <p className="mb-4 flex-grow text-gray-600">
                        Desbloqueie o valor do seu imóvel com documentação completa e legalizada.
                      </p>
                      <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                        <Link href="/servicos/regularizacao-imoveis" className="flex items-center">
                          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/contratos-imobiliarios-card.png"
                        alt="Contratos Imobiliários"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-grow flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Contratos Imobiliários e Due Diligence</h3>
                      <p className="mb-4 flex-grow text-gray-600">
                        Evite prejuízos e assine com segurança — revisão e elaboração por especialista.
                      </p>
                      <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                        <Link href="/servicos/contratos-imobiliarios" className="flex items-center">
                          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/litigios-imobiliarios-card.png"
                        alt="Litígios Imobiliários"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-grow flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Litígios Imobiliários</h3>
                      <p className="mb-4 flex-grow text-gray-600">
                        Ação judicial ou defesa em conflitos sobre posse, propriedade ou inadimplência.
                      </p>
                      <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                        <Link href="/servicos/litigios-imobiliarios" className="flex items-center">
                          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/incorporacao-imobiliaria-card.png"
                        alt="Incorporação Imobiliária"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-grow flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Incorporação Imobiliária</h3>
                      <p className="mb-4 flex-grow text-gray-600">
                        Assessoria jurídica para construtoras, incorporadoras e investidores.
                      </p>
                      <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                        <Link href="/servicos/incorporacao-imobiliaria" className="flex items-center">
                          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/direito-condominial-card.png"
                        alt="Direito Condominial"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-grow flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Direito Condominial</h3>
                      <p className="mb-4 flex-grow text-gray-600">
                        Conflitos entre moradores, cobranças indevidas ou defesa em assembleias.
                      </p>
                      <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                        <Link href="/servicos/direito-condominial" className="flex items-center">
                          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.7}>
                  <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/marketplace-suspension-hero.png" // Using a relevant placeholder image
                        alt="Ações Locatícias (Aluguel)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-grow flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Ações Locatícias (Aluguel)</h3>
                      <p className="mb-4 flex-grow text-gray-600">
                        Atrasos no pagamento? Desocupação? Direitos do inquilino ou do proprietário.
                      </p>
                      <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                        <Link href="/servicos/acoes-locaticias" className="flex items-center">
                          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.8}>
                  <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/property-legal-documents.png" // Using a relevant placeholder image
                        alt="Recuperação de Conta Mercado Livre"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-grow flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Recuperação de Conta Mercado Livre</h3>
                      <p className="mb-4 flex-grow text-gray-600">
                        Assessoria jurídica para vendedores com contas suspensas ou bloqueadas no Mercado Livre.
                      </p>
                      <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                        <Link href="/servicos/recuperacao-conta-mercado-livre" className="flex items-center">
                          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
