import type { ProjectDomain } from '@/types'

export const domains: ProjectDomain[] = [
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    shortLabel: 'Analytics',
    description: 'Dashboards, queries, and spreadsheet work that turn raw data into a decision — spanning SQL, Power BI, and Excel.',
    icon: 'BarChart3',
    accent: 'amber',
    projectCount: 15,
    subcategories: ['Dashboards', 'SQL', 'Power BI', 'Excel', 'EDA', 'Case Studies'],
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    shortLabel: 'Data Science',
    description: 'Statistical analysis, feature engineering, and predictive modeling — the layer between raw data and a shippable model.',
    icon: 'FlaskConical',
    accent: 'teal',
    projectCount: 10,
    subcategories: ['Statistics', 'Feature Engineering', 'Predictive Models', 'Time Series', 'Projects'],
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    shortLabel: 'ML',
    description: 'Trained, evaluated, and documented models — from churn prediction to sentiment analysis — with real accuracy numbers.',
    icon: 'Brain',
    accent: 'amber',
    projectCount: 6,
    subcategories: ['Regression', 'Classification', 'Clustering', 'Model Evaluation', 'Deployment'],
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    shortLabel: 'AI',
    description: 'Applied AI platforms and LLM-powered tools, including CareerIQ and an AI resume intelligence pipeline.',
    icon: 'Sparkles',
    accent: 'teal',
    projectCount: 5,
    subcategories: ['Generative AI', 'AI Agents', 'RAG', 'Prompt Engineering', 'LLM Projects'],
  },
  {
    slug: 'deep-learning',
    title: 'Deep Learning',
    shortLabel: 'Deep Learning',
    description: 'Neural network architectures — CNNs, sequence models, and transformers — applied to image and text tasks.',
    icon: 'Layers',
    accent: 'amber',
    projectCount: 3,
    subcategories: ['CNN', 'RNN/LSTM', 'Transformers', 'Computer Vision'],
  },
]

export const getDomain = (slug: string) => domains.find((d) => d.slug === slug)
