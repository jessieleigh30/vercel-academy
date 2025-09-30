'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './button'

interface SearchBarProps {
  initialQuery?: string
}

export function SearchBar({ initialQuery = '' }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!query.trim()) {
      router.push('/')
      return
    }
    
    const params = new URLSearchParams()
    params.set('search', query.trim())
    router.push(`/?${params.toString()}`)
  }

  const handleClear = () => {
    setQuery('')
    router.push('/')
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-900">Search Posts</h3>
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles, tags, or categories..."
          className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Button type="submit" size="sm">
          Search
        </Button>
        {query && (
          <Button type="button" variant="outline" size="sm" onClick={handleClear}>
            Clear
          </Button>
        )}
      </form>
    </div>
  )
}