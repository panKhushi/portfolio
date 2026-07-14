import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { profile, heroStats, socialLinks } from '@/data/profile'
import { domains } from '@/data/domains'
import { getFeaturedProjects } from '@/data/projects'
import { skillCategories } from '@/data/skills'
import { DomainCard } from '@/components/DomainCard'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { SignalChart } from '@/components/ui/SignalChart'
import { ParticleBackground } from '@/components/ui/ParticleBackground'
import { socialIconMap } from '@/lib/socialIcons'

export default function Home() {
  const featured = getFeaturedProjects()

  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <ParticleBackground density={36} />
        <div className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)] animate-pulse" />
              Open to Data Analyst &amp; Data Science roles
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] mt-5 text-[var(--color-text)]">
              {profile.name} builds systems that turn <span className="text-gradient">data into decisions.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[var(--color-muted)] max-w-xl leading-relaxed">{profile.about}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/projects" variant="primary" icon={<ArrowRight size={16} />}>View Projects</Button>
              <Button to="/contact" variant="secondary">Get in touch</Button>
              <Button href={profile.resumeUrl} download="Khushi-Panwar-Resume.pdf" variant="ghost" icon={<Download size={15} />}>Resume</Button>
            </div>

            <div className="mt-9 flex items-center gap-3">
              {socialLinks
                .filter((l) => l.icon !== 'Instagram')
                .map((link) => {
                  const Icon = socialIconMap[link.icon] ?? socialIconMap.Mail
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="h-10 w-10 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-amber)] hover:border-[var(--color-amber)] transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="space-y-5"
          >
            <div className="card-surface rounded-2xl overflow-hidden relative">
              <div className="relative aspect-[4/5] bg-[var(--color-surface-2)]">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-70" />
                {profile.availableForHire && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-bg)]/80 backdrop-blur border border-[var(--color-border)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--color-teal)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)] animate-pulse" />
                    Available for hire
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display font-semibold text-lg text-white">{profile.name}</div>
                  <div className="text-xs text-white/70 mt-0.5">{profile.title}</div>
                </div>
              </div>
            </div>

            <div className="card-surface rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">Career signal — live</span>
                <span className="flex h-2 w-2 rounded-full bg-[var(--color-teal)] animate-pulse" />
              </div>
              <SignalChart />
              <div className="mt-6 grid grid-cols-2 gap-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="border-t border-[var(--color-border)] pt-3">
                    <div className="font-mono text-xl font-semibold text-[var(--color-text)]">{stat.value}</div>
                    <div className="text-xs text-[var(--color-muted)] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECT DOMAINS ────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What I build" title="Five domains, one way of thinking" description="Every project below is filed under a real domain — from spreadsheet dashboards to full-stack AI platforms — with the same standard: ship something real, document how it works, and measure the result." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((domain, i) => (
              <DomainCard key={domain.slug} domain={domain} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ──────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-[var(--color-border)]">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <SectionHeading eyebrow="Selected work" title="Featured projects" />
            <Link to="/portfolio" className="text-sm font-medium text-[var(--color-teal)] hover:underline flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS PREVIEW ─────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-[var(--color-border)]">
        <div className="container-page">
          <SectionHeading eyebrow="Toolkit" title="What's under the hood" />
          <div className="mt-12 flex flex-wrap gap-2.5">
            {skillCategories.flatMap((c) => c.skills).map((skill) => (
              <span key={skill.name} className="font-mono text-xs px-3.5 py-2 rounded-full card-surface text-[var(--color-text)]">
                {skill.name}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/skills" variant="secondary" icon={<ArrowRight size={15} />}>See full skill breakdown</Button>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-[var(--color-border)]">
        <div className="container-page">
          <div className="card-surface rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 grain-bg opacity-[0.15]" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text)]">Have a role or a dataset worth exploring?</h2>
              <p className="mt-3 text-[var(--color-muted)] max-w-lg mx-auto">I'm actively looking for Data Analyst and Data Science opportunities — and always up for talking through an interesting problem.</p>
              <div className="mt-7 flex items-center justify-center gap-3 flex-wrap">
                <Button to="/contact" variant="primary" icon={<ArrowRight size={16} />}>Start a conversation</Button>
                <Button to="/resume" variant="secondary">View resume</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
