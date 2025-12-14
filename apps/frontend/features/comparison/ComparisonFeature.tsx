import type { ProductComparison } from "@shared"
import { ProductHeader } from "../../components/composite/ProductHeader"
import { ListingCard } from "../../components/composite/ListingCard"
import { EmptyState } from "../../components/composite/EmptyState"

type Props = {
  comparison: ProductComparison
}

export function ComparisonFeature({ comparison }: Props) {
  if (!comparison.listings.length) {
    return <EmptyState message="No listings available yet." />
  }

  return (
    <section className="space-y-6">
      <ProductHeader query={comparison.query} />

      <div className="space-y-4">
        {comparison.listings.map((listing, idx) => (
          <ListingCard
            key={`${listing.site}-${idx}`}
            listing={listing}
          />
        ))}
      </div>
    </section>
  )
}
