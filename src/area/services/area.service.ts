import { useQuery } from '@tanstack/react-query'
import { getAll } from './area.api'
import { useReducer } from 'react'
import { areaReducer, initialState } from './area.reducer'
import { Area } from '@/area/models'

export function useAreaService() {
  const [state, dispatch] = useReducer(areaReducer, initialState)

  const {
    isPending,
    error,
    data: areas,
  } = useQuery({
    queryKey: ['area'],
    queryFn: getAll,
  })

  function setActiveItem(area: Partial<Area> | NonNullable<unknown>) {
    dispatch({ type: 'setActiveItem', payload: area })
  }

  function resetActiveItem() {
    dispatch({ type: 'setActiveItem', payload: null })
  }

  function save(area: Area) {
    console.log('*****************save', area)
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
