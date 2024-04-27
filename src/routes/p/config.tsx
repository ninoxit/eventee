import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/p/config')({
  component: () => <div>Hello /p/config!</div>
})