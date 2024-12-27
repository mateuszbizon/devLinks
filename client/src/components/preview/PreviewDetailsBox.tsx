import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

type PreviewDetailsBoxProps = PropsWithChildren & React.HTMLAttributes<HTMLDivElement>

function PreviewDetailsBox({ children, className, ...props }: PreviewDetailsBoxProps) {
  return (
    <div 
        {...props} 
        className={cn('bg-white rounded-3xl md:px-14 md:py-12 mt-12 md:mt-24 max-w-[237px] md:max-w-[349px] mx-auto', className)}
    >
        {children}
    </div>
  )
}

export default PreviewDetailsBox