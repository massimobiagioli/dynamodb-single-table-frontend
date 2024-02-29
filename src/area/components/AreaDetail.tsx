import clsx from 'clsx'
import { Area } from '@/area/models'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

type AreaDetailProps = {
  activeItem: Partial<Area> | null
  onClose: () => void
  onSave: (area: Area) => void
}

const initialState: Partial<Area> = {
  id: '',
  name: '',
  location: '',
  manager: '',
}

export function AreaDetail({ activeItem, onClose, onSave }: AreaDetailProps) {
  const [formData, setFormData] = useState(initialState)
  const [dirty, setDirty] = useState<boolean>(false)
  const [readOnly, setReadOnly] = useState<boolean>(false)

  useEffect(() => {
    if (activeItem?.id) {
      setFormData({ ...activeItem })
      setReadOnly(true)
    } else {
      setDirty(false)
      setFormData(initialState)
      setReadOnly(false)
    }
  }, [activeItem])

  function changeHandler(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const value = e.currentTarget.value
    const name = e.currentTarget.name
    setFormData(s => ({ ...s, [name]: value }))
    setDirty(true)
  }

  function saveHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSave({
      id: formData?.id || '',
      name: formData?.name || '',
      location: formData?.location || '',
      manager: formData?.manager || '',
    })
  }

  const isIdValid = formData.id?.length
  const isNameValid = formData.name?.length
  const isLocationValid = formData.location?.length
  const isManagerValid = formData.manager?.length
  const isFormValid =
    isIdValid && isNameValid && isLocationValid && isManagerValid

  return (
    <div
      className={clsx(
        'fixed bg-slate-100 z-10 text-black top-0 w-96 h-full transition-all overflow-auto',
        { '-right-96': !activeItem, 'right-0': activeItem },
      )}
    >
      <form onSubmit={saveHandler}>
        <div className="flex flex-col gap-3 mx-3 mt-8">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Id</span>
            </div>
            <input
              type="text"
              placeholder="Id"
              className={clsx('input input-bordered w-full max-w-xs', {
                'input-error': !isIdValid && dirty,
                'input-disabled': readOnly,
              })}
              value={formData?.id}
              name="id"
              onChange={changeHandler}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              className={clsx('input input-bordered w-full max-w-xs', {
                'input-error': !isNameValid && dirty,
                'input-disabled': readOnly,
              })}
              value={formData?.name}
              name="name"
              onChange={changeHandler}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <input
              type="text"
              placeholder="Location"
              className={clsx('input input-bordered w-full max-w-xs', {
                'input-error': !isLocationValid && dirty,
                'input-disabled': readOnly,
              })}
              value={formData?.location}
              name="location"
              onChange={changeHandler}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Manager</span>
            </div>
            <input
              type="text"
              placeholder="Manager"
              className={clsx('input input-bordered w-full max-w-xs', {
                'input-error': !isManagerValid && dirty,
                'input-disabled': readOnly,
              })}
              value={formData?.manager}
              name="manager"
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="flex justify-around h-16 mt-16">
          {!readOnly && (
            <button
              className="btn btn-primary"
              disabled={!isFormValid}
              type="submit"
            >
              Confirm
            </button>
          )}
          <button className="btn btn-secondary" onClick={onClose} type="button">
            Close
          </button>
        </div>
      </form>
    </div>
  )
}
