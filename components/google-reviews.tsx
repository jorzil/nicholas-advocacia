"use client"

import { useState, useEffect } from "react"
import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import NextImage from "next/image"

interface Review {
  author_name: string
  rating: number
  text: string
  time: number // Unix timestamp in seconds
  profile_photo_url?: string
}

interface GoogleReviewsData {
  reviews: Review[]
  rating: number
  user_ratings_total: number
  name?: string // Optional, as it might not always be returned by API or fallback
  place_id: string
  source: string
}

export function GoogleReviews() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/google-reviews")
        const data = await response.json()
        setReviewsData(data)
      } catch (error) {
        console.error("Error fetching reviews in client component:", error)
        // Optionally set a state to show an error message to the user
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const handleReviewClick = () => {
    // Track review click event for Google Analytics (gtag)
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "google_review_click", {
        event_category: "engagement",
        event_label: "write_review_button",
      })
    }

    // Track for Google Tag Manager (dataLayer)
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: "google_review_click_gtm", // Use a distinct event name for GTM
        event_category: "engagement",
        event_action: "click",
        event_label: "write_review_button",
      })
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        aria-hidden="true"
      />
    ))
  }

  const formatDate = (timestamp: number) => {
    // The API returns Unix timestamp in seconds, Date constructor expects milliseconds
    return new Date(timestamp * 1000).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <section className="py-16 bg-gray-50" aria-labelledby="reviews-heading">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!reviewsData || reviewsData.reviews.length === 0) {
    return null // Render nothing if no reviews data or empty reviews array
  }

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="reviews-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="reviews-heading" className="text-3xl font-bold text-[#1e2c49] mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex" role="img" aria-label={`${reviewsData.rating} de 5 estrelas`}>
              {renderStars(Math.round(reviewsData.rating))}
            </div>
            <span className="text-lg font-semibold text-gray-700">{reviewsData.rating.toFixed(1)}</span>
            <span className="text-gray-600">({reviewsData.user_ratings_total} avaliações)</span>
          </div>
          <p className="text-gray-600 mb-6">
            Avaliações verificadas do Google para {reviewsData.name || "nosso escritório"}
          </p>
          <a
            href={`https://search.google.com/local/writereview?placeid=${reviewsData.place_id}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleReviewClick}
            className="inline-flex items-center gap-2 bg-[#1e2c49] text-white px-6 py-3 rounded-md hover:bg-[#2a3c5e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4b26a]"
            aria-label="Escrever uma avaliação no Google"
          >
            Escrever Avaliação
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reviewsData.reviews.slice(0, 6).map((review, index) => (
            <article key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {review.profile_photo_url ? (
                  <NextImage
                    src={review.profile_photo_url || "/placeholder.svg"}
                    alt={`Foto de perfil de ${review.author_name}`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12"
                  />
                ) : (
                  <div className="w-12 h-12 bg-[#1e2c49] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {review.author_name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
                  <div className="flex items-center gap-1">
                    <div className="flex" role="img" aria-label={`${review.rating} de 5 estrelas`}>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-3 line-clamp-4">{review.text}</p>
              <time className="text-sm text-gray-500" dateTime={new Date(review.time * 1000).toISOString()}>
                {formatDate(review.time)}
              </time>
            </article>
          ))}
        </div>

        {reviewsData.source === "fallback" && (
          <p className="text-center text-sm text-gray-500 mt-8">* Avaliações representativas dos nossos clientes</p>
        )}

        {reviewsData.place_id && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-[#1e2c49] text-[#1e2c49] hover:bg-[#1e2c49] hover:text-white bg-transparent"
              onClick={() => window.open(`https://www.google.com/maps?cid=${reviewsData.place_id}`, "_blank")}
            >
              Ver Todas as Avaliações no Google
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
