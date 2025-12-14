type Props = {
  query: string
}

export function ProductHeader({ query }: Props) {
  return (
    <header className="space-y-1">
      <h2 className="text-xl font-semibold">
        Results for “{query}”
      </h2>
      <p className="text-sm text-muted-foreground">
        Prices shown as reported by stores
      </p>
    </header>
  )
}
