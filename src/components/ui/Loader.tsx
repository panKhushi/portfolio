import { motion } from 'framer-motion'

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-end gap-1.5 h-10">
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 rounded-full bg-[var(--color-amber)]"
              animate={{ height: ['10%', '100%', '10%'] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
            />
          ))}
        </div>
        <span className="font-mono text-xs tracking-widest text-[var(--color-muted)] uppercase">Loading data…</span>
      </div>
    </div>
  )
}
