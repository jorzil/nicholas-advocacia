import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { GoogleReviews } from "@/components/google-reviews"
import { FadeIn } from "@/components/fade-in"
import { CounterAnimation } from "@/components/counter-animation"

export const metadata = {
  title: "Nicholas Advocacia - Especialistas em Direito Imobiliário e Empresarial",
  description:
    "Advogados especializados em Direito Imobiliário e Empresarial. Soluções completas para Usucapião, Regularização de Imóveis, Contratos, Litígios e Recuperação de Contas em Marketplaces. Atendimento online em todo o Brasil.",
  keywords:
    "advogado imobiliário, direito imobiliário, usucapião, regularização de imóveis, contratos imobiliários, litígios imobiliários, incorporação imobiliária, direito condominial, recuperação conta mercado livre, advogado online, Governador Valadares",
  openGraph: {
    title: "Nicholas Advocacia - Especialistas em Direito Imobiliário e Empresarial",
    description:
      "Advogados especializados em Direito Imobiliário e Empresarial. Soluções completas para Usucapião, Regularização de Imóveis, Contratos, Litígios e Recuperação de Contas em Marketplaces.",
    url: "https://www.nicholasadvocacia.com.br",
    images: [
      {
        url: "https://www.nicholasadvocacia.com.br/hero-banner-nn.jpg", // Replace with actual image URL
        alt: "Nicholas Advocacia - Direito Imobiliário",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />

        {/* Stats Section */}
        <section className="bg-[#d4b26a] py-16 md:py-24 text-[#1e2c49]">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <FadeIn direction="up" delay={0.1}>
                <div>
                  <CounterAnimation from={0} to={15} suffix="+" className="text-5xl font-bold mb-2" />
                  <p className="text-lg font-semibold">Anos de Experiência</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div>
                  <CounterAnimation from={0} to={500} suffix="+" className="text-5xl font-bold mb-2" />
                  <p className="text-lg font-semibold">Casos de Sucesso</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <div>
                  <CounterAnimation from={0} to={98} suffix="%" className="text-5xl font-bold mb-2" />
                  <p className="text-lg font-semibold">Satisfação do Cliente</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <BlogSection />
        <TestimonialSection />

        {/* Google Reviews Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <FadeIn direction="up" delay={0.2} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2c49] mb-4">Avaliações no Google</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Veja o que nossos clientes dizem sobre nós no Google.
              </p>
            </FadeIn>
            <GoogleReviews />
          </div>
        </section>

        <ContactSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
