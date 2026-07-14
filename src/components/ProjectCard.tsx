import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06, ease: 'easeOut' }}
    >
      <Link
        to={`/projects/${project.domain}/${project.id}`}
        className="group block card-surface rounded-2xl overflow-hidden hover:border-[var(--color-teal)] transition-colors duration-300 h-full"
      >
        <div className="aspect-video bg-[var(--color-surface-2)] overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-bg)]/80 backdrop-blur border border-[var(--color-border)] opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={15} className="text-[var(--color-amber)]" />
          </div>
          <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-[var(--color-bg)]/80 backdrop-blur border border-[var(--color-border)] text-[var(--color-teal)]">
            {project.subcategory}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">{project.title}</h3>
          <p className="mt-1.5 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((t) => (
              <span key={t} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted)] border border-[var(--color-border)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
