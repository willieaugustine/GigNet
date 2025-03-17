"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"

type Task = {
  id: number
  title: string
  status: "Pending" | "In Progress" | "Completed"
  pickupAddress: string
  deliveryAddress: string
  payment: number
  pickupLatitude: number
  pickupLongitude: number
  deliveryLatitude: number
  deliveryLongitude: number
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Deliver groceries",
    status: "Pending",
    pickupAddress: "123 Market St",
    deliveryAddress: "456 Oak Ave",
    payment: 15,
    pickupLatitude: 40.7128,
    pickupLongitude: -74.006,
    deliveryLatitude: 40.7282,
    deliveryLongitude: -73.9942,
  },
  {
    id: 2,
    title: "Deliver restaurant order",
    status: "In Progress",
    pickupAddress: "789 Bistro Ln",
    deliveryAddress: "101 Pine Rd",
    payment: 12.5,
    pickupLatitude: 40.7589,
    pickupLongitude: -73.9851,
    deliveryLatitude: 40.7489,
    deliveryLongitude: -73.9751,
  },
]

export function TaskMap() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Available Tasks Near You</CardTitle>
        <CardDescription>View task details and accept tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Map placeholder */}
          <div className="bg-muted rounded-md p-6 text-center">
            <div className="flex justify-center space-x-8 mb-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Pickup Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <Navigation className="h-5 w-5 text-secondary" />
                <span>Delivery Location</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Map view is currently unavailable. Please view the task list below.
            </p>
          </div>

          {/* Task list */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Available Tasks</h3>
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`p-4 border rounded-md cursor-pointer transition-colors ${
                  selectedTask?.id === task.id ? "border-primary bg-primary/5" : ""
                }`}
                onClick={() => setSelectedTask(task)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{task.title}</h4>
                    <p className="text-sm text-muted-foreground">From: {task.pickupAddress}</p>
                    <p className="text-sm text-muted-foreground">To: {task.deliveryAddress}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${task.payment.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">{task.status}</p>
                  </div>
                </div>
                {selectedTask?.id === task.id && (
                  <div className="mt-4 pt-4 border-t">
                    <Button
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        alert(`Task ${task.id} accepted!`)
                      }}
                    >
                      Accept Task
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

