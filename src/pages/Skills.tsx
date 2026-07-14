import { motion } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import { getIcon } from '@/lib/icons'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Skills() {
  return (
    <div className="container-page py-20 md:py-28">
      <SectionHeading eyebrow="Toolkit" title="Skills, measured honestly" description="Self-assessed proficiency, not a marketing number — weighted by how often each tool shows up in real, shipped projects." />

      <div className="mt-14 grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => {
          const Icon = getIcon(cat.icon)
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: ci * 0.05 }}
              className="card-surface rounded-2xl p-6"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="h-9 w-9 rounded-lg flex items-center justify-center bg-[var(--color-teal-soft)]">
                  <Icon size={17} className="text-[var(--color-teal)]" />
                </div>
                <h3 className="font-display font-semibold text-[var(--color-text)]">{cat.category}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-[var(--color-text)]">{skill.name}</span>
                      <span className="font-mono text-xs text-[var(--color-muted)]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[var(--color-surface-2)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-amber)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
