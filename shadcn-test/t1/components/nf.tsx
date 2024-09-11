import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Component() {
  const [number1, setNumber1] = useState(5)
  const [number2, setNumber2] = useState(10)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => prev + 1)
  }

  const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => Math.max(0, prev - 1))
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-4">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[120px]">
            <Label htmlFor="number1" className="mb-1 block text-sm">Number 1</Label>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDecrement(setNumber1)}
                aria-label="Decrease number 1"
                className="px-2"
              >
                -
              </Button>
              <Input
                id="number1"
                type="number"
                value={number1}
                onChange={(e) => setNumber1(parseInt(e.target.value) || 0)}
                className="w-12 mx-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleIncrement(setNumber1)}
                aria-label="Increase number 1"
                className="px-2"
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex-1 min-w-[120px]">
            <Label htmlFor="number2" className="mb-1 block text-sm">Number 2</Label>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDecrement(setNumber2)}
                aria-label="Decrease number 2"
                className="px-2"
              >
                -
              </Button>
              <Input
                id="number2"
                type="number"
                value={number2}
                onChange={(e) => setNumber2(parseInt(e.target.value) || 0)}
                className="w-12 mx-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleIncrement(setNumber2)}
                aria-label="Increase number 2"
                className="px-2"
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="confirm" className="text-sm">Confirm</Label>
            <Switch
              id="confirm"
              checked={isConfirmed}
              onCheckedChange={setIsConfirmed}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
