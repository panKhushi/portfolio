import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { useScrollToTop } from '@/hooks/useScrollToTop'

export function Layout() {
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
