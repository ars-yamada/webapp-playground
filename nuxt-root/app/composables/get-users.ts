import type { User } from '@core/types'

/**
 * Composable to fetch users from the API
 * @returns An object containing data, error, and pending state
 */
export const useGetUsers = async () => {
  const { data, error, pending, refresh } = await useFetch<User[]>(`/api/users`)

  return {
    data,
    error,
    pending,
    refresh,
  }
}
