import { createLazyFileRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AreaPage } from '@/area/components'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

const queryClient = new QueryClient()

function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <AreaPage />
    </QueryClientProvider>
  )
}
