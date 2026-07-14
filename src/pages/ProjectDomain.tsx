import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getDomain } from '@/data/domains'
import { getProjectsByDomain } from '@/data/projects'
import { getIcon } from '@/lib/icons'
import { ProjectCard } from '@/components/ProjectCard'

export default function ProjectDomain() {
  const { domain: slug } = useParams<{ domain: string }>()
  const domain = getDomain(slug ?? '')
  const [subcategory, setSubcategory] = useState<string>('all')

  if (!domain) return <Navigate to="/projects" replace />

  const allDomainProjects = getProjectsByDomain(domain.slug)
  const domainProjects = subcategory === 'all' ? allDomainProjects : allDomainProjects.filter((p) => p.subcategory === subcategory)
  const Icon = getIcon(domain.icon)
  const accentVar = domain.accent === 'amber' ? 'var(--color-amber)' : 'var(--color-teal)'

  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <div className="container-page py-16 md:py-20">
          <nav className="text-xs font-mono text-[var(--color-muted)] mb-6">
            <a href="/projects" className="hover:text-[var(--color-text)]">Projects</a> / <span className="text-[var(--color-text)]">{domain.title}</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: domain.accent === 'amber' ? 'var(--color-amber-soft)' : 'var(--color-teal-soft)' }}>
              <Icon size={26} style={{ color: accentVar }} />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text)]">{domain.title}</h1>
              <p className="text-[var(--color-muted)] mt-1">{allDomainProjects.length} project{allDomainProjects.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-[var(--color-muted)] leading-relaxed">{domain.description}</p>

          {domain.subcategories.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              <button
                onClick={() => setSubcategory('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  subcategory === 'all' ? 'bg-[var(--color-amber)] text-[#0B0E14]' : 'card-surface text-[var(--color-muted)]'
                }`}
              >
                All
              </button>
              {domain.subcategories.map((sub) => {
                const count = allDomainProjects.filter((p) => p.subcategory === sub).length
                return (
                  <button
                    key={sub}
                    onClick={() => setSubcategory(sub)}
                    disabled={count === 0}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                      subcategory === sub ? 'bg-[var(--color-amber)] text-[#0B0E14]' : 'card-surface text-[var(--color-muted)]'
                    }`}
                  >
                    {sub} <span className="opacity-60">({count})</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        {domainProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {domainProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center text-[var(--color-muted)] py-10">No projects tagged "{subcategory}" yet.</div>
        )}
      </section>
    </div>
  )
}
