"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "../../components/primitives/Skeleton"
import { EmptyState } from "../../components/composite/EmptyState"
import { AlertRow } from "../../components/composite/AlertRow"

// temporary local shape; will later come from @shared
type AlertState = "set" | "triggered" | "paused"

type DashboardAlert = {
  id: string
  product: string
  state: AlertState
}

export function DashboardFeature() {
  const [loading, setLoading] = useState(true)
  const [alerts, setAlerts] = useState<DashboardAlert[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // placeholder: replace with alertClient.listAlerts()
    setTimeout(() => {
      setAlerts([])
      setLoading(false)
    }, 600)
  }, [])

  if (loading) {
    return <Skeleton />
  }

  if (error) {
    return <EmptyState message={error} />
  }

  if (!alerts.length) {
    return <EmptyState message="No active alerts yet." />
  }

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-xl font-semibold">Your alerts</h2>
        <p className="text-sm text-muted-foreground">
          Status overview. Alerts trigger automatically.
        </p>
      </header>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="space-y-1">
            <div className="text-sm font-medium">
              {alert.product}
            </div>

            <AlertRow
              state={alert.state}
              onSet={() => {}}
              onPause={() => {}}
              onRemove={() => {}}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
