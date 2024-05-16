import { createFileRoute } from '@tanstack/react-router'
import RecoveryLayout from '../../components/Recovery/RecoveryLayout'

export const Route = createFileRoute('/login/forgot')({
  component: RecoveryLayout
})