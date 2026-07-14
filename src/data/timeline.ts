import type { TimelineItem } from '@/types'

export const education: TimelineItem[] = [
  {
    id: 'mca',
    title: 'MCA — Artificial Intelligence & Machine Learning',
    org: 'K.R. Mangalam University, India',
    period: '2025 — 2027',
    location: 'Sohna, India',
    description: 'Specializing in AI/ML with a focus on applied data science, machine learning, and production AI systems.',
    bullets: ['Coursework in machine learning, deep learning, and statistics', 'Built multiple production-style full-stack + ML projects', 'Active in data analytics and AI project development'],
  },
  {
    id: 'bca',
    title: 'BCA — Computer Applications',
    org: 'Fairfield Institute of Management & Technology, India',
    period: '2022 — 2025',
    location: 'India',
    description: 'Foundation in programming, databases, and software engineering principles.',
    bullets: ['Core coursework in DBMS, data structures, and web development', 'Built early Python and SQL projects'],
  },
  {
    id: 'diploma',
    title: 'Diploma in Data Science',
    org: 'DUCAT, India',
    period: '2025 — 2026',
    location: 'India',
    description: 'Built a strong foundation in data analytics, statistics, Python, SQL, and machine learning for solving real-world business problems.',
    bullets: ['Hands-on training in Python, SQL, Pandas, NumPy, and data visualization',
    'Completed projects involving exploratory data analysis, machine learning, and predictive modeling'],
  }
]

export const experience: TimelineItem[] = [
  {
    id: 'freelance-analyst',
    title: 'Freelance Data Analyst',
    org: 'Self-employed / Freelancer.com',
    period: '2025 — Present',
    location: 'Remote',
    description: 'Delivering data analysis, dashboarding, and Python automation for small business clients.',
    bullets: ['Built Power BI dashboards and Excel reporting systems for clients', 'Positioned and delivered work across Data Analyst engagements', 'Delivered a Supply Chain Analyst-focused cover letter and proposal work'],
  },
  {
    id: 'personal-projects',
    title: 'Independent Projects — CareerIQ & Sales Analytics Pipeline',
    org: 'Personal / Portfolio',
    period: '2025 — Present',
    location: 'New Delhi, India',
    description: 'Building CareerIQ, an AI career-intelligence platform, and a real-time Kafka-based sales analytics pipeline.',
    bullets: ['Designed and seeded a 20-table Supabase database', 'Built an AI resume-intelligence pipeline with taxonomy-driven skill extraction', 'Built a Kafka producer, Docker/KRaft setup, and PostgreSQL schema with Power BI-ready views'],
  },
]
