import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '@/lib/icons'
import type { ProjectDomain } from '@/types'

export function DomainCard({ domain, index = 0 }: { domain: ProjectDomain; index?: number }) {
  const Icon = getIcon(domain.icon)
  const accentVar = domain.accent === 'amber' ? 'var(--color-amber)' : 'var(--color-teal)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 7) * 0.05, ease: 'easeOut' }}
    >
      <Link
        to={`/projects/${domain.slug}`}
        className="group relative flex flex-col h-full card-surface rounded-2xl p-6 overflow-hidden transition-colors duration-300"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div
          className="absolute -top-8 -right-8 h-28 w-28 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: accentVar }}
        />
        <div
          className="h-11 w-11 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: domain.accent === 'amber' ? 'var(--color-amber-soft)' : 'var(--color-teal-soft)' }}
        >
          <Icon size={20} style={{ color: accentVar }} />
        </div>
        <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">{domain.title}</h3>
        <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed flex-1">{domain.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-mono text-xs text-[var(--color-muted)]">{String(domain.projectCount).padStart(2, '0')} projects</span>
          <ArrowRight size={16} className="text-[var(--color-muted)] group-hover:text-[var(--color-text)] group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  )
}
