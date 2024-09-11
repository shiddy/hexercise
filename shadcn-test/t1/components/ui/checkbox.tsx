//import * as React from "react"
import { JSX } from "preact";
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "preact/compat";
//import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Root, Indicator } from "https://esm.sh/@radix-ui/react-checkbox?alias=react:preact/compat,@types/react:preact/compat"
import { Check } from "lucide-react"

//import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "preact/compat";
//import { cva, type VariantProps } from "class-variance-authority"
//import { cn } from "../../lib/utils.ts"
import { useState } from "preact/hooks"

import { cn } from "@/lib/utils.ts"

//const Checkbox = forwardRef<
//  ElementRef<typeof Root>,
//  ComponentPropsWithoutRef<typeof Root>
//>(({ className, ...props }, ref) => (
//  <Root
//    ref={ref}
//    className={cn(
//      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
//      className
//    )}
//    {...props}
//  >
//    <Indicator
//      className={cn("flex items-center justify-center text-current")}
//    >
//      <Check className="h-4 w-4" />
//    </Indicator>
//  </Root>
//))
//Checkbox.displayName = Root.displayName
//
//export { Checkbox }


const Checkbox = ({onCheckedChange, ...props }) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: any) => {
    const checked = event.target.checked;
    setIsChecked(checked);

    // Pass the checked state (true/false) to the function
    onCheckedChange(checked);
  };

  return (
  <div class="items-center align-bottom">
    <label class="flex items-center cursor-pointer relative">
      <input 
        type="checkbox"
        class="peer h-8 w-12 cursor-pointer transition-all appearance-none rounded-lg bg-emerald-100 shadow hover:shadow-md border border-emerald-200 checked:bg-emerald-500 checked:border-emerald-500"
        id="check-custom-style" 
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg>
      </span>
    </label>
  </div>
  );
}

export { Checkbox }


