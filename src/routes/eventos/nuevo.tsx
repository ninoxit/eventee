import { createFileRoute } from '@tanstack/react-router'
import EventoNuevoLayout from '../../components/eventos/EventoNuevoLayout'

export const Route = createFileRoute('/eventos/nuevo')({
  component: EventoNuevoLayout
})