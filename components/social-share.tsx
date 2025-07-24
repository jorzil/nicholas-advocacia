"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Twitter, PhoneIcon as Whatsapp } from "lucide-react"

interface SocialShareProps {
  title: string
  url: string
}

export function SocialShare({ title, url }: SocialShareProps) {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
    )
  }

  const shareOnLinkedin = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      "_blank",
    )
  }

  const shareOnWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}`, "_blank")
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon" onClick={shareOnFacebook} aria-label="Compartilhar no Facebook">
        <Facebook className="h-5 w-5 text-blue-600" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnTwitter} aria-label="Compartilhar no Twitter">
        <Twitter className="h-5 w-5 text-blue-400" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnLinkedin} aria-label="Compartilhar no LinkedIn">
        <Linkedin className="h-5 w-5 text-blue-700" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnWhatsapp} aria-label="Compartilhar no WhatsApp">
        <Whatsapp className="h-5 w-5 text-green-500" />
      </Button>
    </div>
  )
}
