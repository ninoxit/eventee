import { createFileRoute } from '@tanstack/react-router'
import BlogLayout from '../../components/blog/BlogLayout'

export const Route = createFileRoute('/blog/')({
  component: BlogLayout
})