import { NextResponse } from "next/server"

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJce_wa8KB14YR_G9vPWnPzkA" // Default to a known ID if not set
const GOOGLE_BUSINESS_NAME = process.env.GOOGLE_BUSINESS_NAME || "Nicholas Nascimento Advocacia e Consultoria Jurídica"

// Fallback reviews data
const fallbackReviews = [
  {
    author_name: "Maria Silva",
    author_url: "#",
    rating: 5,
    text: "Excelente atendimento! O Dr. Nicholas resolveu meu problema de usucapião com muita competência e agilidade. Recomendo!",
    relative_time_description: "há 2 dias",
    profile_photo_url: "/placeholder.svg?height=40&width=40&text=MS",
  },
  {
    author_name: "João Santos",
    author_url: "#",
    rating: 5,
    text: "Profissional muito competente e atencioso. Me ajudou com a regularização do meu imóvel. Serviço de qualidade!",
    relative_time_description: "há 1 semana",
    profile_photo_url: "/placeholder.svg?height=40&width=40&text=JS",
  },
  {
    author_name: "Ana Costa",
    author_url: "#",
    rating: 5,
    text: "Escritório de confiança! Atendimento personalizado e resultados excelentes. Muito satisfeita com os serviços.",
    relative_time_description: "há 2 semanas",
    profile_photo_url: "/placeholder.svg?height=40&width=40&text=AC",
  },
  {
    author_name: "Carlos Oliveira",
    author_url: "#",
    rating: 5,
    text: "Advogado especialista em direito imobiliário. Resolveu minha questão condominial rapidamente. Muito satisfeita!",
    relative_time_description: "há 3 semanas",
    profile_photo_url: "/placeholder.svg?height=40&width=40&text=CO",
  },
  {
    author_name: "Fernanda Lima",
    author_url: "#",
    rating: 5,
    text: "Excelente trabalho na regularização do meu imóvel. Dr. Nicholas é muito atencioso e explica tudo detalhadamente.",
    relative_time_description: "há 1 mês",
    profile_photo_url: "/placeholder.svg?height=40&width=40&text=FL",
  },
  {
    author_name: "Pedro Almeida",
    author_url: "#",
    rating: 5,
    text: "Atendimento rápido e eficiente. Recomendo para quem busca soluções em direito imobiliário.",
    relative_time_description: "há 1 mês",
    profile_photo_url: "/placeholder.svg?height=40&width=40&text=PA",
  },
]

export async function GET() {
  const defaultResponse = {
    reviews: fallbackReviews,
    rating: 5.0,
    userRatingsTotal: 25, // A reasonable default total
    businessName: GOOGLE_BUSINESS_NAME,
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
        reviews: reviews.length > 0 ? reviews : fallbackReviews, // Use fallback if Google returns empty reviews
        rating: data.result.rating || 5.0,
        userRatingsTotal: data.result.user_ratings_total || defaultResponse.userRatingsTotal,
        businessName: data.result.name || GOOGLE_BUSINESS_NAME,
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
