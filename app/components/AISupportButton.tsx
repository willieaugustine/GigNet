"use client"

import { useState } from "react"
import { Bot, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AISupportButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg" onClick={() => setIsOpen(true)}>
        <Bot className="h-6 w-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 md:w-96 shadow-lg z-50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md">AI Support Assistant</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="max-h-96 overflow-y-auto space-y-4">
            <div className="flex items-start space-x-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="bg-muted p-3 rounded-lg">
                <p>Hello! I'm your GigNet AI assistant. How can I help you today?</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <p>How do I get started with the platform?</p>
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
                  To get started with GigNet:
                  <br />
                  1. Create an account by signing up
                  <br />
                  2. Complete your profile with skills and experience
                  <br />
                  3. Explore available projects or post your own
                  <br />
                  4. Use smart contracts for secure agreements
                  <br />
                  5. Start working and building your reputation
                  <br />
                  <br />
                  Would you like more details on any of these steps?
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex space-x-2 w-full">
              <input type="text" placeholder="Type your question here..." className="flex-1 p-2 border rounded-md" />
              <Button>Send</Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

