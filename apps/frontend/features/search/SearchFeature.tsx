"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { comparisonClient } from "../../lib/api/comparisonClient"
import type { ProductComparison } from "@shared"

import { Input } from "../../components/primitives/Input"
import { Skeleton } from "../../components/primitives/Skeleton"
import { EmptyState } from "../../components/composite/EmptyState"
import { ComparisonFeature } from "../../features/comparison/ComparisonFeature"

export function SearchFeature() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const query = searchParams.get("q")?.trim() ?? ""

  const [result, setResult] = useState<{
    data?: ProductComparison
    error?: { message: string }
    loading: boolean
  }>({
    loading: false,
  })

  useEffect(() => {
    if (!query) {
      setResult({ loading: false })
      return
    }

    let cancelled = false

    setResult({ loading: true })

    comparisonClient.compareByQuery(query).then((res) => {
      if (cancelled) return

      if ("error" in res) {
        setResult({
          loading: false,
          error: { message: res.error.message },
        })
      } else {
        setResult({
          loading: false,
          data: res.data,
        })
      }
    })

    return () => {
      cancelled = true
    }
  }, [query])

  function onSubmit(nextQuery: string) {
    router.push(`/search?q=${encodeURIComponent(nextQuery)}`)
  }

  return (
    <div className="space-y-6">
      <Input
        placeholder="Search for a product"
        defaultValue={query}
        onSubmitAction={onSubmit}
      />

      {result.loading && <Skeleton />}

      {!result.loading && !result.data && !result.error && query && (
        <EmptyState message="No results found." />
      )}

      {result.error && (
        <EmptyState message={result.error.message} />
      )}

      {result.data && (
        <ComparisonFeature comparison={result.data} />
      )}
    </div>
  )
}
