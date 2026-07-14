import { domains } from '@/data/domains'
import { DomainCard } from '@/components/DomainCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Projects() {
  return (
    <div className="container-page py-20 md:py-28">
      <SectionHeading eyebrow="Projects" title="Browse by domain" description="Each domain is its own space — pick one to see the projects, tech stack, and results inside it." />
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {domains.map((domain, i) => (
          <DomainCard key={domain.slug} domain={domain} index={i} />
        ))}
      </div>
    </div>
  )
}
