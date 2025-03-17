"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Navigation2, MapPin } from "lucide-react"

interface OrderMapProps {
  driverLocation: {
    lat: number
    lng: number
  }
  deliveryAddress: string
}

export function OrderMap({ driverLocation, deliveryAddress }: OrderMapProps) {
  return (
    <Card className="w-full h-[400px] flex items-center justify-center">
      <CardContent className="text-center p-4 w-full">
        <div className="space-y-6">
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2 text-primary">
              <Navigation2 className="h-6 w-6" />
              <span>Driver Location</span>
            </div>
            <div className="flex items-center space-x-2 text-secondary">
              <MapPin className="h-6 w-6" />
              <span>Delivery Location</span>
            </div>
          </div>

          <div className="border-2 border-dashed border-muted-foreground/20 rounded-md p-6">
            <p className="text-lg font-medium mb-2">Delivery in Progress</p>
            <p className="text-muted-foreground mb-4">Your order is on its way to: {deliveryAddress}</p>
            <div className="flex justify-between items-center max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Navigation2 className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-2 text-sm">Driver</p>
              </div>

              <div className="flex-1 h-1 bg-muted-foreground/20 relative">
                <div className="absolute top-0 left-0 h-1 bg-primary" style={{ width: "60%" }}></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <p className="mt-2 text-sm">Destination</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground">
              Estimated arrival: <span className="font-medium">15-20 minutes</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

