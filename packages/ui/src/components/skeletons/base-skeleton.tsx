import { cn } from '../../lib/utils';

interface BaseSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Base skeleton component with animated shimmer effect
 *
 * Key concepts:
 * 1. Uses CSS animation for shimmer effect
 * 2. Base gray background with animated gradient overlay
 * 3. Customizable via className prop
 * 4. Serves as foundation for all other skeleton components
 */
export function BaseSkeleton({ className, children }: BaseSkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200 relative overflow-hidden',
        'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent',
        className
      )}
    >
      {children}
    </div>
  );
}
