import { SiteName } from "../enums/SiteName";

export interface Listing {
  site: SiteName;
  title: string;
  price: number;
  url: string;
  image?: string;
  rating?: number;
  inStock: boolean;
  lastUpdated: string; // ISO date
}

export interface ProductComparisonMeta {
  partial: boolean
  sourceCount: number
  fetchedAt: string // ISO
}

export interface ProductComparison {
  query: string
  listings: Listing[]
  meta?: ProductComparisonMeta
}
