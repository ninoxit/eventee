import { createFileRoute } from '@tanstack/react-router'
import NosotrosLayout from '../../components/nosotros/NosotrosLayout'

export const Route = createFileRoute('/nosotros/')({
  component: NosotrosLayout     
})