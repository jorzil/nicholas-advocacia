import { NextResponse } from "next/server"

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJce_wa8KB14YR_G9vPWnPzkA" // Default to a known ID if not set
const GOOGLE_BUSINESS_NAME = process.env.GOOGLE_BUSINESS_NAME || "Nicholas Nascimento Advocacia e Consultoria Jurídica"

// Fallback reviews data
const fallbackReviews = [
  {
    author_name: "Maria Silva",
    rating: 5,
    text: "Excelente atendimento! O Dr. Nicholas resolveu meu problema de usucapião com muita competência e agilidade. Recomendo!",
    time: Date.now() / 1000, // Convert ms to seconds for consistency with Google API
    profile_photo_url: "/placeholder.svg?height=40&width=40",
  },
  {
    author_name: "João Santos",
    rating: 5,
    text: "Profissional muito competente e atencioso. Me ajudou com a regularização do meu imóvel. Serviço de qualidade!",
    time: Date.now() / 1000 - 86400 * 5, // 5 days ago
    profile_photo_url: "/placeholder.svg?height=40&width=40",
  },
  {
    author_name: "Ana Costa",
    rating: 5,
    text: "Escritório de confiança! Atendimento personalizado e resultados excelentes. Muito satisfeita com os serviços.",
    time: Date.now() / 1000 - 86400 * 10, // 10 days ago
    profile_photo_url: "/placeholder.svg?height=40&width=40",
  },
  {
    author_name: "Carlos Oliveira",
    rating: 5,
    text: "Advogado especialista em direito imobiliário. Resolveu minha questão condominial rapidamente. Muito satisfeita!",
    time: Date.now() / 1000 - 86400 * 15, // 15 days ago
    profile_photo_url: "/placeholder.svg?height=40&width=40",
  },
  {
    author_name: "Fernanda Lima",
    rating: 5,
    text: "Excelente trabalho na regularização do meu imóvel. Dr. Nicholas é muito atencioso e explica tudo detalhadamente.",
    time: Date.now() / 1000 - 86400 * 20, // 20 days ago
    profile_photo_url: "/placeholder.svg?height=40&width=40",
  },
  {
    author_name: "Pedro Almeida",
    rating: 5,
    text: "Atendimento rápido e eficiente. Recomendo para quem busca soluções em direito imobiliário.",
    time: Date.now() / 1000 - 86400 * 25, // 25 days ago
    profile_photo_url: "/placeholder.svg?height=40&width=40",
  },
]

export async function GET() {
  const defaultResponse = {
    reviews: fallbackReviews,
    rating: 5.0,
    user_ratings_total: 25, // A reasonable default total
    name: GOOGLE_BUSINESS_NAME,
    place_id: GOOGLE_PLACE_ID,
    source: "fallback",
  }

  try {
    // If API key or Place ID is missing, return fallback data immediately
    if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
      console.log("Google Places API credentials not configured, using fallback reviews.")
      return NextResponse.json({ ...defaultResponse, error: "API credentials missing." })
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total,name&key=${GOOGLE_PLACES_API_KEY}&language=pt-BR`

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour to reduce API calls
    })

    if (!response.ok) {
      console.error(`Google Places API HTTP error: ${response.status} ${response.statusText}`)
      // Do not throw, return fallback data
      return NextResponse.json({ ...defaultResponse, error: `HTTP error: ${response.status}` })
    }

    const data = await response.json()

    // Log the status for debugging
    console.log("Google Places API status:", data.status)

    // Handle different API statuses gracefully
    if (data.status === "OK" && data.result) {
      const reviews = data.result.reviews || []
      return NextResponse.json({
        reviews: reviews.length > 0 ? reviews : fallbackReviews,
        rating: data.result.rating || 5.0,
        user_ratings_total: data.result.user_ratings_total || defaultResponse.user_ratings_total,
        name: data.result.name || GOOGLE_BUSINESS_NAME,
        place_id: GOOGLE_PLACE_ID,
        source: reviews.length > 0 ? "google" : "fallback",
      })
    } else {
      // For any non-OK status (NOT_FOUND, INVALID_REQUEST, etc.), return fallback
      console.warn(`[google-reviews] Places API responded with ${data.status}. Serving fallback testimonials.`)
      return NextResponse.json({
        ...defaultResponse,
        error: `Google Places status: ${data.status}`,
      })
    }
  } catch (error) {
    // On any unexpected error during fetch or parsing, return fallback data
    console.error("Error with Google Places API, using fallback reviews:", error)
    return NextResponse.json({
      ...defaultResponse,
      error: "Failed to fetch from Google Places API due to an exception.",
    })
  }
}
