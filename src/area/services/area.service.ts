import { useQueryClient } from '@tanstack/react-query'
import { useReducer } from 'react'
import { areaReducer, initialState } from './area.reducer'
import { Area } from '@/area/models'

export function useAreaService() {
  const [state, dispatch] = useReducer(areaReducer, initialState)

  const queryClient = useQueryClient()

  function setActiveItem(area: Partial<Area> | NonNullable<unknown>) {
    dispatch({ type: 'setActiveItem', payload: area })
  }

  function resetActiveItem() {
    dispatch({ type: 'setActiveItem', payload: null })
  }

  async function save(area: Area, mutationFn: (area: Area) => Promise<Area>) {
    await mutationFn(area)
    await queryClient.invalidateQueries({ queryKey: ['area'] })
    dispatch({ type: 'save', payload: area })
  }

  return {
    actions: {
      setActiveItem,
      resetActiveItem,
      save,
    },
    state,
  }
}
