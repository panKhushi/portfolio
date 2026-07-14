import type { SocialLink } from '@/types'

export const profile = {
  name: 'Khushi Panwar',
  initials: 'KP',
  title: 'Data Analyst · Data Scientist · ML Engineer · AI Developer',
  tagline: 'I turn messy data into decisions.',
  location: 'New Delhi, India',
  about:
    "I'm an MCA (AI & ML) student who builds things at the intersection of data and product — dashboards that executives actually open, models that ship instead of sitting in a notebook, and full-stack platforms that put both to work. My tools of choice are Python, SQL, Power BI, and React, and lately I've been deep in building CareerIQ, an AI career-intelligence platform, and a real-time sales analytics pipeline on Kafka and Postgres.",
  resumeUrl: '/resume.pdf',
  email: 'your-email@example.com',
  // TODO: replace with a real headshot — see README "Adding your photo" section.
  photo: '/profile-photo.jpg',
  availableForHire: true,
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/panKhushi', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: 'Linkedin' },
  { label: 'Instagram', href: 'https://instagram.com/your-handle', icon: 'Instagram' },
  { label: 'Email', href: 'mailto:your-email@example.com', icon: 'Mail' },
]

export const heroStats = [
  { label: 'rows processed', value: '1.9M+' },
  { label: 'projects shipped', value: '20+' },
  { label: 'db tables designed', value: '20' },
  { label: 'core stack', value: 'Py · SQL · React' },
]
