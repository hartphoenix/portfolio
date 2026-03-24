import { useEffect } from 'react'

const BASE = 'hart the phoenix'

export function useTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | ${BASE}` : BASE
  }, [page])
}
