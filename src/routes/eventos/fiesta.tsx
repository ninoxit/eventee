import { createFileRoute } from '@tanstack/react-router'
import FiestaLayout from '../../components/eventos/FiestaLayout'

export const Route = createFileRoute('/eventos/fiesta')({
  component: FiestaLayout
})