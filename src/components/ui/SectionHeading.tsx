import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 text-[var(--color-text)]">{title}</h2>
      {description && <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{description}</p>}
    </motion.div>
  )
}
