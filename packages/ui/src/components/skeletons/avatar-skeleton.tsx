import { BaseSkeleton } from './base-skeleton';
import { cn } from '../../lib/utils';

interface AvatarSkeletonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Avatar skeleton component for profile images
 *
 * Key concepts:
 * 1. Circular skeleton for profile images
 * 2. Multiple size variants to match avatar component
 * 3. Consistent with team member cards and testimonials
 */
export function AvatarSkeleton({ size = 'md', className }: AvatarSkeletonProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-16 w-16',
    lg: 'h-32 w-32',
    xl: 'h-40 w-40',
  };

  return <BaseSkeleton className={cn('rounded-full', sizeClasses[size], className)} />;
}
