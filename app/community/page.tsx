import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, MessageSquare, Bot, HelpCircle, BookOpen, Award, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function CommunityPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Community & Support</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow freelancers and get help when you need it
        </p>
      </div>

      <Tabs defaultValue="forum" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="forum">Community Forum</TabsTrigger>
          <TabsTrigger value="support">AI & Human Support</TabsTrigger>
        </TabsList>

        <TabsContent value="forum" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Freelancer Community Forum</CardTitle>
              <CardDescription>Connect, learn, and grow with fellow freelancers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Networking Opportunities</h3>
                    <p>Connect with other freelancers for collaboration, referrals, and knowledge sharing.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Learning Resources</h3>
                    <p>Access tutorials, guides, and best practices shared by experienced community members.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Discussion Boards</h3>
                    <p>Participate in topic-specific discussions about freelancing, blockchain, and more.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Recognition Programs</h3>
                    <p>Earn badges and rewards for your contributions to the community.</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Popular Discussion Categories</h3>
                </div>
                <div className="divide-y">
                  <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Getting Started</h4>
                        <p className="text-sm text-muted-foreground">Tips and guides for new freelancers</p>
                      </div>
                    </div>
                    <Badge>324 topics</Badge>
                  </div>

                  <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 text-green-800 p-2 rounded-full">
                        <Coins className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Crypto & Payments</h4>
                        <p className="text-sm text-muted-foreground">Discussions about blockchain payments</p>
                      </div>
                    </div>
                    <Badge>189 topics</Badge>
                  </div>

                  <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 text-purple-800 p-2 rounded-full">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Collaboration Opportunities</h4>
                        <p className="text-sm text-muted-foreground">Find partners for projects</p>
                      </div>
                    </div>
                    <Badge>156 topics</Badge>
                  </div>

                  <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="bg-yellow-100 text-yellow-800 p-2 rounded-full">
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Help & Troubleshooting</h4>
                        <p className="text-sm text-muted-foreground">Get assistance with platform issues</p>
                      </div>
                    </div>
                    <Badge>278 topics</Badge>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Recent Discussions</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Best practices for smart contract escrow?</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Posted by John D.</span>
                        <span className="mx-2">•</span>
                        <span>2 hours ago</span>
                        <span className="mx-2">•</span>
                        <span>12 replies</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">How to handle international tax implications?</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Posted by Sarah M.</span>
                        <span className="mx-2">•</span>
                        <span>Yesterday</span>
                        <span className="mx-2">•</span>
                        <span>24 replies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Link href="/community/forum">
                  <Button>Join the Community</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI & Human Support</CardTitle>
              <CardDescription>Get help when you need it, day or night</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">AI Support Assistant</h3>
                    <p>Get instant answers to common questions and platform guidance 24/7.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Human Support Team</h3>
                    <p>Connect with our expert support team for complex issues and personalized assistance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dispute Resolution</h3>
                    <p>Fair and transparent process for resolving disagreements between parties.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Knowledge Base</h3>
                    <p>Comprehensive documentation, tutorials, and FAQs to help you navigate the platform.</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted p-4 border-b">
                  <h3 className="font-semibold">AI Support Chat Demo</h3>
                </div>
                <div className="p-4 space-y-4 bg-background">
                  <div className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted p-3 rounded-lg">
                      <p>Hello! I'm your RemoteFreelancers AI assistant. How can I help you today?</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <p>How do I set up an escrow payment for my new project?</p>
                    </div>
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted p-3 rounded-lg">
                      <p>
                        To set up an escrow payment:
                        <br />
                        1. Go to your project dashboard
                        <br />
                        2. Click "Payments" &gt; "Set up Escrow"
                        <br />
                        3. Enter the milestone details and amount
                        <br />
                        4. Select your preferred currency
                        <br />
                        5. Review and confirm
                        <br />
                        <br />
                        Would you like me to guide you through this process step by step?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Type your question here..."
                      className="flex-1 p-2 border rounded-md"
                      disabled
                    />
                    <Button disabled>Send</Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    This is a demo. Try the real AI assistant in your account.
                  </p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Support Options</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="border bg-background rounded-lg p-4">
                    <h4 className="font-medium mb-2">AI Chat Support</h4>
                    <p className="text-sm text-muted-foreground mb-2">Available 24/7 for instant assistance</p>
                    <Link href="/support/chat">
                      <Button variant="outline" size="sm" className="w-full">
                        Start Chat
                      </Button>
                    </Link>
                  </div>

                  <div className="border bg-background rounded-lg p-4">
                    <h4 className="font-medium mb-2">Human Support</h4>
                    <p className="text-sm text-muted-foreground mb-2">Available Mon-Fri, 9am-5pm UTC</p>
                    <Link href="/support/ticket">
                      <Button variant="outline" size="sm" className="w-full">
                        Submit Ticket
                      </Button>
                    </Link>
                  </div>

                  <div className="border bg-background rounded-lg p-4">
                    <h4 className="font-medium mb-2">Knowledge Base</h4>
                    <p className="text-sm text-muted-foreground mb-2">Browse articles and tutorials</p>
                    <Link href="/support/knowledge-base">
                      <Button variant="outline" size="sm" className="w-full">
                        View Articles
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

