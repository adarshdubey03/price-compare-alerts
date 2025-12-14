import type { Listing } from "@shared"
import { PriceRow } from "./PriceRow"

type Props = {
  listing: Listing
}

export function ListingCard({ listing }: Props) {
  return (
    <div className="rounded-md border p-4 space-y-3">
      <div className="flex justify-between items-start gap-4">
        <div>
          <p className="text-sm font-medium">
            {listing.title}
          </p>
          <p className="text-xs text-muted-foreground">
            {listing.site}
          </p>
        </div>

        <PriceRow
          price={listing.price}
          inStock={listing.inStock}
        />
      </div>

      <div className="text-xs text-muted-foreground">
        Last updated: {new Date(listing.lastUpdated).toLocaleString()}
      </div>
    </div>
  )
}
