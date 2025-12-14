// lib/http/typedFetch.ts
import type { ApiResult } from "./types"

type TypedFetchOptions = RequestInit & {
  timeoutMs?: number
}

export async function typedFetch<T>(
  input: RequestInfo,
  options: TypedFetchOptions = {}
): Promise<ApiResult<T>> {
  const { timeoutMs = 8000, ...fetchOptions } = options

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const res = await fetch(input, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      },
    })

    const text = await res.text()
    const json = text ? JSON.parse(text) : null

    if (!res.ok) {
      return {
        error: {
          code: json?.code ?? "HTTP_ERROR",
          message: json?.message ?? "Request failed",
          status: res.status,
        },
      }
    }

    return {
      data: json,
    }
  } catch (err: any) {
    if (err.name === "AbortError") {
      return {
        error: {
          code: "TIMEOUT",
          message: "Request timed out",
        },
      }
    }

    return {
      error: {
        code: "NETWORK_ERROR",
        message: "Unable to reach server",
      },
    }
  } finally {
    clearTimeout(timeout)
  }
}
