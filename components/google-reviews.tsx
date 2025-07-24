"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Loader2 } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

interface Review {
  author_name: string
  author_url: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
}

interface GoogleReviewsData {
  reviews: Review[]
  rating: number
  userRatingsTotal: number
  businessName: string
  place_id: string
  source: "google" | "fallback"
  error?: string
}

export function GoogleReviews() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("/api/google-reviews", {
          cache: "no-store", // Always fetch fresh data
        })
        const data: GoogleReviewsData = await res.json()

        if (data.error) {
          setError(data.error)
          setReviewsData(data) // Still set data, it will contain fallback reviews
          console.error("Google Reviews API error:", data.error)
        } else {
          setReviewsData(data)
        }
      } catch (err) {
        console.error("Failed to fetch Google reviews:", err)
        setError("Falha ao carregar avaliações. Tente novamente mais tarde.")
        // If fetch itself fails, set a default fallback structure
        setReviewsData({
          reviews: [
            {
              author_name: "Cliente Satisfeito 1",
              author_url: "#",
              rating: 5,
              text: "Serviço excepcional e atendimento de primeira! Muito satisfeito com os resultados.",
              relative_time_description: "há 1 dia",
              profile_photo_url: "/placeholder.svg?height=40&width=40&text=C1",
            },
            {
              author_name: "Cliente Satisfeito 2",
              author_url: "#",
              rating: 5,
              text: "Profissionais altamente qualificados e dedicados. Recomendo a todos que buscam excelência.",
              relative_time_description: "há 3 dias",
              profile_photo_url: "/placeholder.svg?height=40&width=40&text=C2",
            },
            {
              author_name: "Cliente Satisfeito 3",
              author_url: "#",
              rating: 5,
              text: "Resolveram meu problema de forma rápida e eficiente. A melhor escolha que fiz!",
              relative_time_description: "há 1 semana",
              profile_photo_url: "/placeholder.svg?height=40&width=40&text=C3",
            },
          ],
          rating: 5.0,
          userRatingsTotal: 3,
          businessName: "Nicholas Nascimento Advocacia (Fallback)",
          place_id: "fallback_id",
          source: "fallback",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-[#d4b26a]" />
        <span className="ml-2 text-gray-600">Carregando avaliações...</span>
      </div>
    )
  }

  if (error && reviewsData?.source === "fallback") {
    console.warn("Displaying fallback reviews due to API error:", error)
  }

  if (!reviewsData || reviewsData.reviews.length === 0) {
    return <div className="text-center py-8 text-gray-600">Não foi possível carregar as avaliações no momento.</div>
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-[#1e2c49]">{reviewsData.rating.toFixed(1)}</span>
          <div className="flex">{renderStars(Math.round(reviewsData.rating))}</div>
        </div>
        <p className="text-gray-600 text-lg">Baseado em {reviewsData.userRatingsTotal} avaliações no Google</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsData.reviews.slice(0, 6).map((review, index) => (
          <FadeIn key={index} delay={0.1 * index}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={review.profile_photo_url || "/placeholder.svg"} alt={review.author_name} />
                    <AvatarFallback>{review.author_name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-[#1e2c49]">{review.author_name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="flex mr-1">{renderStars(review.rating)}</div>
                      <span>{review.relative_time_description}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic flex-grow">"{review.text}"</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
      {reviewsData.source === "fallback" && (
        <div className="mt-8 text-center text-sm text-red-500">
          * As avaliações exibidas são dados de exemplo. A integração com a API do Google Places não está ativa ou
          falhou.
        </div>
      )}
      <div className="mt-8 text-center">
        <a
          href={`https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-[#d4b26a] px-6 py-3 text-base font-medium text-[#1e2c49] shadow transition-colors hover:bg-[#c0a05e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4b26a]"
        >
          Ver todas as avaliações no Google
        </a>
      </div>
    </div>
  )
}

const GOOGLE_PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJce_wa8KB14YR_G9vPWnPzkA" // Default to a known ID if not set
