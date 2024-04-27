import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/error/$codname')({
  component: () => <div>Hello /error/$codname!</div>
})