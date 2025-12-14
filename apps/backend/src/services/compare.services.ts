import type { ProductComparison } from "@shared"
import { normalizeQuery } from "../utils/normalizeQuery"

export async function compareService(
  rawQuery: string
): Promise<ProductComparison> {
  const query = normalizeQuery(rawQuery)

  return {
    query,
    listings: [],
    meta: {
      partial: true,
      sourceCount: 0,
      fetchedAt: new Date().toISOString(),
    },
  }
}
