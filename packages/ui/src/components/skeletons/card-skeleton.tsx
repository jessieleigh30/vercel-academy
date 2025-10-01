import { BaseSkeleton } from './base-skeleton'
import { TextSkeleton } from './text-skeleton'
import { cn } from '../../lib/utils'

interface CardSkeletonProps {
  className?: string
  showImage?: boolean
  imageAspect?: 'square' | 'video' | 'portrait'
  textLines?: number
}

/**
 * Generic card skeleton component
 * 
 * Key concepts:
 * 1. Flexible card layout with optional image
 * 2. Configurable aspect ratios for different use cases
 * 3. Text content area with configurable line count
 * 4. Matches typical card component structure
 */
export function CardSkeleton({ 
  className, 
  showImage = true, 
  imageAspect = 'video',
  textLines = 3 
}: CardSkeletonProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video', 
    portrait: 'aspect-[3/4]'
  }

  return (
    <div className={cn('bg-white rounded-lg border border-gray-100 overflow-hidden', className)}>
      {showImage && (
        <BaseSkeleton className={cn('w-full', aspectClasses[imageAspect])} />
      )}
      
      <div className="p-6 space-y-4">
        {/* Title */}
        <BaseSkeleton className="h-6 w-3/4 rounded" />
        
        {/* Content */}
        <TextSkeleton lines={textLines} />
        
        {/* Action area */}
        <div className="flex justify-between items-center pt-2">
          <BaseSkeleton className="h-4 w-20 rounded" />
          <BaseSkeleton className="h-8 w-24 rounded" />
        </div>
      </div>
    </div>
  )
}