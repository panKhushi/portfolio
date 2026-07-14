import { Navigate, useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, FileText, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { getDomain } from '@/data/domains'
import { getProject, getRelatedProjects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from '@/components/ui/Button'

export default function ProjectDetail() {
  const { domain: domainSlug, id } = useParams<{ domain: string; id: string }>()
  const domain = getDomain(domainSlug ?? '')
  const project = domain ? getProject(domain.slug, id ?? '') : undefined

  if (!domain || !project) return <Navigate to="/projects" replace />

  const related = getRelatedProjects(project)

  return (
    <div>
      {/* Hero banner */}
      <section className="border-b border-[var(--color-border)] relative overflow-hidden">
        <div className="container-page py-14 md:py-20 relative">
          <nav className="text-xs font-mono text-[var(--color-muted)] mb-6 flex items-center gap-1.5 flex-wrap">
            <Link to="/projects" className="hover:text-[var(--color-text)]">Projects</Link>
            <span>/</span>
            <Link to={`/projects/${domain.slug}`} className="hover:text-[var(--color-text)]">{domain.title}</Link>
            <span>/</span>
            <span className="text-[var(--color-text)]">{project.title}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2.5">
              <span className="eyebrow">{domain.title}</span>
              <span className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-full card-surface text-[var(--color-amber)]">{project.subcategory}</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-semibold mt-3 text-[var(--color-text)] max-w-3xl">{project.title}</h1>
            <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl">{project.tagline}</p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && <Button href={project.github} variant="secondary" icon={<FiGithub size={15} />}>GitHub</Button>}
            {project.liveDemo && <Button href={project.liveDemo} variant="primary" icon={<ExternalLink size={15} />}>Live Demo</Button>}
            {project.caseStudy && <Button href={project.caseStudy} variant="secondary">Case Study</Button>}
            {project.reportPdf && <Button href={project.reportPdf} variant="ghost" icon={<FileText size={15} />}>Download Report</Button>}
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="container-page -mt-2 md:mt-0 py-10">
        <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] aspect-[16/8] bg-[var(--color-surface-2)]">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Meta stat strip */}
      {project.meta.length > 0 && (
        <section className="container-page pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.meta.map((m) => (
              <div key={m.label} className="card-surface rounded-xl p-4">
                <div className="font-mono text-lg font-semibold text-[var(--color-amber)]">{m.value}</div>
                <div className="text-xs text-[var(--color-muted)] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Overview / Problem / Solution */}
      <section className="container-page py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-xl font-semibold text-[var(--color-text)] mb-3">Overview</h2>
          <p className="text-[var(--color-muted)] leading-relaxed">{project.overview}</p>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="flex items-center gap-2 font-display font-semibold text-[var(--color-text)] mb-2">
              <AlertTriangle size={16} className="text-[var(--color-amber)]" /> Problem
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm">{project.problem}</p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-display font-semibold text-[var(--color-text)] mb-2">
              <CheckCircle2 size={16} className="text-[var(--color-teal)]" /> Solution
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Workflow / architecture diagram */}
      <section className="container-page py-14 border-t border-[var(--color-border)]">
        <h2 className="font-display text-xl font-semibold text-[var(--color-text)] mb-8">Workflow</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-[var(--color-border)]" />
          <div className="grid md:grid-cols-5 gap-8">
            {project.workflow.slice(0, 5).map((step, i) => (
              <div key={i} className="relative">
                <div className="h-10 w-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center font-mono text-sm text-[var(--color-amber)] relative z-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="container-page py-14 border-t border-[var(--color-border)]">
        <h2 className="font-display text-xl font-semibold text-[var(--color-text)] mb-6">Tech stack</h2>
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((t) => (
            <span key={t} className="font-mono text-xs px-3.5 py-2 rounded-full card-surface text-[var(--color-text)]">{t}</span>
          ))}
        </div>
      </section>

      {/* Features / Challenges / Results */}
      <section className="container-page py-14 border-t border-[var(--color-border)] grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display font-semibold text-[var(--color-text)] mb-4">Features</h3>
          <ul className="space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="text-sm text-[var(--color-muted)] flex gap-2 leading-relaxed">
                <span className="text-[var(--color-teal)] mt-0.5">▸</span>{f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-[var(--color-text)] mb-4">Challenges</h3>
          <ul className="space-y-2.5">
            {project.challenges.map((c) => (
              <li key={c} className="text-sm text-[var(--color-muted)] flex gap-2 leading-relaxed">
                <span className="text-[var(--color-amber)] mt-0.5">▸</span>{c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex items-center gap-2 font-display font-semibold text-[var(--color-text)] mb-4">
            <TrendingUp size={16} className="text-[var(--color-teal)]" /> Results
          </h3>
          <ul className="space-y-2.5">
            {project.results.map((r) => (
              <li key={r} className="text-sm text-[var(--color-muted)] flex gap-2 leading-relaxed">
                <span className="text-[var(--color-teal)] mt-0.5">▸</span>{r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-page py-14 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-xl font-semibold text-[var(--color-text)]">Related projects</h2>
            <Link to={`/projects/${domain.slug}`} className="text-sm text-[var(--color-teal)] hover:underline flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <section className="container-page pb-20">
        <Link to={`/projects/${domain.slug}`} className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
          <ArrowLeft size={15} /> Back to {domain.title}
        </Link>
      </section>
    </div>
  )
}
