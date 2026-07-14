import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <span className="font-mono text-6xl md:text-8xl font-semibold text-gradient">404</span>
      <h1 className="font-display text-2xl md:text-3xl font-semibold mt-4 text-[var(--color-text)]">This page didn't ship.</h1>
      <p className="mt-3 text-[var(--color-muted)] max-w-md mx-auto">The route you're looking for doesn't exist — maybe it moved, or maybe it was never built.</p>
      <div className="mt-8">
        <Button to="/" variant="primary" icon={<ArrowLeft size={15} />}>Back home</Button>
      </div>
      <Link to="/projects" className="block mt-4 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">Or browse the projects</Link>
    </div>
  )
}
