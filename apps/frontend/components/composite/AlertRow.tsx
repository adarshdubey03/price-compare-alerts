type AlertState = "not_set" | "set" | "triggered" | "paused"

type Props = {
  state: AlertState
  onSet: () => void
  onPause: () => void
  onRemove: () => void
}

export function AlertRow({ state, onSet, onPause, onRemove }: Props) {
  return (
    <div className="flex items-center justify-between rounded-md border p-4">
      <div className="text-sm">
        {state === "not_set" && "No alert set"}
        {state === "set" && "Alert active"}
        {state === "paused" && "Alert paused"}
        {state === "triggered" && "Alert triggered"}
      </div>

      <div className="flex gap-2 text-sm">
        {state === "not_set" && (
          <button className="underline" onClick={onSet}>
            Set alert
          </button>
        )}

        {state === "set" && (
          <>
            <button className="underline" onClick={onPause}>
              Pause
            </button>
            <button className="underline" onClick={onRemove}>
              Remove
            </button>
          </>
        )}

        {state === "paused" && (
          <>
            <button className="underline" onClick={onSet}>
              Resume
            </button>
            <button className="underline" onClick={onRemove}>
              Remove
            </button>
          </>
        )}

        {state === "triggered" && (
          <button className="underline" onClick={onRemove}>
            Clear
          </button>
        )}
      </div>
    </div>
  )
}
