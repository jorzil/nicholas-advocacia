import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form" // Reusing general contact form
import { FadeIn } from "@/components/fade-in"
import { ServiceSidebar } from "@/components/service-sidebar"

export const metadata = {
  title: "Litígios Imobiliários - Nicholas Advocacia",
  description:
    "Defesa e representação em ações judiciais envolvendo posse, propriedade e outros conflitos imobiliários.",
  keywords:
    "litígios imobiliários, ações judiciais, posse, propriedade, despejo, reintegração de posse, advogado imobiliário",
  openGraph: {
    title: "Litígios Imobiliários - Nicholas Advocacia",
    description:
      "Defesa e representação em ações judiciais envolvendo posse, propriedade e outros conflitos imobiliários.",
    url: "https://www.nicholasadvocacia.com.br/servicos/litigios-imobiliarios",
  },
}

export default function LitigiosImobiliariosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[400px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Litígios Imobiliários
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Representação jurídica em disputas de posse, propriedade e outros conflitos.
                </p>
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20litígios%20imobiliários!"
                    className="flex items-center gap-2"
                  >
                    Falar com Especialista
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/lady-justice-gold-blue.png" // Placeholder image
            alt="Fundo de litígios imobiliários"
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

            {/* Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none text-gray-700">
                <h2>Conflitos Imobiliários: Ações Judiciais e Defesa</h2>
                <p>
                  Disputas envolvendo imóveis são complexas e exigem conhecimento especializado. Seja você proprietário,
                  possuidor, inquilino ou construtor, é fundamental ter um advogado experiente ao seu lado para defender
                  seus direitos e buscar a melhor solução para o conflito.
                </p>

                <h2>Nossa Atuação em Litígios Imobiliários</h2>
                <p>Atuamos em diversas ações judiciais, incluindo:</p>
                <ul>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Ações Possessórias:</strong> Reintegração de posse, manutenção de posse, interdito
                    proibitório.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Ações de Propriedade:</strong> Usucapião, adjudicação compulsória, reivindicatória.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Ações Locatícias:</strong> Despejo, cobrança de aluguéis, revisão de aluguel, renovatória.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Ações Condominiais:</strong> Cobrança de cotas condominiais, anulação de assembleias,
                    conflitos entre vizinhos.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Ações de Vícios Construtivos:</strong> Defesa de direitos em casos de defeitos na
                    construção.
                  </li>
                  <li>
                    <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2" />
                    <strong>Ações de Rescisão Contratual:</strong> Resolução de contratos de compra e venda, promessa de
                    compra e venda.
                  </li>
                </ul>

                <h2>Por que Escolher a Nicholas Advocacia?</h2>
                <p>
                  Com uma abordagem estratégica e focada em resultados, nossa equipe está preparada para representar
                  seus interesses em qualquer litígio imobiliário, buscando a solução mais favorável e eficiente para o
                  seu caso.
                </p>

                <div className="mt-8 text-center">
                  <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                    <Link
                      href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20litígios%20imobiliários!"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Falar com Especialista
                    </Link>
                  </Button>
                </div>
              </article>

              {/* Contact Form Section */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center">
                  Precisa de Ajuda em um Litígio Imobiliário?
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
