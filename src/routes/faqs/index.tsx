import { createFileRoute } from '@tanstack/react-router'
import FAQSLayout from '../../components/faqs/FAQSLayout'

export const Route = createFileRoute('/faqs/')({
  component: FAQSLayout
})