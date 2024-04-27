import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/forgot')({
  component: () => <div>Hello /login/forgot!</div>
})