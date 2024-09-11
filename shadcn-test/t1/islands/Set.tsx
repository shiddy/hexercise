import { useState } from "preact/hooks"
import type { Signal } from "@preact/signals";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Checkbox } from "@/components/ui/checkbox.tsx"

import { useContext } from "preact/compat"
import { Context } from "@/islands/state.tsx";


export default function Set(params) {
  const [weight, setWeight] = useState(params.weight);
  const [reps, setReps] = useState(params.reps);
  // const [a, b] = useState(false);
  const ctx = useContext(Context);

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => prev + 1)
  }

  const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => Math.max(0, prev - 1))
  }

  const addWeight = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => prev + 2.5)
  }

  const subWeight = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => Math.max(0, prev - 2.5))
  }

  return (
        <div className="flex justify-between">
          <div className="flex-1 min-w-[120px]">
            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => subWeight(setWeight)}
                aria-label="Decrease number 1"
                className="px-2"
              >
                -
              </Button>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
                className="w-16 mx-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => addWeight(setWeight)}
                aria-label="Increase number 1"
                className="px-2"
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex-1 min-w-[120px]">
            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDecrement(setReps)}
                aria-label="Decrease number 2"
                className="px-2"
              >
                -
              </Button>
              <Input
                id="reps"
                type="number"
                value={reps}
                onChange={(e) => setReps(parseInt(e.target.value) || 0)}
                className="w-16 mx-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleIncrement(setReps)}
                aria-label="Increase number 2"
                className="px-2"
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              onCheckedChange={(isChecked) => {
                if (isChecked) {
                  ctx.wo_progress.value += 8;
                } else {
                  ctx.wo_progress.value -= 8;
                }
              }}
            />
          </div>
        </div>
  )
}
