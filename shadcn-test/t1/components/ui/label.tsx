import { JSX } from "preact";
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "preact/compat";
import { Root } from "https://esm.sh/@radix-ui/react-label?alias=react:preact/compat,@types/react:preact/compat"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils.ts"


const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = Root.displayName

export { Label }
