import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signout/')({
  component: () => <div>Hello /signout/!</div>
})