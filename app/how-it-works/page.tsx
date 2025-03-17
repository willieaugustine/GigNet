import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText, Users, Wallet, CheckCircle, Clock } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">How RemoteFreelancers Works</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our decentralized platform connects freelancers and clients through blockchain technology, ensuring
          transparency, security, and efficiency.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold">The RemoteFreelancers Process</h2>

        <div className="relative">
          {/* Process steps with connecting line */}
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-primary/10 p-4 rounded-full z-10">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>1. Create Your Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Sign up and create your profile showcasing your skills, experience, and portfolio. Your reputation
                    and reviews will be stored securely on the blockchain.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-primary/10 p-4 rounded-full z-10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>2. Connect with Clients or Freelancers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Browse projects or talent and connect directly without intermediaries. Our smart matching system
                    helps you find the perfect fit for your needs.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-primary/10 p-4 rounded-full z-10">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>3. Establish Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Create secure, transparent agreements using blockchain-based smart contracts. These automatically
                    enforce payment terms and project milestones.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-primary/10 p-4 rounded-full z-10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>4. Complete the Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Collaborate efficiently through our platform's tools. Track progress, share files, and communicate
                    seamlessly while working on projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-primary/10 p-4 rounded-full z-10">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>5. Get Paid Securely</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Receive payment directly through cryptocurrency transactions with minimal fees. Smart contracts
                    ensure you get paid promptly when milestones are completed.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-primary/10 p-4 rounded-full z-10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>6. Build Your Reputation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    After project completion, both parties leave verified reviews that are permanently stored on the
                    blockchain, building your decentralized reputation over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Card className="bg-muted">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">The Blockchain Advantage</h3>
            <p>
              By leveraging blockchain technology, RemoteFreelancers eliminates the need for traditional intermediaries,
              reducing fees and increasing transparency. Smart contracts automatically enforce agreements, ensuring both
              freelancers and clients are protected throughout the process.
            </p>
            <p>
              All transactions and reputation data are stored on a decentralized ledger, creating an immutable record
              that builds trust in the ecosystem.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Experience Decentralized Freelancing?</h2>
        <Link href="/signup">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

