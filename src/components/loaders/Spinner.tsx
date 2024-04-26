'use client'

import { cn } from '../../lib/utils'

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className={cn(`spinner h-4 w-4 ${className}`)}></div>
  )
}
