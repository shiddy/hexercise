"use client"

import { useState, useEffect } from "react"
import { Menu, Home, Search, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between p-4 bg-background border-b">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-lg font-medium">
                Home
              </a>
              <a href="#" className="text-lg font-medium">
                About
              </a>
              <a href="#" className="text-lg font-medium">
                Services
              </a>
              <a href="#" className="text-lg font-medium">
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-bold">My App</h1>
        <div className="w-8" /> {/* Placeholder for right side balance */}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto p-4">
        <p>Your main content goes here.</p>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="flex items-center justify-around p-4 bg-background border-t">
        <Button variant="ghost" size="icon">
          <Home className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-6 w-6" />
          <span className="sr-only">Profile</span>
        </Button>
      </nav>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="max-w-md mx-auto px-4 py-2">
          <h2 className="text-sm font-medium mb-1">Current Progress</h2>
          <Progress value={progress} className="w-full" />
        </div>
      </div>
    </div>
  )
}
