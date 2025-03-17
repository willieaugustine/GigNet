import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Lock, DollarSign, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f8FlHL6hkYDoAPhWYDx2qTdtJv5Aso.png"
            alt="GigNet Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">About GigNet</h1>
        <p className="text-xl text-muted-foreground">Building the future of decentralized freelancing</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Who We Are</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            We are a team of innovators, developers, and freelancers who believe in the power of decentralization to
            create a fair, transparent, and efficient freelance economy. Our platform removes traditional barriers,
            allowing freelancers to work freely, earn fairly, and build long-term careers without limitations.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              To redefine freelancing by creating an ecosystem where talent and opportunity connect seamlessly through
              blockchain technology.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              A borderless, decentralized future where freelancers have full control over their work, earnings, and
              reputation.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Why Choose Us?</CardTitle>
          <CardDescription>The GigNet advantage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Freedom</h3>
                <p>Work on your own terms, with no platform restrictions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Security</h3>
                <p>Blockchain ensures transparency and secure transactions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Fair Payments</h3>
                <p>No hidden fees, just direct payments for your work.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Global Opportunities</h3>
                <p>Connect with clients from around the world without restrictions.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join the Decentralized Freelance Revolution</h2>
            <p className="text-lg mb-6">Experience the future of work with GigNet</p>
            <div className="flex justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-md bg-background text-primary font-medium px-6 py-3 hover:bg-accent"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

