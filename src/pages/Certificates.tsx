import { motion } from 'framer-motion'
import { Award, Eye, Download } from 'lucide-react'
import { certificates } from '@/data/certificates'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Certificates() {
  return (
    <div className="container-page py-20 md:py-28">
      <SectionHeading eyebrow="Credentials" title="Certificates" description="Certifications backing up the skills above — replace these with your real credential links and dates." />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            className="card-surface rounded-2xl p-6 flex flex-col"
          >
            <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-[var(--color-amber-soft)] mb-4">
              <Award size={19} className="text-[var(--color-amber)]" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]">{cert.category}</span>
            <h3 className="font-display font-semibold text-[var(--color-text)] mt-1.5">{cert.title}</h3>
            <div className="text-sm text-[var(--color-muted)] mt-1">{cert.issuer}</div>
            <div className="font-mono text-xs text-[var(--color-muted)] mt-1">{cert.date}</div>
            <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-[var(--color-teal)] hover:underline">
                  <Eye size={13} /> View
                </a>
              )}
              {cert.fileUrl && (
                <a href={cert.fileUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] hover:text-[var(--color-text)]">
                  <Download size={13} /> Download
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
