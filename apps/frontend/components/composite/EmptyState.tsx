type EmptyStateProps = {
  message: string
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="rounded-md border p-6 text-sm text-muted-foreground">
      {message}
    </div>
  )
}
