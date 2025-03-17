import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative h-8 w-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f8FlHL6hkYDoAPhWYDx2qTdtJv5Aso.png"
          alt="GigNet Logo"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <span className="font-bold text-xl">GigNet</span>
    </Link>
  )
}

