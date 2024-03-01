import { useMutation, useQuery } from '@tanstack/react-query'
import * as AreaAPI from './area.api'

export function useAreaServer() {
  const getAllQuery = useQuery({
    queryKey: ['area'],
    queryFn: AreaAPI.getAll,
  })

  const saveMutation = useMutation({
    mutationFn: AreaAPI.save,
  })

  return {
    queries: {
      getAllQuery,
    },
    mutations: {
      saveMutation,
    },
  }
}
