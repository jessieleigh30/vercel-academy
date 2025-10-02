import { BaseSkeleton } from './base-skeleton';
import { cn } from '../../lib/utils';

interface TextSkeletonProps {
  lines?: number;
  className?: string;
}

/**
 * Text skeleton component for paragraphs and text content
 *
 * Key concepts:
 * 1. Simulates lines of text with varied widths
 * 2. Last line is typically shorter (75% width)
 * 3. Maintains proper line spacing
 */
export function TextSkeleton({ lines = 3, className }: TextSkeletonProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }, (_, i) => (
        <BaseSkeleton key={i} className={cn('h-4 rounded', i === lines - 1 ? 'w-3/4' : 'w-full')} />
      ))}
    </div>
  );
}
