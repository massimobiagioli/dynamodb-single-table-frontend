import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NavBar } from '@/shared/components'

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
