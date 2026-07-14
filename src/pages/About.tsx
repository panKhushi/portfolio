import { motion } from 'framer-motion'
import { MapPin, GraduationCap } from 'lucide-react'
import { profile } from '@/data/profile'
import { education } from '@/data/timeline'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function About() {
  return (
    <div className="container-page py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center gap-6"
      >
        <div className="h-20 w-20 shrink-0 rounded-2xl overflow-hidden border border-[var(--color-border)]">
          <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="eyebrow">About</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-2 text-[var(--color-text)]">The person behind the dashboards.</h1>
        </div>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-[1fr_0.7fr] gap-14">
        <div className="space-y-5 text-[var(--color-muted)] leading-relaxed text-[15px]">
          <p>{profile.about}</p>
          <p>
            My work sits at the point where analysis becomes product — I don't just want a model with a good accuracy score, I want it wired
            into something someone can actually use. That's why most of my recent projects pair a data or ML component with a real frontend:
            CareerIQ pairs an AI resume-intelligence pipeline with dashboards for students, colleges, and recruiters, and my sales analytics
            pipeline pairs a Kafka producer with Power BI-ready views, not just a Jupyter notebook.
          </p>
          <p>
            I'm based in {profile.location}, currently finishing an MCA in AI &amp; ML, and looking for a Data Analyst or Data Science role
            where I can keep doing exactly that: turning ambiguous data problems into something people trust and use.
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text)] pt-2">
            <MapPin size={15} className="text-[var(--color-amber)]" />
            {profile.location}
          </div>
        </div>

        <div className="card-surface rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap size={17} className="text-[var(--color-teal)]" />
            <h3 className="font-display font-semibold text-[var(--color-text)]">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.id} className="border-l-2 border-[var(--color-border)] pl-4 relative">
                <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[var(--color-amber)]" />
                <div className="font-mono text-xs text-[var(--color-muted)]">{item.period}</div>
                <div className="font-medium text-[var(--color-text)] mt-1">{item.title}</div>
                <div className="text-sm text-[var(--color-muted)]">{item.org}</div>
                <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24">
        <SectionHeading eyebrow="How I work" title="Principles I actually follow" />
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {[
            { title: 'Ship end to end', body: 'A model in a notebook or a query in a console is half a project. I care about the interface someone else touches.' },
            { title: 'Measure the claim', body: 'Accuracy, precision, recall, load time — if a project makes a claim, it comes with the number behind it.' },
            { title: 'Design for the reader', body: 'Dashboards and reports are read by people with five minutes, not five hours. Clarity beats cleverness.' },
          ].map((p) => (
            <div key={p.title} className="card-surface rounded-2xl p-6">
              <h4 className="font-display font-semibold text-[var(--color-text)]">{p.title}</h4>
              <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
