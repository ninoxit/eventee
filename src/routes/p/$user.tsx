import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/p/$user')({
  component: () => <div>Hello /p/$user!</div>
})