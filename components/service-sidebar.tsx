import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import { FadeIn } from "./fade-in"

export function ServiceSidebar() {
  const services = [
    { name: "Usucapião", href: "/servicos/usucapiao" },
    { name: "Regularização de Imóveis", href: "/servicos/regularizacao-imoveis" },
    { name: "Contratos Imobiliários", href: "/servicos/contratos-imobiliarios" },
    { name: "Litígios Imobiliários", href: "/servicos/litigios-imobiliarios" },
    { name: "Incorporação Imobiliária", href: "/servicos/incorporacao-imobiliaria" },
    { name: "Direito Condominial", href: "/servicos/direito-condominial" },
    { name: "Recuperação de Conta Mercado Livre", href: "/servicos/recuperacao-conta-mercado-livre" },
  ]

  return (
    <aside className="space-y-8">
      <FadeIn>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#1e2c49]">Outros Serviços</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#d4b26a] transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Card className="shadow-lg bg-[#1e2c49] text-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#d4b26a]">Fale Conosco</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-[#d4b26a]" />
              <a href="tel:+5511999999999" className="text-sm hover:underline">
                (11) 99999-9999
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-[#d4b26a]" />
              <a href="mailto:contato@nicholasnascimento.adv.br" className="text-sm hover:underline">
                contato@nicholasnascimento.adv.br
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-[#d4b26a] flex-shrink-0 mt-1" />
              <p className="text-sm">Rua Exemplo, 123, Centro, Cidade - SP</p>
            </div>
            <Link href="/contato" passHref>
              <Button className="w-full bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e] transition-colors mt-4">
                Agendar Consulta
              </Button>
            </Link>
          </CardContent>
        </Card>
      </FadeIn>
    </aside>
  )
}
