import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Star, Award, CheckCircle, Bot } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ReputationPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Decentralized Reputation System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Build trust through verified reviews and blockchain-secured ratings
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Blockchain-Verified Reviews</CardTitle>
            <CardDescription>
              All reviews are permanently stored on the blockchain for maximum transparency
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Immutable Records</h3>
                <p>
                  Once a review is submitted, it cannot be altered or deleted, ensuring complete honesty and
                  transparency.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Verified Transactions</h3>
                <p>Reviews can only be left by clients and freelancers who have completed actual projects together.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Portable Reputation</h3>
                <p>Your reputation follows you across platforms that integrate with our decentralized system.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Review Verification</CardTitle>
            <CardDescription>Advanced AI systems ensure authentic reviews and prevent manipulation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Fake Review Detection</h3>
                <p>Our AI system analyzes review patterns to identify and flag potentially fraudulent reviews.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Sentiment Analysis</h3>
                <p>AI evaluates the content of reviews to ensure consistency between ratings and written feedback.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Sybil Attack Prevention</h3>
                <p>
                  Advanced identity verification prevents users from creating multiple accounts to manipulate ratings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How Our Rating System Works</CardTitle>
          <CardDescription>A comprehensive approach to measuring freelancer and client reliability</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-lg mb-4">Freelancer Ratings</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Quality of Work</span>
                    <span className="text-sm font-medium">4.8/5</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Communication</span>
                    <span className="text-sm font-medium">4.7/5</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Adherence to Deadlines</span>
                    <span className="text-sm font-medium">4.9/5</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Value for Money</span>
                    <span className="text-sm font-medium">4.6/5</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Client Ratings</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Clear Requirements</span>
                    <span className="text-sm font-medium">4.5/5</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Communication</span>
                    <span className="text-sm font-medium">4.7/5</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Payment Promptness</span>
                    <span className="text-sm font-medium">4.8/5</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Respectful Interaction</span>
                    <span className="text-sm font-medium">4.9/5</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Trust Score Calculation</h3>
            <p className="text-sm mb-2">
              Our proprietary Trust Score combines multiple factors to provide a comprehensive reliability metric:
            </p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Review ratings from completed projects</li>
              <li>Project completion rate</li>
              <li>Communication responsiveness</li>
              <li>Payment history (for clients)</li>
              <li>Dispute resolution outcomes</li>
              <li>Platform activity longevity</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Reputation is Your Most Valuable Asset</h2>
            <p className="text-lg mb-6">
              On RemoteFreelancers, your blockchain-verified reputation follows you everywhere, opening doors to better
              opportunities and higher-paying projects.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

