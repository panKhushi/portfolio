import { Navigate, useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft } from 'lucide-react'
import { getBlog, blogs } from '@/data/blogs'

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = getBlog(slug ?? '')

  if (!post) return <Navigate to="/blogs" replace />

  const more = blogs.filter((b) => b.id !== post.id).slice(0, 2)

  return (
    <article className="container-page py-20 md:py-28 max-w-3xl">
      <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] mb-8">
        <ArrowLeft size={15} /> Back to blogs
      </Link>

      <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-muted)]">
        <span>{post.category}</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.readTime}</span>
      </div>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mt-4 text-[var(--color-text)]">{post.title}</h1>

      <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] aspect-[16/8] bg-[var(--color-surface-2)] mt-8">
        <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="prose-blog mt-10 text-[var(--color-muted)] leading-relaxed">
        <ReactMarkdown
          components={{
            h2: (p) => <h2 className="font-display text-xl font-semibold text-[var(--color-text)] mt-8 mb-3" {...p} />,
            p: (p) => <p className="mb-4" {...p} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {more.length > 0 && (
        <div className="mt-16 pt-10 border-t border-[var(--color-border)] grid sm:grid-cols-2 gap-5">
          {more.map((m) => (
            <Link key={m.id} to={`/blogs/${m.slug}`} className="card-surface rounded-xl p-5 hover:border-[var(--color-teal)] transition-colors">
              <span className="font-mono text-xs text-[var(--color-muted)]">{m.category}</span>
              <h4 className="font-display font-semibold text-[var(--color-text)] mt-1.5">{m.title}</h4>
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}
