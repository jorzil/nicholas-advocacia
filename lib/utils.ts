import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, "") // Remove HTML tags
  const wordCount = text.split(/\s+/).length
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute)
  return `${readTimeMinutes} min de leitura`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function generateExcerpt(htmlContent: string, maxLength = 150): string {
  const text = htmlContent.replace(/<[^>]*>/g, "") // Remove HTML tags
  if (text.length <= maxLength) {
    return text
  }
  return text.substring(0, text.lastIndexOf(" ", maxLength)) + "..."
}
