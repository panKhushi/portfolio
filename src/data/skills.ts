import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'Java', level: 65 },
      { name: 'TypeScript', level: 78 },
    ],
  },
  {
    category: 'Analytics',
    icon: 'BarChart3',
    skills: [
      { name: 'Excel', level: 90 },
      { name: 'Power BI', level: 88 },
      { name: 'Tableau', level: 65 },
      { name: 'Statistics', level: 80 },
    ],
  },
  {
    category: 'Machine Learning & AI',
    icon: 'Brain',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 72 },
      { name: 'Artificial Intelligence', level: 78 },
      { name: 'NLP / LLM Tooling', level: 75 },
    ],
  },
  {
    category: 'Libraries & Frameworks',
    icon: 'Boxes',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Keras', level: 70 },
      { name: 'Matplotlib', level: 82 },
      { name: 'Seaborn', level: 80 },
      { name: 'React', level: 80 },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 65 },
      { name: 'Supabase', level: 82 },
    ],
  },
]
