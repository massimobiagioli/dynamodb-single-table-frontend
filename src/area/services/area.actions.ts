import { Area } from '@/area/models'

export type SetActiveItem = {
  type: 'setActiveItem'
  payload: Partial<Area> | null
}

export type Save = {
  type: 'save'
  payload: Area
}

export type AreaActions = SetActiveItem | Save
