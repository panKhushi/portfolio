import { Link } from 'react-router-dom'
import { profile, socialLinks } from '@/data/profile'
import { domains } from '@/data/domains'
import { socialIconMap } from '@/lib/socialIcons'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="font-display font-semibold text-xl text-[var(--color-text)]">
            {profile.name}
          </Link>
          <p className="mt-3 text-sm text-[var(--color-muted)] max-w-sm leading-relaxed">{profile.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon] ?? socialIconMap.Mail
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-amber)] hover:border-[var(--color-amber)] transition-colors"
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {['About', 'Skills', 'Portfolio', 'Blogs', 'Resume', 'Contact'].map((label) => (
              <li key={label}>
                <Link to={`/${label.toLowerCase()}`} className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Project domains</h4>
          <ul className="space-y-2.5 text-sm">
            {domains.slice(0, 6).map((d) => (
              <li key={d.slug}>
                <Link to={`/projects/${d.slug}`} className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                  {d.shortLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-muted)] font-mono">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Built with React · TypeScript · Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
