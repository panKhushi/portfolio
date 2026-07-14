import { useEffect, useRef } from 'react'

/**
 * A quiet "data-signal" canvas backdrop: small nodes drifting and connecting
 * when close together, evoking a network graph rather than generic confetti particles.
 */
export function ParticleBackground({ density = 44 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let width = 0
    let height = 0

    type Node = { x: number; y: number; vx: number; vy: number }
    let nodes: Node[] = []

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const teal = getComputedStyle(document.documentElement).getPropertyValue('--color-teal').trim() || '#2DD4BF'

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.strokeStyle = teal
            ctx.globalAlpha = (1 - dist / 130) * 0.14
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 0.5
      ctx.fillStyle = teal
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      if (!prefersReduced) raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [density])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true" />
}
