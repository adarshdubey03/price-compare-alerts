"use client"

import { useState } from "react"
import { AlertRow } from "../../components/composite/AlertRow"

type AlertState = "not_set" | "set" | "triggered" | "paused"

type Props = {
  initialState: AlertState
}

export function AlertManager({ initialState }: Props) {
  const [state, setState] = useState<AlertState>(initialState)
  const [pending, setPending] = useState(false)

  async function perform(next: AlertState) {
    setPending(true)

    // placeholder for alertClient calls
    // no assumptions — optimistic UI only if backend confirms later
    setState(next)

    setPending(false)
  }

  return (
    <div className={pending ? "opacity-50 pointer-events-none" : ""}>
      <AlertRow
        state={state}
        onSet={() => perform("set")}
        onPause={() => perform("paused")}
        onRemove={() => perform("not_set")}
      />
    </div>
  )
}
