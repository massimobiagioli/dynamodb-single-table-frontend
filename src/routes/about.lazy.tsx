import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
      <h3 className="text-2xl m-2 p-2">Use Cases</h3>
      <ul className="m-4 p-4">
        <li>List Areas</li>
        <li>View Area Detail</li>
        <li>Create Area</li>
      </ul>
    </>
  )
}
