import { createFileRoute } from '@tanstack/react-router'
import LoginLayout from '../../components/login/LoginLayout'


export const Route = createFileRoute('/login/')({
  component: LoginLayout 
})
