type Props = {
  price: number
  inStock: boolean
}

export function PriceRow({ price, inStock }: Props) {
  return (
    <div className="text-right">
      <div className="text-lg font-semibold">
        ₹{price.toLocaleString()}
      </div>
      <div className="text-xs text-muted-foreground">
        {inStock ? "In stock" : "Out of stock"}
      </div>
    </div>
  )
}
