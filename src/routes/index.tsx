import { createFileRoute } from '@tanstack/react-router'
import HomeLayout from '../components/home/HomeLayout'

export const Route = createFileRoute('/')({
  component: HomeLayout
})