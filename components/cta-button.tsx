import Link from "next/link"
import NextImage from "next/image"

interface CTAButtonProps {
  text: string
  href: string
  whatsapp?: boolean
}

export function CTAButton({ text, href, whatsapp = false }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#d4b26a] px-6 py-3 font-medium text-[#1e2c49] transition-colors hover:bg-[#c4a25a]"
    >
      {text}
      {whatsapp && <NextImage src="/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} />}
    </Link>
  )
}

// Add the missing named export
export { CTAButton as CtaButton }
