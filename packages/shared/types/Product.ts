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

export interface ProductComparison {
  query: string;
  listings: Listing[];
}
