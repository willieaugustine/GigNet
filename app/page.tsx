import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Shield, Coins, Star, Zap } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f8FlHL6hkYDoAPhWYDx2qTdtJv5Aso.png"
            alt="GigNet Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">Welcome to GigNet</h1>
        <p className="text-xl mb-8 max-w-2xl text-muted-foreground">
          Connect with freelancers for remote work, projects, and tasks through a decentralized marketplace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/signup">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="px-8">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Explanation */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center">
            Decentralized Freelance Market: A New Era of Work
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed mb-8">
            The decentralized freelance market is transforming the way freelancers and businesses connect by eliminating
            intermediaries, reducing transaction costs, and ensuring secure, transparent contracts. Unlike traditional
            platforms that charge high fees and control payments, GigNet operates on blockchain technology, giving
            freelancers full ownership of their work and earnings.
          </p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">Key Features of GigNet</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Smart Contracts for Trust & Security</h3>
                  <p>Automate payments and agreements, ensuring fair compensation.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Lower Fees</h3>
                  <p>No middlemen, meaning freelancers and clients save more.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Global Access</h3>
                  <p>Work with anyone, anywhere, without restrictions.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Decentralized Reputation System</h3>
                  <p>Verified reviews stored on the blockchain for credibility.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Crypto Payments</h3>
                  <p>Fast, borderless transactions with minimal fees.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ready to Join the Future of Work?</h2>
        <p className="text-lg mb-6">Experience the freedom, security, and efficiency of decentralized freelancing.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup">
            <Button variant="secondary" size="lg">
              Sign Up Now
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              size="lg"
            >
              How It Works
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

