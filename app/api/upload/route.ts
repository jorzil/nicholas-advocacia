import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const filename = searchParams.get("filename")

  if (!filename) {
    return NextResponse.json({ message: "Filename is required" }, { status: 400 })
  }

  if (!request.body) {
    return NextResponse.json({ message: "Request body is empty" }, { status: 400 })
  }

  try {
    const blob = await put(filename, request.body, {
      access: "public",
    })

    return NextResponse.json(blob)
  } catch (error) {
    console.error("Error uploading blob:", error)
    return NextResponse.json({ message: "Failed to upload file", error: (error as Error).message }, { status: 500 })
  }
}
