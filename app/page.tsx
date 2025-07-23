"use client"

import type React from "react"

import NextImage from "next/image"
import Link from "next/link"
import { ChevronRight, Phone, ArrowRight, Calendar, User, Send } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FadeIn } from "@/components/fade-in"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GoogleReviews } from "@/components/google-reviews"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      subject: "Contato via Site - Formulário Principal",
      formType: "homepage",
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Mensagem enviada",
          description: "Entraremos em contato em breve.",
        })
        // Reset form
        const form = e.target as HTMLFormElement
        form.reset()
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Failed to send email:", error) // Log the actual error
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[600px] flex items-center">
        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-left">
              <div>
                <span className="mb-4 inline-block rounded-full bg-[#d4b26a]/20 px-4 py-2 text-sm font-semibold text-[#d4b26a]">
                  Advocacia Especializada em Direito Imobiliário
                </span>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Problemas com imóvel? Tenha apoio jurídico especializado e resolva com segurança.
                </h1>
                <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                  Atendimento rápido, ético e personalizado para resolver questões como regularização de imóveis,
                  contrato, aluguel, condomínio ou compra e venda.
                </p>
                <p className="text-lg text-[#d4b26a] font-medium mb-8">
                  Atendimento direto via WhatsApp. Fale agora com um advogado especialista em Direito Imobiliário.
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                <Button size="lg" className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a] px-8 py-4 text-lg">
                  <Link
                    href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!"
                    className="flex items-center gap-2"
                  >
                    Falar com Especialista
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-black hover:bg-white/90 px-8 py-4 text-lg"
                >
                  <Link href="#servicos">Ver Nossos Serviços</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/hero-banner-nn.jpg"
            alt="Nicholas Nascimento Advocacia - Justiça e Direito Imobiliário"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1e2c49] md:text-4xl">
              Atuação Jurídica Especializada em Direito Imobiliário
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Oferecemos apoio jurídico completo para resolver conflitos, regularizar imóveis e proteger seu patrimônio.
              Atendimento rápido, ético e direto com advogado especialista em Direito Imobiliário.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e2c49]/10 text-[#1e2c49]">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Usucapião</h3>
              <p className="mb-4 text-gray-600">
                Regularize seu imóvel e garanta a escritura definitiva com segurança jurídica.
              </p>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e2c49]/10 text-[#1e2c49]">
                <span className="text-2xl">📜</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Regularização de Imóveis</h3>
              <p className="mb-4 text-gray-600">
                Desbloqueie o valor do seu imóvel com documentação completa e legalizada.
              </p>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e2c49]/10 text-[#1e2c49]">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Contratos Imobiliários e Due Diligence</h3>
              <p className="mb-4 text-gray-600">
                Evite prejuízos e assine com segurança — revisão e elaboração por especialista.
              </p>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e2c49]/10 text-[#1e2c49]">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Litígios Imobiliários</h3>
              <p className="mb-4 text-gray-600">
                Ação judicial ou defesa em conflitos sobre posse, propriedade ou inadimplência.
              </p>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e2c49]/10 text-[#1e2c49]">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Incorporação Imobiliária</h3>
              <p className="mb-4 text-gray-600">
                Assessoria jurídica para construtoras, incorporadoras e investidores.
              </p>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e2c49]/10 text-[#1e2c49]">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Direito Condominial</h3>
              <p className="mb-4 text-gray-600">
                Conflitos entre moradores, cobranças indevidas ou defesa em assembleias.
              </p>
            </div>
          </div>

          {/* Adicionar novo card para Ações Locatícias */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md">
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e2c49]/10 text-[#1e2c49]">
                  <span className="text-2xl">🧾</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">Ações Locatícias (Aluguel)</h3>
                <p className="mb-4 text-gray-600">
                  Atrasos no pagamento? Desocupação? Direitos do inquilino ou do proprietário.
                </p>
              </div>
            </div>
          </div>

          {/* Ver Mais Button */}
          <div className="mt-12 text-center">
            <Button asChild className="bg-[#1e2c49] text-white hover:bg-[#2a3c5e] px-8 py-3">
              <Link href="/servicos" className="flex items-center gap-2">
                Ver Mais Serviços
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section - Modificada */}
      <section className="bg-[#1e2c49] py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl uppercase">
              NÃO ADIE A SOLUÇÃO DOS SEUS PROBLEMAS COM IMÓVEIS. SÓ É DONO QUEM REGISTRA!
            </h2>
            <div className="flex justify-center">
              <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a]">
                <Link
                  href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Falar no WhatsApp
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Highlight Section */}
      <section id="blog-section" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1e2c49] md:text-4xl">
              Entenda Seus Direitos: Artigos sobre Direito Imobiliário e Civil
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Conteúdos exclusivos sobre Direito Imobiliário e Civil para ajudar você a entender seus direitos, evitar
              problemas com imóveis e tomar decisões seguras.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            <FadeIn delay={0.1}>
              <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48 w-full">
                  <NextImage
                    src="/blog-usucapiao-extrajudicial.png"
                    alt="Usucapião Extrajudicial"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex flex-grow flex-col p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>08/05/2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      <span>Nicholas Nascimento</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">
                    Usucapião Extrajudicial: Como Regularizar seu Imóvel em Metade do Tempo
                  </h3>
                  <p className="mb-4 flex-grow text-gray-600">
                    Descubra como o procedimento extrajudicial pode acelerar significativamente o processo de usucapião,
                    economizando tempo e dinheiro.
                  </p>
                  <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                    <Link href="/blog/usucapiao-extrajudicial-como-regularizar-imovel" className="flex items-center">
                      Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48 w-full">
                  <NextImage
                    src="/blog-documentos-usucapiao.png"
                    alt="Documentos para Usucapião"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex flex-grow flex-col p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>15/04/2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      <span>Nicholas Nascimento</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">
                    Os 7 Documentos Essenciais para Garantir o Sucesso do seu Processo de Usucapião
                  </h3>
                  <p className="mb-4 flex-grow text-gray-600">
                    Conheça os documentos indispensáveis que podem fazer toda a diferença no resultado do seu processo
                    de usucapião.
                  </p>
                  <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                    <Link href="/blog/documentos-essenciais-usucapiao" className="flex items-center">
                      Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48 w-full">
                  <NextImage
                    src="/blog-erros-contratos-imoveis.png"
                    alt="Erros em Contratos Imobiliários"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex flex-grow flex-col p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>22/03/2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      <span>Nicholas Nascimento</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#1e2c49]">
                    5 Erros Fatais em Contratos Imobiliários que Podem Custar seu Patrimônio
                  </h3>
                  <p className="mb-4 flex-grow text-gray-600">
                    Evite prejuízos financeiros e dores de cabeça conhecendo os erros mais comuns em contratos de compra
                    e venda de imóveis.
                  </p>
                  <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                    <Link href="/blog/erros-fatais-contratos-imobiliarios" className="flex items-center">
                      Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="mt-10 text-center">
            <Button asChild className="bg-[#1e2c49] text-white hover:bg-[#2a3c5e]">
              <Link href="/blog">Ver todos os artigos</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-escritorio" className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn direction="left" className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-[#1e2c49] md:text-4xl">Sobre o Escritório</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  O escritório Nicholas Nascimento Advocacia é especializado em Direito Imobiliário, com atuação
                  estratégica e atendimento online em todo o Brasil. Nossa missão é oferecer soluções jurídicas seguras,
                  transparentes e personalizadas para proteger o patrimônio e os direitos de nossos clientes.
                </p>
                <p className="font-semibold text-[#1e2c49]">Atuamos em áreas como:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Propriedade e posse de imóveis</li>
                  <li>Usucapião judicial e extrajudicial</li>
                  <li>Adjudicação compulsória</li>
                  <li>Imissão de posse</li>
                  <li>Ações de despejo e revisão de aluguel</li>
                  <li>Regularização imobiliária completa</li>
                </ul>
                <p>
                  Com experiência prática e foco total em resultados, ajudamos nossos clientes a resolver conflitos,
                  prevenir riscos e conquistar a segurança jurídica necessária para tomar decisões imobiliárias com
                  tranquilidade.
                </p>
              </div>

              {/* Por que escolher */}
              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-bold text-[#1e2c49]">Por que escolher a Nicholas Nascimento Advocacia?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#d4b26a] p-2">
                      <span className="text-xl">🔍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#1e2c49]">
                        Especialização Total em Direito Imobiliário
                      </h4>
                      <p className="text-gray-600">
                        Atuação exclusiva na área imobiliária, com conhecimento profundo e atualizado sobre a
                        legislação, práticas e jurisprudência.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#d4b26a] p-2">
                      <span className="text-xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#1e2c49]">Atendimento Personalizado e Transparente</h4>
                      <p className="text-gray-600">
                        Cada cliente é tratado com atenção individual, linguagem clara e soluções jurídicas adaptadas à
                        sua realidade.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#d4b26a] p-2">
                      <span className="text-xl">🌐</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#1e2c49]">Atendimento Online em Todo o Brasil</h4>
                      <p className="text-gray-600">
                        Agilidade e praticidade com suporte completo por canais digitais, incluindo atendimento direto
                        via WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3} className="flex flex-col items-center justify-center">
              <div
                className="relative w-full overflow-hidden rounded-lg shadow-xl mb-6"
                style={{ aspectRatio: "auto" }}
              >
                <NextImage
                  src="/nicholas-nascimento-professional.jpg"
                  alt="Nicholas Nascimento - Advogado Especialista em Direito Imobiliário"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Apresentação do sócio fundador */}
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
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-12 text-center">
            
            
          </div>

          <GoogleReviews />

          {/* CTA após depoimentos */}
          <div id="contato-section" className="mt-12 text-center">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-[#1e2c49]">
                Em uma situação parecida com a de nossos clientes?
              </h3>
              <p className="mb-6 text-gray-600">
                Entre em contato e receba orientação de um advogado especialista em Direito Imobiliário. Atendimento
                rápido e seguro pelo WhatsApp.
              </p>
              <Button className="bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c4a25a]">
                <Link
                  href="https://wa.me/5533933009228?text=Olá,%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20serviços%20jurídicos!"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Falar com Especialista
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-3xl font-bold text-[#1e2c49]">
                Preencha o formulário abaixo ou fale conosco diretamente pelo WhatsApp
              </h2>
              <p className="text-gray-600">
                Nossa equipe jurídica está pronta para entender seu caso e orientar você com total sigilo, clareza e
                compromisso.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-gray-50 p-8 shadow-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input id="fullName" name="fullName" required placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" name="phone" required placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Descreva brevemente seu caso</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos sobre seu problema imobiliário..."
                  className="min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#1e2c49] text-white hover:bg-[#2a3c5e]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Solicitar Contato
                  </>
                )}
              </Button>
              <p className="mt-2 text-center text-xs text-gray-500">
                Ao enviar, você concorda com nossa política de privacidade. Responderemos em até 24h.
              </p>
            </form>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
