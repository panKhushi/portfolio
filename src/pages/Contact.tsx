import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { profile, socialLinks } from '@/data/profile'
import { socialIconMap } from '@/lib/socialIcons'
import { SectionHeading } from '@/components/ui/SectionHeading'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS env vars are not set. See README for setup instructions.')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="container-page py-20 md:py-28">
      <SectionHeading eyebrow="Contact" title="Let's talk data" description="Whether it's a role, a freelance project, or just an interesting dataset — drop a message and I'll get back to you." />

      <div className="mt-14 grid md:grid-cols-[1fr_0.9fr] gap-12">
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-surface rounded-2xl p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wide">Name</label>
              <input name="user_name" required className="mt-2 w-full rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-teal)]" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wide">Email</label>
              <input type="email" name="user_email" required className="mt-2 w-full rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-teal)]" placeholder="you@email.com" />
            </div>
          </div>
          <div>
            <label className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wide">Subject</label>
            <input name="subject" required className="mt-2 w-full rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-teal)]" placeholder="What's this about?" />
          </div>
          <div>
            <label className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wide">Message</label>
            <textarea name="message" required rows={5} className="mt-2 w-full rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-teal)] resize-none" placeholder="Tell me a bit about it…" />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[var(--color-amber)] text-[#0B0E14] hover:brightness-110 transition-all disabled:opacity-60 w-full sm:w-auto"
          >
            {status === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="flex items-center gap-2 text-sm text-[var(--color-teal)]"><CheckCircle2 size={15} /> Message sent — thanks! I'll reply soon.</p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm text-[var(--color-danger)]"><XCircle size={15} /> Couldn't send — check the EmailJS setup in the README, or email me directly.</p>
          )}
        </motion.form>

        <div className="space-y-6">
          <div className="card-surface rounded-2xl p-6">
            <h3 className="font-display font-semibold text-[var(--color-text)] mb-4">Reach me directly</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon] ?? socialIconMap.Mail
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                    <span className="h-9 w-9 flex items-center justify-center rounded-full border border-[var(--color-border)]"><Icon size={15} /></span>
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] h-56">
            <iframe
              title="Location map"
              src="https://www.google.com/maps?q=New+Delhi,India&output=embed"
              className="w-full h-full grayscale contrast-125 opacity-90"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-[var(--color-muted)] font-mono">Based in {profile.location}</p>
        </div>
      </div>
    </div>
  )
}
