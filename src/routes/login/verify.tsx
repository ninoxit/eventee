import { createFileRoute } from '@tanstack/react-router'
import VerifyLayout from '../../components/Recovery/VerifyLayout'

export const Route = createFileRoute('/login/verify')({
  component: VerifyLayout
})