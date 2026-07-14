import { motion } from 'framer-motion'

/**
 * The site's signature visual: a self-drawing "growth signal" line with a live
 * readout dot, standing in for a career/skill trajectory rather than decoration.
 */
export function SignalChart() {
  const path = 'M0,90 C40,85 60,70 90,72 C120,74 130,40 165,42 C200,44 210,10 250,8'

  return (
    <svg viewBox="0 0 260 100" className="w-full h-auto overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="signalGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-teal)" />
          <stop offset="100%" stopColor="var(--color-amber)" />
        </linearGradient>
      </defs>

      {/* baseline grid */}
      {[20, 45, 70].map((y) => (
        <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="var(--color-border)" strokeWidth="1" />
      ))}

      <motion.path
        d={path}
        fill="none"
        stroke="url(#signalGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
      />

      <motion.circle
        r="4"
        fill="var(--color-amber)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, cx: 250, cy: 8 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <animate attributeName="r" values="4;6;4" dur="1.6s" repeatCount="indefinite" />
      </motion.circle>
    </svg>
  )
}
