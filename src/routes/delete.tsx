import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/delete')({
  component: () => <div>Hello /delete!</div>
})