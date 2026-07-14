import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { profile } from '@/data/profile'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Resume', to: '/resume' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Certificates', to: '/certificates' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <Link to="/" className="font-display font-semibold text-lg tracking-tight text-[var(--color-text)]">
          {profile.initials}<span className="text-[var(--color-amber)]">.</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--color-amber)] rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-amber)] hover:border-[var(--color-amber)] transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden h-9 w-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)]"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-2.5 text-sm font-medium border-b border-[var(--color-border)] last:border-0 ${
                      isActive ? 'text-[var(--color-amber)]' : 'text-[var(--color-muted)]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
