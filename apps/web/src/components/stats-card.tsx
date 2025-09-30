import { ReactNode } from 'react'
import { Card } from './card'

export interface StatsCardProps {
  value: string | number
  label: string
  icon?: string | ReactNode
  description?: string
  trend?: {
    value: string
    direction: 'up' | 'down' | 'neutral'
  }
  className?: string
}

export function StatsCard({ 
  value, 
  label, 
  icon, 
  description, 
  trend, 
  className = '' 
}: StatsCardProps) {
  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      return val.toLocaleString()
    }
    return val
  }

  const getTrendColor = (direction: 'up' | 'down' | 'neutral') => {
    switch (direction) {
      case 'up': return 'text-green-600'
      case 'down': return 'text-red-600'
      case 'neutral': return 'text-gray-500'
    }
  }

  const getTrendIcon = (direction: 'up' | 'down' | 'neutral') => {
    switch (direction) {
      case 'up': return '↗️'
      case 'down': return '↘️'  
      case 'neutral': return '→'
    }
  }

  return (
    <Card className={`p-8 text-center ${className}`}>
      <div className="flex flex-col">
        {/* Value - Order first for visual hierarchy */}
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
          {formatValue(value)}
          {trend && (
            <span className={`ml-2 text-sm font-normal ${getTrendColor(trend.direction)}`}>
              {getTrendIcon(trend.direction)} {trend.value}
            </span>
          )}
        </dd>
        
        {/* Label */}
        <dt className="text-sm font-semibold leading-6 text-gray-600 flex items-center justify-center gap-2">
          {typeof icon === 'string' ? <span>{icon}</span> : icon}
          {label}
        </dt>
        
        {/* Optional Description */}
        {description && (
          <div className="mt-2 text-xs text-gray-600">
            {description}
          </div>
        )}
      </div>
    </Card>
  )
}

export interface StatsGridProps {
  children: ReactNode
  columns?: 2 | 3 | 4 | 5 | 6
  className?: string
}

export function StatsGrid({ 
  children, 
  columns = 4, 
  className = '' 
}: StatsGridProps) {
  const getGridCols = (cols: number) => {
    const colsMap = {
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-2 lg:grid-cols-3',
      4: 'sm:grid-cols-2 lg:grid-cols-4',
      5: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
      6: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
    }
    return colsMap[cols] || colsMap[4]
  }

  return (
    <dl className={`grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center ${getGridCols(columns)} ${className}`}>
      {children}
    </dl>
  )
}