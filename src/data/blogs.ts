import type { BlogPost } from '@/types'

export const blogs: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'designing-a-20-table-schema',
    title: 'Designing a 20-Table Schema for an AI Career Platform',
    excerpt: 'Notes on modeling students, colleges, recruiters, and readiness scores into a schema that stays queryable at scale.',
    content: `## Why schema design comes first\n\nBefore any model or dashboard, CareerIQ needed a database that could represent students, colleges, recruiters, skills, and readiness scores without turning into a tangle of special cases.\n\n## The approach\n\nI started with the entities that had to exist no matter what — students, colleges, companies — and worked outward to the relationships between them, seeding everything with realistic Indian-context data so edge cases would show up early.\n\n## What I'd do differently\n\nGiven the chance again, I'd write the evaluation harness for data quality before seeding a million-plus rows, not after.`,
    category: 'Data Engineering',
    date: '2026-03-12',
    readTime: '6 min read',
    cover: '/projects/placeholder.svg',
  },
  {
    id: 'blog-2',
    slug: 'resume-parsing-lessons',
    title: 'What Breaks When You Parse 20 Real Resumes',
    excerpt: 'Image-only PDFs, inconsistent section headings, and a skills taxonomy that only knew about tech jobs.',
    content: `## The batch test\n\nRunning the resume-intelligence pipeline against 20 real resumes surfaced two problems fast: six were image-only PDFs, and the skills taxonomy barely covered non-technical roles.\n\n## Fixing taxonomy coverage\n\nExpanding the taxonomy to cover business, HR, design, law, and healthcare domains meant the extractor stopped silently failing on anyone who wasn't a software engineer.\n\n## What's still open\n\nOCR for scanned resumes is deferred, but it's the clear next step before this pipeline is production-ready.`,
    category: 'AI / NLP',
    date: '2026-02-20',
    readTime: '5 min read',
    cover: '/projects/placeholder.svg',
  },
  {
    id: 'blog-3',
    slug: 'kafka-for-analytics-portfolio',
    title: 'Why I Used Kafka for a Portfolio Analytics Project',
    excerpt: 'Overkill for a portfolio piece, or the right way to demonstrate real-time data thinking?',
    content: `## The case for Kafka\n\nA CSV-to-dashboard pipeline demonstrates SQL and BI skills. A Kafka producer feeding Postgres demonstrates something closer to how real analytics infrastructure actually works.\n\n## What it added\n\nBuilding the producer, the Docker/KRaft setup, and the schema together forced me to think about data integrity constraints the way an actual streaming system needs to.\n\n## The tradeoff\n\nIt's more infrastructure than a portfolio project strictly needs — but that's exactly what makes it a better signal of readiness for the role.`,
    category: 'Data Pipelines',
    date: '2026-01-18',
    readTime: '4 min read',
    cover: '/projects/placeholder.svg',
  },
]

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug)
