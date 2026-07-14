export type ProjectDomainSlug =
  | 'data-analytics'
  | 'data-science'
  | 'machine-learning'
  | 'artificial-intelligence'
  | 'deep-learning'

export interface ProjectDomain {
  slug: ProjectDomainSlug
  title: string
  shortLabel: string
  description: string
  icon: string // lucide icon name
  accent: 'amber' | 'teal'
  projectCount: number
  subcategories: string[]
}

export interface ProjectMeta {
  label: string
  value: string
}

export interface Project {
  id: string
  domain: ProjectDomainSlug
  subcategory: string
  title: string
  tagline: string
  overview: string
  problem: string
  solution: string
  workflow: string[]
  techStack: string[]
  features: string[]
  challenges: string[]
  results: string[]
  meta: ProjectMeta[] // e.g. Accuracy, Dataset, Model Used, Libraries for ML; or Rows, Tables for analytics
  github?: string
  liveDemo?: string
  caseStudy?: string
  reportPdf?: string
  image: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: number // 0-100
}

export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export interface TimelineItem {
  id: string
  title: string
  org: string
  period: string
  location?: string
  description: string
  bullets?: string[]
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  fileUrl?: string
  category: string
}

export interface Achievement {
  id: string
  title: string
  org: string
  date: string
  description: string
  category: 'Hackathon' | 'Competition' | 'Certification' | 'Academic'
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // markdown
  category: string
  date: string
  readTime: string
  cover: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
