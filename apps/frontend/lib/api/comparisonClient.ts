// lib/api/comparisonClient.ts
import { typedFetch } from "../http/typedFetch"
import type { ApiResult } from "../http/types"
import type { ProductComparison } from "@shared"

export const comparisonClient = {
  compareByQuery(query: string): Promise<ApiResult<ProductComparison>> {
    return typedFetch<ProductComparison>(
      `/api/compare?q=${encodeURIComponent(query)}`
    )
  },
}
