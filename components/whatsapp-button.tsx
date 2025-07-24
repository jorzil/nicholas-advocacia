import Link from "next/link"
import Image from "next/image"

export function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999" // Default number

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Image src="/whatsapp-icon-new.png" alt="WhatsApp" width={48} height={48} className="w-12 h-12" />
    </Link>
  )
}
