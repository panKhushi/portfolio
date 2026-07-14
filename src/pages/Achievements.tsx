import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Award, GraduationCap, Sparkles } from 'lucide-react'
import { achievements } from '@/data/achievements'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Achievement } from '@/types'

const categoryIcons: Record<Achievement['category'], typeof Trophy> = {
  Hackathon: Sparkles,
  Competition: Trophy,
  Certification: Award,
  Academic: GraduationCap,
}

export default function Achievements() {
  const [filter, setFilter] = useState<Achievement['category'] | 'all'>('all')
  const categories: (Achievement['category'] | 'all')[] = ['all', 'Hackathon', 'Competition', 'Certification', 'Academic']
  const filtered = achievements.filter((a) => filter === 'all' || a.category === filter)

  return (
    <div className="container-page py-20 md:py-28">
      <SectionHeading eyebrow="Milestones" title="Achievements" description="Hackathons, competitions, certifications, and academic milestones — chronological, because the order shows the trajectory." />

      <div className="mt-8 flex gap-2 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
              filter === c ? 'bg-[var(--color-amber)] text-[#0B0E14]' : 'card-surface text-[var(--color-muted)]'
            }`}
          >
            {c === 'all' ? 'All' : c}
          </button>
        ))}
      </div>

      <div className="mt-14 relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--color-border)] hidden sm:block" />
        <div className="space-y-8">
          {filtered.map((a, i) => {
            const Icon = categoryIcons[a.category]
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative sm:pl-14"
              >
                <div className="hidden sm:flex absolute left-0 top-0 h-10 w-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] items-center justify-center">
                  <Icon size={16} className="text-[var(--color-amber)]" />
                </div>
                <div className="card-surface rounded-xl p-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-mono text-xs text-[var(--color-teal)]">{a.category}</span>
                    <span className="font-mono text-xs text-[var(--color-muted)]">{a.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-[var(--color-text)] mt-2">{a.title}</h3>
                  <div className="text-sm text-[var(--color-muted)]">{a.org}</div>
                  <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">{a.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
