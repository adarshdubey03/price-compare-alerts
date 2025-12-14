// lib/http/types.ts
export type ApiSuccess<T> = {
  data: T
  meta?: {
    partial?: boolean
    sourceCount?: number
    fetchedAt?: string
  }
}

export type ApiError = {
  error: {
    code: string
    message: string
    status?: number
  }
}

export type ApiResult<T> = ApiSuccess<T> | ApiError
