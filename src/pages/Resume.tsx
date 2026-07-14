import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Download, Briefcase, GraduationCap } from 'lucide-react'
import { profile } from '@/data/profile'
import { education, experience } from '@/data/timeline'
import { skillCategories } from '@/data/skills'
import { projects } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

function TimelineBlock({ items, icon }: { items: typeof education; icon: ReactNode }) {
  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="relative pl-10"
        >
          <div className="absolute left-0 top-0 h-7 w-7 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
            {icon}
          </div>
          {i < items.length - 1 && <div className="absolute left-[13px] top-7 bottom-[-2rem] w-px bg-[var(--color-border)]" />}
          <div className="font-mono text-xs text-[var(--color-muted)]">{item.period}</div>
          <h3 className="font-display font-semibold text-[var(--color-text)] mt-1">{item.title}</h3>
          <div className="text-sm text-[var(--color-teal)]">{item.org}</div>
          <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">{item.description}</p>
          {item.bullets && (
            <ul className="mt-3 space-y-1.5">
              {item.bullets.map((b) => (
                <li key={b} className="text-sm text-[var(--color-muted)] flex gap-2"><span className="text-[var(--color-amber)]">▸</span>{b}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default function Resume() {
  return (
    <div className="container-page py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow">Résumé</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 text-[var(--color-text)]">{profile.name}</h1>
          <p className="text-[var(--color-muted)] mt-2 max-w-lg">{profile.title}</p>
        </div>
        <Button href={profile.resumeUrl} download="Khushi-Panwar-Resume.pdf" variant="primary" icon={<Download size={16} />}>Download résumé</Button>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--color-text)] mb-8">
            <Briefcase size={17} className="text-[var(--color-amber)]" /> Experience
          </h2>
          <TimelineBlock items={experience} icon={<Briefcase size={13} className="text-[var(--color-amber)]" />} />
        </div>
        <div>
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--color-text)] mb-8">
            <GraduationCap size={17} className="text-[var(--color-teal)]" /> Education
          </h2>
          <TimelineBlock items={education} icon={<GraduationCap size={13} className="text-[var(--color-teal)]" />} />
        </div>
      </div>

      <div className="mt-24">
        <SectionHeading eyebrow="Toolkit" title="Skills" />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {skillCategories.flatMap((c) => c.skills).map((s) => (
            <span key={s.name} className="font-mono text-xs px-3.5 py-2 rounded-full card-surface text-[var(--color-text)]">{s.name}</span>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <SectionHeading eyebrow="Portfolio" title="Selected projects" />
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {projects.filter((p) => p.featured).map((p) => (
            <div key={p.id} className="card-surface rounded-xl p-5">
              <h4 className="font-display font-semibold text-[var(--color-text)]">{p.title}</h4>
              <p className="text-sm text-[var(--color-muted)] mt-1.5">{p.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
