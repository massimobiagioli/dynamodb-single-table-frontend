import { ServerError, Spinner } from '@/shared/components'
import { Area } from '@/area/models'
import { useAreaServer } from '@/area/services'

type AreaListProps = {
  onSelectItem: (area: Area) => void
}

export function AreaList({ onSelectItem }: AreaListProps) {
  const { queries } = useAreaServer()
  const { isPending, error, data: areas } = queries.getAllQuery

  if (isPending) return <Spinner />

  if (error) return <ServerError message={error.message} />

  return (
    <>
      <h3 className="text-2xl m-2 p-2">Areas</h3>
      <div className="flex flex-wrap gap-2 m-2">
        {areas?.map(area => {
          return (
            <div
              key={area.id}
              onClick={() => onSelectItem(area)}
              className="card w-96 bg-base-100 shadow-xl cursor-pointer"
            >
              <div className="card-body">
                <h2 className="card-title">{area.name}</h2>
                <div>
                  <span>Location: </span>
                  {area.location}
                </div>
                <div>
                  <span>Manager: </span>
                  {area.manager}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
