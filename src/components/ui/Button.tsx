import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface BaseProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: ReactNode
  className?: string
}

interface ButtonAsButton extends BaseProps {
  href?: undefined
  to?: undefined
  onClick?: () => void
  type?: 'button' | 'submit'
}

interface ButtonAsLink extends BaseProps {
  to: string
  href?: undefined
  onClick?: undefined
}

interface ButtonAsAnchor extends BaseProps {
  href: string
  to?: undefined
  onClick?: undefined
  target?: string
  /** Pass true (or a filename string) to trigger a browser download instead of navigating/opening a tab. */
  download?: boolean | string
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const variantClasses: Record<string, string> = {
  primary:
    'bg-[var(--color-amber)] text-[#0B0E14] hover:brightness-110 shadow-[var(--shadow-glow-amber)]',
  secondary:
    'border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]',
  ghost: 'text-[var(--color-muted)] hover:text-[var(--color-text)]',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 whitespace-nowrap'

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', icon, className = '' } = props
  const classes = `${base} ${variantClasses[variant]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
        {icon}
      </Link>
    )
  }
  if ('href' in props && props.href) {
    const anchorProps = props as ButtonAsAnchor
    const isDownload = Boolean(anchorProps.download)
    return (
      <a
        href={anchorProps.href}
        target={isDownload ? undefined : anchorProps.target ?? '_blank'}
        rel={isDownload ? undefined : 'noreferrer'}
        download={anchorProps.download}
        className={classes}
      >
        {children}
        {icon}
      </a>
    )
  }
  return (
    <button
      type={(props as ButtonAsButton).type ?? 'button'}
      onClick={(props as ButtonAsButton).onClick}
      className={classes}
    >
      {children}
      {icon}
    </button>
  )
}
