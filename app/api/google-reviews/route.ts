import { NextResponse } from "next/server"

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  if (!placeId || !apiKey) {
    console.error("GOOGLE_PLACE_ID or GOOGLE_PLACES_API_KEY is not set.")
    return NextResponse.json({ message: "API keys for Google Places are not configured." }, { status: 500 })
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
  console.log("Attempting to fetch Google Reviews from URL:", url) // Log the full URL

  try {
    const response = await fetch(url)
    const data = await response.json()

    console.log("Google Places API raw response:", JSON.stringify(data, null, 2)) // Log raw response

    if (data.status !== "OK") {
      console.error("Google Places API status:", data.status, "Error message:", data.error_message)
      // Provide a more specific error message based on Google's status
      let errorMessage = "Failed to fetch Google reviews."
      if (data.status === "NOT_FOUND") {
        errorMessage = "Google Place ID not found or invalid. Please check GOOGLE_PLACE_ID."
      } else if (data.status === "INVALID_REQUEST") {
        errorMessage = "Invalid request to Google Places API. Check API key or parameters."
      } else if (data.status === "REQUEST_DENIED") {
        errorMessage = "Google Places API request denied. Check API key permissions or billing."
      }
      return NextResponse.json({ message: errorMessage, googleStatus: data.status }, { status: 500 })
    }

    // Filter out reviews without text content if necessary, or just return all
    const reviews = data.result.reviews || []
    return NextResponse.json(reviews)
  } catch (error) {
    console.error("Error fetching Google reviews:", error)
    return NextResponse.json(
      { message: "An unexpected error occurred while fetching Google reviews." },
      { status: 500 },
    )
  }
}
