"use client"

import { FormEvent, useState } from "react"

type InputProps = {
  placeholder?: string
  defaultValue?: string
  onSubmitAction: (value: string) => void
}

export function Input({ placeholder, defaultValue = "", onSubmitAction }: InputProps) {
  const [value, setValue] = useState(defaultValue)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSubmitAction(value.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border px-4 py-2"
      />
    </form>
  )
}
