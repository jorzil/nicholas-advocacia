import { NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { customAlphabet } from "nanoid"

const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 7) // 7-character random string

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const filename = searchParams.get("filename")
  const folder = searchParams.get("folder") || "uploads" // Default to 'uploads' folder

  if (!request.body) {
    return NextResponse.json({ message: "No file provided" }, { status: 400 })
  }

  const blob = await put(`${folder}/${nanoid()}-${filename}`, request.body, {
    access: "public",
  })

  return NextResponse.json(blob)
}
