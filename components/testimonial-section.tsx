import NextImage from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { GoogleReviews } from "@/components/google-reviews"

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Maria S.",
      role: "Cliente Usucapião",
      image: "/middle-aged-woman-portrait.png",
      rating: 5,
      text: "O Dr. Nicholas foi fundamental para regularizar meu imóvel. Um processo que parecia impossível se tornou simples e rápido com a assessoria dele. Recomendo demais!",
    },
    {
      name: "João P.",
      role: "Cliente Contratos",
      image: "/middle-aged-man-portrait.png",
      rating: 5,
      text: "Precisei de ajuda com um contrato de compra e venda e a equipe foi extremamente atenciosa e profissional. Me senti seguro em cada etapa. Excelente trabalho!",
    },
    {
      name: "Ana L.",
      role: "Cliente Litígios",
      image: "/professional-female-lawyer.png",
      rating: 5,
      text: "Tive um problema sério com um vizinho e o escritório Nicholas Advocacia resolveu tudo com muita competência e agilidade. Sou muito grata pelo suporte.",
    },
  ]

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
        />,
      )
    }
    return stars
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e2c49] mb-8">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
            Veja as avaliações de quem já confiou em nossos serviços e alcançou seus objetivos.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <NextImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mb-4 border-2 border-[#d4b26a]"
                  />
                  <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                  <p className="text-gray-700 italic mb-4 flex-grow">"{testimonial.text}"</p>
                  <h3 className="font-bold text-[#1e2c49]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        <GoogleReviews />
      </div>
    </section>
  )
}
