import { createFileRoute } from '@tanstack/react-router'
import { DebugComponent } from '../../components/debug'
export const Route = createFileRoute('/debug/')({
  component: DebugComponent,
})
