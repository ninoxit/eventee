import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/evento/')({
  component: () => <div>Hello /evento/!</div>
})