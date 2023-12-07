'use client'

import type { ChangeEvent } from 'react'
import { useSearchContext } from '@/contexts/search.context'
import { Card } from '@/components/Lib/Card'

export function SearchInput() {
  const { search, setSearch } = useSearchContext()

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <Card title='Search for article'>
      <input
          value={search}
          onChange={e => handleSearch(e)}
          type="search"
          className="rounded bg-background p-2 text-title [&:not(:placeholder-shown)]:border-primary"
          placeholder="Search for article..."
      />
    </Card>
  )
}
