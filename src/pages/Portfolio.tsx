import { useMemo, useState } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { domains } from '@/data/domains'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const PAGE_SIZE = 9
type SortKey = 'newest' | 'az' | 'za'

export default function Portfolio() {
  const [query, setQuery] = useState('')
  const [domainFilter, setDomainFilter] = useState<string>('all')
  const [sort, setSort] = useState<SortKey>('newest')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let list = projects.filter((p) => (domainFilter === 'all' ? true : p.domain === domainFilter))
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.techStack.some((t) => t.toLowerCase().includes(q))
      )
    }
    if (sort === 'az') list = [...list].sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'za') list = [...list].sort((a, b) => b.title.localeCompare(a.title))
    if (sort === 'newest') list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
    return list
  }, [query, domainFilter, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const updateFilter = (fn: () => void) => {
    fn()
    setPage(1)
  }

  return (
    <div className="container-page py-20 md:py-28">
      <SectionHeading eyebrow="Portfolio" title="Every project, filterable" description="Search across all 30+ shipped projects, or filter by domain." />

      <div className="mt-10 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            value={query}
            onChange={(e) => updateFilter(() => setQuery(e.target.value))}
            placeholder="Search projects, tech, keywords…"
            className="w-full pl-10 pr-4 py-2.5 rounded-full card-surface text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-teal)]"
          />
        </div>

        <div className="flex items-center gap-3">
          <select
            value={domainFilter}
            onChange={(e) => updateFilter(() => setDomainFilter(e.target.value))}
            className="card-surface rounded-full px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-teal)]"
          >
            <option value="all">All domains</option>
            {domains.map((d) => (
              <option key={d.slug} value={d.slug}>{d.title}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="card-surface rounded-full px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-teal)]"
          >
            <option value="newest">Featured first</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-xs font-mono text-[var(--color-muted)]">{filtered.length} project{filtered.length !== 1 ? 's' : ''} found</p>

      {pageItems.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pageItems.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-[var(--color-muted)]">
          No projects match that search. Try a different keyword or domain.
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-14 flex items-center justify-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] disabled:opacity-30"
          >
            <ChevronLeft size={15} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`h-9 w-9 flex items-center justify-center rounded-full text-sm font-mono transition-colors ${
                n === page ? 'bg-[var(--color-amber)] text-[#0B0E14]' : 'border border-[var(--color-border)] text-[var(--color-muted)]'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] disabled:opacity-30"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      )}
    </div>
  )
}
