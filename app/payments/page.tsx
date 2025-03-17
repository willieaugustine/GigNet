import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coins, RefreshCw, Clock, CreditCard, Wallet, ArrowDownUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PaymentsPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Flexible Payment Options</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Secure, low-fee payments with multiple currency options
        </p>
      </div>

      <Tabs defaultValue="crypto" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="crypto">Crypto & Fiat Conversions</TabsTrigger>
          <TabsTrigger value="recurring">Recurring Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="crypto" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Crypto & Fiat Payment Options</CardTitle>
              <CardDescription>Flexible payment methods with seamless currency conversion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Multiple Cryptocurrencies</h3>
                    <p>Accept payments in popular cryptocurrencies including Bitcoin, Ethereum, USDC, and more.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Traditional Payment Methods</h3>
                    <p>Support for credit cards, bank transfers, and popular payment processors.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ArrowDownUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Automatic Conversion</h3>
                    <p>Clients can pay in their preferred currency, and freelancers can receive in theirs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Integrated Wallet</h3>
                    <p>Store your earnings securely in our platform wallet or withdraw to external accounts.</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Supported Currencies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Cryptocurrencies</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Bitcoin (BTC)</li>
                      <li>• Ethereum (ETH)</li>
                      <li>• USDC</li>
                      <li>• USDT</li>
                      <li>• DAI</li>
                      <li>• And more...</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Fiat Currencies</h4>
                    <ul className="text-sm space-y-1">
                      <li>• US Dollar (USD)</li>
                      <li>• Euro (EUR)</li>
                      <li>• British Pound (GBP)</li>
                      <li>• Japanese Yen (JPY)</li>
                      <li>• Canadian Dollar (CAD)</li>
                      <li>• And more...</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Payment Methods</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Credit/Debit Cards</li>
                      <li>• Bank Transfers</li>
                      <li>• PayPal</li>
                      <li>• Wise</li>
                      <li>• Crypto Wallets</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Withdrawal Options</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Bank Account</li>
                      <li>• Crypto Wallet</li>
                      <li>• PayPal</li>
                      <li>• Wise</li>
                      <li>• Platform Wallet</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Link href="/payments/setup">
                  <Button>Set Up Payment Methods</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recurring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recurring Payment Solutions</CardTitle>
              <CardDescription>Streamlined payment options for long-term contracts and ongoing work</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Automated Billing Cycles</h3>
                    <p>Set up weekly, bi-weekly, or monthly payment schedules for ongoing contracts.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Retainer Agreements</h3>
                    <p>Create retainer contracts with fixed monthly payments for reserved time or services.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Subscription Management</h3>
                    <p>Easily manage all your recurring payments and subscriptions in one dashboard.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Flexible Cancellation</h3>
                    <p>Set custom cancellation terms and notice periods for recurring contracts.</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Recurring Payment Types</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Fixed Recurring</h4>
                    <p className="text-sm text-muted-foreground mb-2">Same amount charged at regular intervals.</p>
                    <p className="text-sm">Ideal for: Retainers, maintenance contracts, subscriptions</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Variable Recurring</h4>
                    <p className="text-sm text-muted-foreground mb-2">Different amounts based on hours or usage.</p>
                    <p className="text-sm">Ideal for: Hourly contracts with time tracking</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Milestone Recurring</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Regular payments upon completion of defined milestones.
                    </p>
                    <p className="text-sm">Ideal for: Ongoing projects with regular deliverables</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Link href="/payments/recurring">
                  <Button>Set Up Recurring Payments</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

