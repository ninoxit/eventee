import { createFileRoute } from '@tanstack/react-router'
import EventosLayout from '../../components/eventos/EventosLayout'

export const Route = createFileRoute('/eventos/')({
  component: EventosLayout
})