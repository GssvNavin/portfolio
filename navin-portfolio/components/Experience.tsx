'use client'

import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const jobs = [
  {
    role: 'Senior Associate – Data (GCP Data & AI Architect)',
    company: 'QBrainX',
    domain: 'Retail & Healthcare · Cloud',
    period: 'Aug 2024 – Present',
    current: true,
    bullets: [
      'Led the architecture of a cloud-native healthcare compliance platform on Google Cloud, using BigQuery and Python to build AI-ready data pipelines validating CMS-2552 cost reporting data against 1.27M+ hospital records.',
      'Designed and delivered Retail data platform solutions — building scalable pipelines for customer analytics, inventory intelligence, and sales performance reporting across multi-channel retail operations.',
      'Developed an intelligent compliance assistant application guiding developers through complex CMS reporting rules with automated validation insights for healthcare cost reporting workflows.',
      'Engineered high-performance batch and real-time pipelines using Informatica, PySpark, Snowflake Streams & Tasks, and Dataform — processing millions of daily records while reducing latency by 60%.',
      'Established enterprise-grade governance frameworks including data classification, lineage tracking, RBAC, and secure data sharing across 6 internal teams and 2 external partners — reducing audit complexity by 75%.',
    ],
    tags: ['GCP', 'BigQuery', 'PySpark', 'Dataform', 'Snowflake', 'Informatica', 'Python', 'Retail Analytics'],
  },
  {
    role: 'Staff Engineer → Module Lead → Senior Software Engineer → Software Engineer',
    company: 'Odessa Inc.',
    domain: 'FinTech · Leasing & Banking',
    period: 'Apr 2014 – Apr 2024',
    current: false,
    bullets: [
      'Led enterprise-scale data platform modernisation across Azure and SQL Server, supporting 15+ financial products in leasing and banking.',
      'Re-engineered data architecture and performance strategies, reducing query response times by 45% and improving throughput for critical reporting workloads.',
      'Standardised enterprise BI platforms — migrated 40+ SSRS reports to Power BI, increasing adoption by 120% and reducing ad-hoc reporting by 60%.',
      'Drove cloud migration strategy and multi-cloud data platform design bridging Azure and Snowflake ecosystems.',
    ],
    tags: ['Azure', 'SQL Server', 'Snowflake', 'Power BI', 'SSRS', 'Data Architecture'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="section-tag mb-3">Work Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl text-blue-900 leading-tight mb-4 tracking-tight">
            Career <span className="italic text-blue-600">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mb-14 text-[1.02rem]">
            Over a decade delivering enterprise data solutions across FinTech and Healthcare.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-blue-200 hidden md:block" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="md:pl-16 relative">
                  {/* Dot */}
                  <div className="absolute left-3 top-6 w-4 h-4 rounded-full hidden md:flex items-center justify-center"
                    style={{ background: job.current ? '#0ea5e9' : '#3b82c4', border: '3px solid white', boxShadow: job.current ? '0 0 0 3px rgba(14,165,233,0.3)' : '0 0 0 2px rgba(59,130,196,0.2)' }}>
                    {job.current && (
                      <motion.div
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-4 h-4 rounded-full bg-accent"
                      />
                    )}
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-2xl border border-blue-100 p-6 md:p-7 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="font-semibold text-blue-900 text-lg">{job.role}</h3>
                        <p className="text-blue-500 text-sm font-medium mt-0.5">
                          {job.company}{job.domain ? ` · ${job.domain}` : ''}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {job.current && (
                          <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                            Current
                          </span>
                        )}
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                          {job.period}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                          <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {job.tags.map(t => (
                        <span key={t} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
