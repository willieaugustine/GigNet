import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, FileText, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SmartContractsPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Smart Contract Features</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Secure, transparent, and customizable blockchain-based agreements
        </p>
      </div>

      <Tabs defaultValue="escrow" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="escrow">Escrow Services</TabsTrigger>
          <TabsTrigger value="templates">Contract Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="escrow" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Secure Escrow Services</CardTitle>
              <CardDescription>
                Our blockchain-based escrow system protects both freelancers and clients
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Secure Fund Holding</h3>
                    <p>
                      Client funds are securely held in a smart contract until project milestones are completed and
                      approved.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Milestone-Based Releases</h3>
                    <p>Break projects into milestones with partial payments released upon completion of each phase.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Automated Timelines</h3>
                    <p>Set deadlines for milestones with automatic notifications and dispute resolution options.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Low Escrow Fees</h3>
                    <p>Minimal fees compared to traditional escrow services, with complete transparency.</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">How Our Escrow Works</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Client creates a project and funds the escrow smart contract</li>
                  <li>Freelancer begins work on the agreed milestones</li>
                  <li>Upon milestone completion, freelancer submits work for review</li>
                  <li>Client approves the work, triggering automatic payment release</li>
                  <li>If disputes arise, our decentralized resolution system helps mediate</li>
                </ol>
              </div>

              <div className="flex justify-center">
                <Link href="/smart-contracts/create">
                  <Button>Create Escrow Contract</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customizable Contract Templates</CardTitle>
              <CardDescription>Choose from a variety of pre-built templates or create your own</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">Fixed Price Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      For one-time projects with a predetermined scope and price.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Single or multiple milestones</li>
                      <li>• Clear deliverables</li>
                      <li>• Fixed payment amount</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">Hourly Contract</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      For ongoing work billed by the hour with time tracking.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Integrated time tracking</li>
                      <li>• Weekly payment cycles</li>
                      <li>• Work verification system</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">Retainer Agreement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      For ongoing services with a set monthly payment.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Monthly recurring payments</li>
                      <li>• Defined service scope</li>
                      <li>• Renewal options</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">Milestone-Based</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      For complex projects broken into distinct phases.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Multiple payment milestones</li>
                      <li>• Phase-by-phase approvals</li>
                      <li>• Detailed deliverables</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">Subscription Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      For recurring services with regular billing cycles.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Automated recurring payments</li>
                      <li>• Service level agreements</li>
                      <li>• Cancellation terms</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-dashed hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">Custom Template</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Create your own contract template from scratch.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Full customization</li>
                      <li>• Save for future use</li>
                      <li>• Share with your team</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Template Customization</h3>
                <p className="text-sm">
                  All templates can be customized with additional clauses, specific terms, and custom payment schedules.
                  Once created, your contracts are stored on the blockchain for maximum security and transparency.
                </p>
              </div>

              <div className="flex justify-center">
                <Link href="/smart-contracts/templates">
                  <Button>Browse All Templates</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

