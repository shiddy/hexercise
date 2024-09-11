import { useState, useEffect } from "preact/compat"
import { Menu, Home, Search, Bell, User } from "https://esm.sh/lucide-react?alias=react:preact/compat,@types/react:preact/compat"
import { Button } from "@/components/ui/button.tsx"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx"

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-background border-t flex items-center justify-between p-2">
      <div className="w-8" />
      <h1 className="text-lg font-bold">Hexercise</h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">
              Toggle menu
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-lg font-medium">
              Mesocycles
            </a>
            <a href="#" className="text-lg font-medium">
              Stats
            </a>
            <a href="#" className="text-lg font-medium">
              Contact
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
