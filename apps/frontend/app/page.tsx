// app/page.tsx
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 space-y-6">
      <h1 className="text-3xl font-semibold">
        Compare prices across stores
      </h1>

      <p className="text-muted-foreground">
        Search once. See prices from multiple sites. Set alerts when it matters.
      </p>

      <Link
        href="/search"
        className="inline-block rounded-md border px-4 py-2"
      >
        Start searching
      </Link>
    </main>
  )
}
