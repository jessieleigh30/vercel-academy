"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"

export interface StatsCardProps {
  value: string | number
  label: string
  icon?: string | ReactNode
  description?: string
  trend?: {
    value: string
    direction: "up" | "down" | "neutral"
  }
  className?: string
  index?: number
}

export function StatsCard({ value, label, icon, description, trend, className = "", index = 0 }: StatsCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setIsVisible(true)
            // Once visible, stop observing
            observer.disconnect()
          }
        },
        {
          threshold: 0.1, // Trigger when 10% of the card is visible
          rootMargin: "0px 0px -50px 0px", // Start animation slightly before card is fully in view
        },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const formatValue = (val: string | number) => {
    if (typeof val === "number") {
      return val.toLocaleString()
    }
    return val
  }

  const getTrendColor = (direction: "up" | "down" | "neutral") => {
    switch (direction) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      case "neutral":
        return "text-gray-500"
    }
  }

  const getTrendIcon = (direction: "up" | "down" | "neutral") => {
    switch (direction) {
      case "up":
        return "↗️"
      case "down":
        return "↘️"
      case "neutral":
        return "→"
    }
  }

  const animationDelay = `${index * 100}ms`

  return (
      <div
          ref={cardRef}
          className={`group p-8 text-center hover:scale-105 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          } ${className}`}
          style={{ transitionDelay: animationDelay }}
      >
        <div className="flex flex-col">
          {/* Value - Bold display font */}
          <dd
              className="order-first text-5xl sm:text-6xl font-black tracking-tighter text-gray-900 leading-none"
              style={{ fontFamily: "var(--font-display)" }}
          >
            {formatValue(value)}
            {trend && (
                <span className={`ml-2 text-sm font-normal ${getTrendColor(trend.direction)}`}>
              {getTrendIcon(trend.direction)} {trend.value}
            </span>
            )}
          </dd>

          {/* Label - Clean body font */}
          <dt
              className="mt-4 text-sm font-medium leading-6 text-gray-600 uppercase tracking-wide flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-body)" }}
          >
            {typeof icon === "string" ? <span className="text-blue-600">{icon}</span> : icon}
            {label}
          </dt>

          {/* Optional Description */}
          {description && (
              <div className="mt-2 text-xs text-gray-500" style={{ fontFamily: "var(--font-body)" }}>
                {description}
              </div>
          )}
        </div>
      </div>
  )
}

export interface StatsGridProps {
  children: ReactNode
  columns?: 2 | 3 | 4 | 5 | 6
  className?: string
}

export function StatsGrid({ children, columns = 4, className = "" }: StatsGridProps) {
  const getGridCols = (cols: number) => {
    const colsMap = {
      2: "sm:grid-cols-2",
      3: "sm:grid-cols-2 lg:grid-cols-3",
      4: "sm:grid-cols-2 lg:grid-cols-4",
      5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
      6: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
    }
    // @ts-ignore
    return colsMap[cols] || colsMap[4]
  }

  return (
      <dl className={`grid grid-cols-1 gap-8 lg:gap-12 text-center ${getGridCols(columns)} ${className}`}>{children}</dl>
  )
}
