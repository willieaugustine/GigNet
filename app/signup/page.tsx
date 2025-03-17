"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, ArrowLeft, Briefcase, User, Building2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    name: "",
    phone: "",
    skills: [],
    bio: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRoleChange = (value: string) => {
    setFormData({ ...formData, role: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 4) {
      setStep(step + 1)
    } else {
      console.log("Form submitted", formData)
      // Handle form submission
    }
  }

  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f8FlHL6hkYDoAPhWYDx2qTdtJv5Aso.png"
          alt="GigNet Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <Tabs defaultValue="signup" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="demo">Try Demo</TabsTrigger>
        </TabsList>

        <TabsContent value="signup" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="space-y-2">
                <CardTitle>Create Your GigNet Account</CardTitle>
                <CardDescription>
                  Join the decentralized freelance revolution in {totalSteps} easy steps
                </CardDescription>
              </div>
              <Progress value={progress} className="h-2 mt-4" />
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-primary">
                      <CheckCircle className="h-5 w-5" />
                      <h3 className="text-lg font-medium">Account Information</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          placeholder="Create a secure password"
                        />
                        <p className="text-sm text-muted-foreground">
                          Password must be at least 8 characters with a mix of letters, numbers, and symbols
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-primary">
                      <CheckCircle className="h-5 w-5" />
                      <h3 className="text-lg font-medium">Choose Your Role</h3>
                    </div>
                    <div className="space-y-4">
                      <RadioGroup
                        value={formData.role}
                        onValueChange={handleRoleChange}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="freelancer" id="freelancer" className="mt-1" />
                            <div>
                              <Label htmlFor="freelancer" className="text-base font-medium flex items-center">
                                <Briefcase className="h-5 w-5 mr-2" /> Freelancer
                              </Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                Offer your skills and services to clients worldwide
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="client" id="client" className="mt-1" />
                            <div>
                              <Label htmlFor="client" className="text-base font-medium flex items-center">
                                <User className="h-5 w-5 mr-2" /> Client
                              </Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                Hire talented freelancers for your projects
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="agency" id="agency" className="mt-1" />
                            <div>
                              <Label htmlFor="agency" className="text-base font-medium flex items-center">
                                <Building2 className="h-5 w-5 mr-2" /> Agency
                              </Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                Manage a team of freelancers and handle multiple projects
                              </p>
                            </div>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-primary">
                      <CheckCircle className="h-5 w-5" />
                      <h3 className="text-lg font-medium">Personal Information</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number (optional)"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          className="w-full min-h-[100px] p-2 border rounded-md"
                          placeholder="Tell us a bit about yourself or your business"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-primary">
                      <CheckCircle className="h-5 w-5" />
                      <h3 className="text-lg font-medium">Review & Confirm</h3>
                    </div>
                    <div className="space-y-4 border rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium">Account</h4>
                          <p className="text-sm text-muted-foreground">{formData.email}</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Role</h4>
                          <p className="text-sm text-muted-foreground capitalize">{formData.role}</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Name</h4>
                          <p className="text-sm text-muted-foreground">{formData.name}</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <p className="text-sm text-muted-foreground">{formData.phone || "Not provided"}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">Bio</h4>
                        <p className="text-sm text-muted-foreground">{formData.bio || "Not provided"}</p>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-center">
                          <input type="checkbox" id="terms" className="mr-2" required />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the{" "}
                            <Link href="/terms" className="text-primary hover:underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-primary hover:underline">
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)} className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>
              )}
              {step === 1 && <div></div>}
              <Button onClick={handleSubmit} className="flex items-center">
                {step < totalSteps ? (
                  <>
                    Next <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  "Complete Sign Up"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="demo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Try GigNet Demo</CardTitle>
              <CardDescription>Explore our platform features without creating an account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our interactive demo lets you experience the key features of GigNet:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Freelancer Experience</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Try creating a profile, browsing projects, and simulating contract agreements.
                  </p>
                  <Link href="/demo/freelancer">
                    <Button variant="outline" className="w-full">
                      Try Freelancer Demo
                    </Button>
                  </Link>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Client Experience</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience posting projects, reviewing proposals, and managing contracts.
                  </p>
                  <Link href="/demo/client">
                    <Button variant="outline" className="w-full">
                      Try Client Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> The demo environment uses simulated data and transactions. No blockchain
                  interactions or real payments are processed in demo mode.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

