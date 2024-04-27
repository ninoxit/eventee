import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/p/')({
  component: () => <div>Hello /p/!</div>
})