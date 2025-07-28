import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import NextImage from "next/image"

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente Usucapião",
      text: "O Dr. Nicholas resolveu meu caso de usucapião com muita competência e agilidade. Recomendo!",
      rating: 5,
      avatar: "/professional-female-lawyer.png", // Placeholder image
    },
    {
      name: "João Santos",
      role: "Cliente Regularização",
      text: "Profissional muito dedicado e conhecedor do direito imobiliário. Conseguiu regularizar meu imóvel sem complicações.",
      rating: 5,
      avatar: "/middle-aged-man-portrait.png", // Placeholder image
    },
    {
      name: "Ana Costa",
      role: "Cliente Contratos",
      text: "Atendimento excepcional! Esclareceu todas as dúvidas sobre meu contrato de compra e venda. Muito profissional!",
      rating: 5,
      avatar: "/middle-aged-woman-portrait.png", // Placeholder image
    },
    {
      name: "Carlos Oliveira",
      role: "Cliente Condominial",
      text: "Advogado competente e honesto. Resolveu minha questão condominial de forma rápida e eficiente. Recomendo!",
      rating: 5,
      avatar: "/professional-lawyer-portrait.png", // Placeholder image
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl font-bold text-[#1e2c49] mb-12 text-center md:text-4xl">O que nossos clientes dizem</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative w-20 h-20 mb-4">
                  <NextImage
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1e2c49] mb-1">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{testimonial.role}</p>
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
