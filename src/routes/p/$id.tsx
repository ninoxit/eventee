import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/p/$id')({
  component: () => <div>Hello /p/$id!</div>
})