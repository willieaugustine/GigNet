import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { Navigation } from "./components/Navigation"
import { ThemeProvider } from "./components/theme-provider"
import { WebSocketProvider } from "@/contexts/WebSocketContext"
import { AuthProvider } from "./contexts/AuthContext"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"
import { ThemeToggle } from "./components/theme-toggle"
import { Notifications } from "./components/Notifications"
import { AISupportButton } from "./components/AISupportButton"
import { Logo } from "./components/Logo"

const inter = Inter({ subsets: ["latin"] })

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
]

function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by the GigNet team. Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            .
          </p>
        </div>
        <nav className="flex items-center space-x-4 text-sm font-medium">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground/80">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export const metadata = {
  title: "GigNet | Freelance Marketplace",
  description: "Connect with freelancers for remote work and projects on the decentralized marketplace",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <WebSocketProvider>
              <div className="flex flex-col md:flex-row min-h-screen">
                <aside className="w-full md:w-64 border-r bg-background">
                  <div className="p-4 border-b">
                    <Logo />
                  </div>
                  <div className="p-4">
                    <Navigation />
                  </div>
                </aside>
                <div className="flex-1 flex flex-col">
                  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-14 items-center justify-end space-x-4">
                      <ThemeToggle />
                      <Notifications />
                    </div>
                  </header>
                  <main className="flex-1 p-4 md:p-6">{children}</main>
                  <Footer />
                </div>
              </div>
              <AISupportButton />
              <Toaster />
            </WebSocketProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'