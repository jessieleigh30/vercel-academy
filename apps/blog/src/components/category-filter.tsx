'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

interface CategoryFilterProps {
  categories: string[]
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category') || 'all'

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    
    const queryString = params.toString()
    router.push(queryString ? `/?${queryString}` : '/')
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-white">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => handleCategoryChange('all')}
          variant={currentCategory === 'all' ? 'primary' : 'outline'}
          size="sm"
        >
          All Posts
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category.toLowerCase())}
            variant={currentCategory === category.toLowerCase() ? 'primary' : 'outline'}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}