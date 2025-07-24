import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServiceSidebar } from "@/components/service-sidebar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { SchedulingForm } from "@/components/scheduling-form"
import { FadeIn } from "@/components/fade-in"

export default function RecuperacaoContaMercadoLivrePage() {
  const breadcrumbItems = [
    { label: "Serviços", href: "/servicos" },
    { label: "Recuperação de Conta Mercado Livre", href: "/servicos/recuperacao-conta-mercado-livre" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/marketplace-suspension-hero.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <FadeIn>
              <h1 className="text-5xl font-bold text-white text-center">Recuperação de Conta Mercado Livre</h1>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex flex-col lg:flex-row gap-12 mt-8">
              <div className="lg:w-2/3 space-y-8">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-[#1e2c49]">Sua Conta no Mercado Livre Foi Suspensa?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A suspensão de uma conta no Mercado Livre pode ser um grande problema para vendedores e compradores,
                    impactando diretamente suas operações e rendimentos. Muitas vezes, a suspensão ocorre por motivos
                    que podem ser contestados ou regularizados com a devida assessoria jurídica. Nosso escritório é
                    especializado em direito digital e pode te ajudar a recuperar o acesso à sua conta.
                  </p>
                  <Image
                    src="/marketplace-suspension-hero.png"
                    alt="Aviso de suspensão de marketplace"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-md mt-6"
                  />
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Como Podemos Ajudar?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Oferecemos um serviço completo para auxiliar na recuperação de contas suspensas no Mercado Livre:
                  </p>
                  <Accordion type="single" collapsible className="w-full mt-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Análise do Motivo da Suspensão
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Investigamos a fundo a razão da suspensão da sua conta, analisando as políticas do Mercado Livre
                        e a comunicação recebida.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Elaboração de Defesa e Recursos Administrativos
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Preparamos e enviamos recursos e contestações formais ao Mercado Livre, apresentando os
                        argumentos e provas necessárias para reverter a suspensão.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Negociação e Mediação
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Atuamos na comunicação com o Mercado Livre para buscar uma solução amigável e rápida para o seu
                        caso.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Ações Judiciais (se necessário)
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Em casos onde a via administrativa não é suficiente, ingressamos com as medidas judiciais
                        cabíveis para garantir seus direitos.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-xl font-semibold text-[#1e2c49] hover:text-[#d4b26a]">
                        Orientação para Prevenção
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed">
                        Após a recuperação, oferecemos orientações para que você evite futuras suspensões, garantindo a
                        conformidade com as regras da plataforma.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <h2 className="text-3xl font-bold text-[#1e2c49] mt-10">Por que a suspensão ocorre?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As suspensões de conta no Mercado Livre podem ocorrer por diversos motivos, como:
                  </p>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                    <li>Infrações às políticas de uso da plataforma.</li>
                    <li>Problemas com vendas (cancelamentos, reclamações).</li>
                    <li>Inadimplência ou dívidas com o Mercado Livre.</li>
                    <li>Uso de dados incorretos ou incompletos.</li>
                    <li>Atividades consideradas fraudulentas ou suspeitas.</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    É crucial entender o motivo exato para traçar a melhor estratégia de recuperação.
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1e2c49] mb-6 text-center">Recupere Sua Conta Agora!</h2>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                      Não perca mais tempo e dinheiro. Entre em contato para que possamos analisar seu caso e iniciar o
                      processo de recuperação.
                    </p>
                    <SchedulingForm />
                  </div>
                </FadeIn>
              </div>

              <div className="lg:w-1/3">
                <ServiceSidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
