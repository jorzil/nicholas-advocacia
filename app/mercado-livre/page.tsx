import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/fade-in"

const ChevronRight = ArrowRight

export const metadata = {
  title: "Recuperação de Conta Mercado Livre - Nicholas Advocacia",
  description:
    "Sua conta no Mercado Livre foi suspensa? Recuperamos para você! Assessoria jurídica especializada para vendedores.",
  keywords:
    "recuperação conta mercado livre, conta bloqueada mercado livre, conta suspensa mercado livre, advogado mercado livre, direito digital, e-commerce, prejuízo mercado livre, reativar conta mercado livre",
  openGraph: {
    title: "Recuperação de Conta Mercado Livre - Nicholas Advocacia",
    description:
      "Sua conta no Mercado Livre foi suspensa? Recuperamos para você! Assessoria jurídica especializada para vendedores.",
    url: "https://www.nicholasadvocacia.com.br/mercado-livre",
  },
}

export default function MercadoLivreRecoveryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[450px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Sua conta no Mercado Livre foi suspensa? Recuperamos para você!
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Sabemos o impacto que uma suspensão de conta pode causar: queda nas vendas, prejuízos financeiros e
                  perda de credibilidade com seus clientes. Mas, com o apoio certo, você pode reverter essa situação.
                  Nosso escritório de advocacia é especializado em recuperar contas suspensas no Mercado Livre e outras
                  contas digitais.
                </p>
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20recuperação%20de%20conta%20Mercado%20Livre!"
                    className="flex items-center gap-2"
                  >
                    Descubra como recuperar sua conta no Mercado Livre
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/marketplace-suspension-hero.png"
            alt="Fundo de recuperação de conta Mercado Livre"
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
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center">
              Por que o bloqueio da conta pode ser prejudicial?
            </h2>
            <p className="text-center mb-10">
              Ter a conta suspensa no Mercado Livre não é apenas um contratempo, mas um verdadeiro prejuízo para o
              vendedor. Veja os principais impactos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
                <CheckCircle className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-[#1e2c49] mb-2">Prejuízo financeiro imediato</h3>
                <p>A suspensão interrompe suas vendas, afetando diretamente o fluxo de caixa.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
                <CheckCircle className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-[#1e2c49] mb-2">Perda de credibilidade</h3>
                <p>
                  Clientes podem interpretar o bloqueio como um problema com a sua marca, prejudicando sua reputação.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
                <CheckCircle className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-[#1e2c49] mb-2">Dificuldade de acesso futuro</h3>
                <p>Resolver suspensões sem apoio jurídico pode ser um desafio, especialmente em casos complexos.</p>
              </div>
            </div>

            <p className="text-center mb-10">
              Se esses problemas soam familiares, saiba que você não está sozinho e que a solução está ao seu alcance.
            </p>

            <div className="mt-8 text-center mb-16">
              <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                <Link
                  href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20como%20evitar%20prejuízos%20com%20conta%20suspensa%20no%20Mercado%20Livre!"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Saiba como evitar prejuízos com sua conta suspensa
                </Link>
              </Button>
            </div>

            <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center">
              Como podemos ajudar você a reativar sua conta?
            </h2>
            <p className="text-center mb-10">
              Nosso escritório adota uma abordagem personalizada para cada caso. Aqui está o que faremos para ajudar
              você:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
                <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-[#1e2c49] mb-2">Análise detalhada do caso</h3>
                <p>
                  Entendemos a fundo os motivos da suspensão e planejamos as ações necessárias para reverter o problema.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
                <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-[#1e2c49] mb-2">Medidas jurídicas estratégicas</h3>
                <p>Se necessário, entramos com uma ação judicial para garantir a reativação da conta.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
                <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-[#1e2c49] mb-2">Atuação especializada</h3>
                <p>
                  Com vasta experiência em marketplaces e Direito Empresarial, defendemos seus direitos e protegemos o
                  futuro do seu negócio.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center mb-16">
              <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                <Link
                  href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20como%20proteger%20meu%20negócio%20no%20Marketplace!"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Veja como proteger seu negócio no Marketplace
                </Link>
              </Button>
            </div>

            <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center">Por que confiar no nosso escritório?</h2>
            <p className="text-center mb-10">
              Nossa equipe é formada por advogados altamente qualificados, com experiência comprovada na resolução de
              problemas em marketplaces. Conheça os especialistas que irão trabalhar no seu caso:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/advogado-nicholas.png"
                  alt="Advogado Nicholas"
                  width={150}
                  height={150}
                  className="rounded-full mb-4 object-cover w-[150px] h-[150px]"
                />
                <h3 className="text-xl font-semibold text-[#1e2c49]">Nicholas Nascimento</h3>
                <p className="text-gray-600">Advogado Especialista</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/advogada-amanda.png"
                  alt="Advogada Amanda"
                  width={150}
                  height={150}
                  className="rounded-full mb-4 object-cover w-[150px] h-[150px]"
                />
                <h3 className="text-xl font-semibold text-[#1e2c49]">Amanda Silva</h3>
                <p className="text-gray-600">Advogada Associada</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/advogada-carolina.png"
                  alt="Advogada Carolina"
                  width={150}
                  height={150}
                  className="rounded-full mb-4 object-cover w-[150px] h-[150px]"
                />
                <h3 className="text-xl font-semibold text-[#1e2c49]">Carolina Mendes</h3>
                <p className="text-gray-600">Advogada Associada</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/advogado-ricardo.png"
                  alt="Advogado Ricardo"
                  width={150}
                  height={150}
                  className="rounded-full mb-4 object-cover w-[150px] h-[150px]"
                />
                <h3 className="text-xl font-semibold text-[#1e2c49]">Ricardo Oliveira</h3>
                <p className="text-gray-600">Advogado Associado</p>
              </div>
            </div>

            <p className="text-center mb-10">
              Combinamos conhecimento técnico e uma abordagem prática para entregar os melhores resultados aos nossos
              clientes.
            </p>

            <div className="mt-8 text-center mb-16">
              <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                <Link
                  href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento%20sem%20custos!"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Converse com nosso time e agende um atendimento sem custos.
                </Link>
              </Button>
            </div>

            {/* Contact Form Section */}
            <div className="mt-16 p-6 bg-gray-50 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center">Não perca mais tempo!</h2>
              <p className="text-center mb-6">
                Não deixe que a suspensão de sua conta prejudique ainda mais o seu negócio. Agende agora uma consulta
                com nossa equipe e descubra como podemos ajudá-lo.
              </p>
              <div className="text-center mb-8">
                <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20resolver%20o%20problema%20da%20minha%20conta%20Mercado%20Livre!"
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Resolva o problema da sua conta hoje mesmo
                  </Link>
                </Button>
              </div>
              <p className="text-center text-gray-600">
                Com transparência e compromisso, estamos prontos para analisar seu caso e oferecer a solução ideal para
                que você volte a vender no Mercado Livre com tranquilidade e segurança.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
