import { Area } from '@/area/models'
import { AreaActions } from './area.actions'

export type AreaState = {
  activeItem: Partial<Area> | null
}

export const initialState: AreaState = {
  activeItem: null,
}

export function areaReducer(state: AreaState, action: AreaActions): AreaState {
  const { type, payload } = action

  switch (type) {
    case 'setActiveItem':
      return { ...state, activeItem: payload }
    case 'save':
      return { ...state, activeItem: null }
    default:
      return state
  }
}
