import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowUpRight } from 'lucide-react'
import { blogs } from '@/data/blogs'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Blogs() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const categories = ['all', ...Array.from(new Set(blogs.map((b) => b.category)))]

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchesCategory = category === 'all' || b.category === category
      const matchesQuery = query.trim() === '' || b.title.toLowerCase().includes(query.toLowerCase()) || b.excerpt.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div className="container-page py-20 md:py-28">
      <SectionHeading eyebrow="Writing" title="Notes from the build" description="Short write-ups on what I learned building these projects — the parts that don't make it into a README." />

      <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            className="w-full pl-10 pr-4 py-2.5 rounded-full card-surface text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-teal)]"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                category === c ? 'bg-[var(--color-amber)] text-[#0B0E14]' : 'card-surface text-[var(--color-muted)]'
              }`}
            >
              {c === 'all' ? 'All' : c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((post) => (
          <Link key={post.id} to={`/blogs/${post.slug}`} className="group card-surface rounded-2xl overflow-hidden hover:border-[var(--color-teal)] transition-colors">
            <div className="aspect-[16/9] bg-[var(--color-surface-2)] overflow-hidden">
              <img src={post.cover} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-muted)]">
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-display font-semibold text-[var(--color-text)] mt-2 flex items-start justify-between gap-2">
                {post.title}
                <ArrowUpRight size={16} className="shrink-0 mt-1 text-[var(--color-muted)] group-hover:text-[var(--color-amber)] transition-colors" />
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
