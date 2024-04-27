import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/evento/$id')({
  component: () => <div>Hello /evento/$id!</div>
})