"use client"

import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"

interface SocialShareProps {
  url: string
  title: string
}

export function SocialShare({ url, title }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    alert("Link copiado para a área de transferência!")
  }

  return (
    <div className="flex items-center space-x-4 my-6">
      <span className="text-gray-600 text-sm">Compartilhar:</span>
      <div className="flex space-x-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          aria-label="Compartilhar no Facebook"
        >
          <Facebook size={16} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
          aria-label="Compartilhar no Twitter"
        >
          <Twitter size={16} />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
          aria-label="Compartilhar no LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <button
          onClick={copyToClipboard}
          className="p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
          aria-label="Copiar link"
        >
          <LinkIcon size={16} />
        </button>
      </div>
    </div>
  )
}
