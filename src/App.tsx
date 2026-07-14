import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Loader } from '@/components/ui/Loader'

// Route-level code splitting: every page is a separate chunk, loaded on demand.
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Skills = lazy(() => import('@/pages/Skills'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const Projects = lazy(() => import('@/pages/Projects'))
const ProjectDomain = lazy(() => import('@/pages/ProjectDomain'))
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'))
const Blogs = lazy(() => import('@/pages/Blogs'))
const BlogDetail = lazy(() => import('@/pages/BlogDetail'))
const Resume = lazy(() => import('@/pages/Resume'))
const Achievements = lazy(() => import('@/pages/Achievements'))
const Certificates = lazy(() => import('@/pages/Certificates'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:domain" element={<ProjectDomain />} />
            <Route path="/projects/:domain/:id" element={<ProjectDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}
