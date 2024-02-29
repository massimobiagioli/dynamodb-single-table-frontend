import { AreaList, AreaDetail, AreaToolbar } from '.'
import { useAreaService } from '@/area/services'

export function AreaPage() {
  const { state, actions, query } = useAreaService()

  return (
    <>
      <AreaToolbar onNew={() => actions.setActiveItem({})} />

      <AreaList {...query} onSelectItem={actions.setActiveItem} />

      <AreaDetail
        activeItem={state.activeItem}
        onClose={actions.resetActiveItem}
        onSave={actions.save}
      />
    </>
  )
}
