type AreaToolbarProps = {
  onNew: () => void
}

export function AreaToolbar({ onNew }: AreaToolbarProps) {
  return (
    <button className="btn btn-primary flex mb-4 ml-auto mr-4" onClick={onNew}>
      New
    </button>
  )
}
