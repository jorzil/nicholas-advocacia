import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CtaButtonProps {
  href: string
  text: string
  className?: string
}

export function CtaButton({ href, text, className }: CtaButtonProps) {
  return (
    <Link href={href} passHref>
      <Button className={`bg-[#d4b26a] text-[#1e2c49] hover:bg-[#c0a05e] transition-colors ${className}`}>
        {text}
      </Button>
    </Link>
  )
}
