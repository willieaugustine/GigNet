"use client"
import { Card, CardContent } from "@/components/ui/card"
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

type MapComponentProps = {
  tasks: Task[]
  selectedTask: Task | null
  setSelectedTask: (task: Task | null) => void
  mapboxToken: string
}

export default function MapComponent({ tasks, selectedTask, setSelectedTask }: MapComponentProps) {
  return (
    <div className="w-full h-[400px] flex flex-col">
      <div className="flex-1 bg-muted rounded-md p-6 flex flex-col items-center justify-center">
        <div className="flex justify-center space-x-8 mb-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Pickup Location</span>
          </div>
          <div className="flex items-center space-x-2">
            <Navigation className="h-5 w-5 text-secondary" />
            <span>Delivery Location</span>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            Map view is currently unavailable. Please use the list below to view available tasks.
          </p>
        </div>

        {selectedTask && (
          <Card className="w-full max-w-md">
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-bold text-lg">{selectedTask.title}</h3>
                <p>
                  <strong>Pickup:</strong> {selectedTask.pickupAddress}
                </p>
                <p>
                  <strong>Delivery:</strong> {selectedTask.deliveryAddress}
                </p>
                <p className="font-semibold">${selectedTask.payment.toFixed(2)}</p>
                <div className="flex justify-between items-center mt-4">
                  <Button variant="outline" onClick={() => setSelectedTask(null)}>
                    Close
                  </Button>
                  <Button onClick={() => alert(`Task ${selectedTask.id} accepted!`)}>Accept Task</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {tasks.map((task) => (
          <Button
            key={task.id}
            variant="outline"
            className="justify-start h-auto py-2 px-3"
            onClick={() => setSelectedTask(task)}
          >
            <div className="text-left">
              <div className="font-medium">{task.title}</div>
              <div className="text-sm text-muted-foreground">${task.payment.toFixed(2)}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

