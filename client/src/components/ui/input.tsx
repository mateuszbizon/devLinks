import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, error, ...props }, ref) => {
    return (
        <div className="relative">
            {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    {icon}
                </div>
            )}
            <input
                type={type}
                className={cn(
                  `flex w-full rounded-md border ${error ? "border-red" : "border-borders"} bg-white ${icon ? "pl-8" : "pl-4"} pr-4 py-3 body-m text-grey-dark transition-colors placeholder:text-grey/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple disabled:cursor-not-allowed disabled:opacity-50`,
                  className
                )}
                ref={ref}
                {...props}
            />
            {error && (
                <span className="absolute top-1/2 -translate-y-1/2 right-3 text-red body-s bg-white">
                    {error}
                </span>
            )}
        </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
