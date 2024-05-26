import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/signup/')({
  beforeLoad: ({context}) => {
    if(context.auth.auth){
      throw redirect({
        to: '/user'
      })
    }
  },
  component: () => <div>Hello /signup/!</div>
})