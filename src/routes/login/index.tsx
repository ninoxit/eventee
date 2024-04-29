import { createFileRoute } from '@tanstack/react-router'
import firebase from 'firebase/compat/app'

export const Route = createFileRoute('/login/')({
  component: () => <div>Hello /login/!</div>
})
