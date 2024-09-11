import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Button } from "@/components/ui/button.tsx"

import Set from "../islands/Set.tsx";

export default function Home() {
  return (
    <>
    <div className="flex flex-col h-screen">
    <div class="px-4 pt-8 mx-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center mt-14">
        <Card className="w-full max-w-3xl mx-auto">
          <div class="flex flex-row justify-between">
            <CardHeader>
              <div className="flex justify-between">
              <div>
              <CardTitle>Lat Pulldown</CardTitle>
              <CardDescription>Cable</CardDescription>

              </div>
              </div>
            </CardHeader>
              <div class="flex flex-row justify-self-end">
                  <div class="mr-0
                    border-t-[2.5rem] border-t-emerald-500 opacity-75
                    border-l-[0.5rem] border-l-transparent">
                  </div>
                  <div className="h-fit bg-emerald-500 text-white py-2 px-4 ml-0 shadow-md rounded-tr-lg opacity-75">
                    <h2 className="text-lg font-bold">BACK</h2>
                  </div>
              </div>
          </div>
          <CardContent className="p-4">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <Label htmlFor="weight" className="mb-1 block text-sm">Weight</Label>
                <Label htmlFor="reps" className="mb-1 block text-sm">Reps</Label>
                <div/>
              </div>
              <Set 
                weight={140}
                reps={20}
              />
              <Set 
                weight={140}
                reps={20}
              />
              <Set 
                weight={140}
                reps={20}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-3xl mx-auto mt-3">
          <div class="flex flex-row justify-between">
            <CardHeader>
              <div className="flex justify-between">
              <div>
              <CardTitle>Weighted Dip</CardTitle>
              <CardDescription>Bodyweight Loaded</CardDescription>

              </div>
              </div>
            </CardHeader>
              <div class="flex flex-row justify-self-end">
                  <div class="mr-0
                    border-t-[2.5rem] border-t-emerald-500 opacity-75
                    border-l-[0.5rem] border-l-transparent">
                  </div>
                  <div className="h-fit bg-emerald-500 text-white py-2 px-4 ml-0 shadow-md rounded-tr-lg opacity-75">
                    <h2 className="text-lg font-bold">Triceps</h2>
                  </div>
              </div>
          </div>
          <CardContent className="p-4">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <Label htmlFor="weight" className="mb-1 block text-sm">Weight</Label>
                <Label htmlFor="reps" className="mb-1 block text-sm">Reps</Label>
                <div/>
              </div>
              <Set 
                weight={20}
                reps={13} 
              />
              <Set 
                weight={20}
                reps={12}
              />
              <Set 
                weight={20}
                reps={12}
              />
              <Set 
                weight={20}
                reps={10}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-3xl mx-auto mt-3">
          <div class="flex flex-row justify-between">
            <CardHeader>
              <div className="flex justify-between">
              <div>
              <CardTitle>Bench Press (Flat)</CardTitle>
              <CardDescription>Dumbbell</CardDescription>

              </div>
              </div>
            </CardHeader>
              <div class="flex flex-row justify-self-end">
                  <div class="mr-0
                    border-t-[2.5rem] border-t-emerald-500 opacity-75
                    border-l-[0.5rem] border-l-transparent">
                  </div>
                  <div className="h-fit bg-emerald-500 text-white py-2 px-4 ml-0 shadow-md rounded-tr-lg opacity-75">
                    <h2 className="text-lg font-bold">Chest</h2>
                  </div>
              </div>
          </div>
          <CardContent className="p-4">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <Label htmlFor="weight" className="mb-1 block text-sm">Weight</Label>
                <Label htmlFor="reps" className="mb-1 block text-sm">Reps</Label>
                <div/>
              </div>
              <Set 
                weight={50}
                reps={13} 
              />
              <Set 
                weight={50}
                reps={12}
              />
              <Set 
                weight={50}
                reps={12}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-3xl mx-auto mt-3">
          <div class="flex flex-row justify-between">
            <CardHeader>
              <div className="flex justify-between">
              <div>
              <CardTitle>Sissy Squat</CardTitle>
              <CardDescription>Bodyweight</CardDescription>

              </div>
              </div>
            </CardHeader>
              <div class="flex flex-row justify-self-end">
                  <div class="mr-0
                    border-t-[2.5rem] border-t-emerald-500 opacity-75
                    border-l-[0.5rem] border-l-transparent">
                  </div>
                  <div className="h-fit bg-emerald-500 text-white py-2 px-4 ml-0 shadow-md rounded-tr-lg opacity-75">
                    <h2 className="text-lg font-bold">Quads</h2>
                  </div>
              </div>
          </div>
          <CardContent className="p-4">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <Label htmlFor="weight" className="mb-1 block text-sm">Weight</Label>
                <Label htmlFor="reps" className="mb-1 block text-sm">Reps</Label>
                <div/>
              </div>
              <Set 
                weight={0}
                reps={9} 
              />
              <Set 
                weight={0}
                reps={9}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-3xl mx-auto mt-3 mb-40">
          <div class="flex flex-row justify-between">
            <CardHeader>
              <div className="flex justify-between">
              <div>
              <CardTitle>Lateral Raises</CardTitle>
              <CardDescription>Cable</CardDescription>

              </div>
              </div>
            </CardHeader>
              <div class="flex flex-row justify-self-end">
                  <div class="mr-0
                    border-t-[2.5rem] border-t-emerald-500 opacity-75
                    border-l-[0.5rem] border-l-transparent">
                  </div>
                  <div className="h-fit bg-emerald-500 text-white py-2 px-4 ml-0 shadow-md rounded-tr-lg opacity-75">
                    <h2 className="text-lg font-bold">Shoulders</h2>
                  </div>
              </div>
          </div>
          <CardContent className="p-4">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <Label htmlFor="weight" className="mb-1 block text-sm">Weight</Label>
                <Label htmlFor="reps" className="mb-1 block text-sm">Reps</Label>
                <div/>
              </div>
              <Set 
                weight={20}
                reps={13} 
              />
              <Set 
                weight={20}
                reps={12}
              />
              <Set 
                weight={20}
                reps={12}
              />
              <Set 
                weight={20}
                reps={10}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
    </>
  );
}
