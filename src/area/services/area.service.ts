import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as AreaAPI from './area.api'
import { useReducer } from 'react'
import { areaReducer, initialState } from './area.reducer'
import { Area } from '@/area/models'

export function useAreaService() {
  const [state, dispatch] = useReducer(areaReducer, initialState)

  const queryClient = useQueryClient()

  const {
    isPending,
    error,
    data: areas,
  } = useQuery({
    queryKey: ['area'],
    queryFn: AreaAPI.getAll,
  })

  const saveMutation = useMutation({
    mutationFn: AreaAPI.save,
  })

  function setActiveItem(area: Partial<Area> | NonNullable<unknown>) {
    dispatch({ type: 'setActiveItem', payload: area })
  }

  function resetActiveItem() {
    dispatch({ type: 'setActiveItem', payload: null })
  }

  async function save(area: Area) {
    await saveMutation.mutateAsync(area)
    await queryClient.invalidateQueries({ queryKey: ['area'] })
    dispatch({ type: 'save', payload: area })
  }

  return {
    actions: {
      setActiveItem,
      resetActiveItem,
      save,
    },
    query: {
      isPending,
      error,
      areas,
    },
    state,
  }
}
