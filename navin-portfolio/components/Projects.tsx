'use client'

import { useRef, useState, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Upload, ExternalLink } from 'lucide-react'
import FadeIn from './FadeIn'

const projects = [
  {
    id: 'p1',
    type: 'AI · Healthcare',
    emoji: '🤖',
    title: 'HFS Bot – AI Functional Expert',
    desc: 'An LLM-powered chatbot acting as a domain expert for Healthcare Cost Reporting, helping developers navigate complex CMS standards and reporting logic with ease.',
    impact: 'Reduced domain expert dependency · Accelerated developer onboarding',
    tags: ['LLM', 'NotebookLM', 'Prompt Engineering', 'Healthcare'],
    accentColor: '#0ea5e9',
  },
  {
    id: 'p2',
    type: 'Analytics · FinTech',
    emoji: '📊',
    title: 'Power BI Executive Dashboard Suite',
    desc: 'A suite of three strategic dashboards — Financial Performance, Operations, and Executive — delivering real-time KPIs and data-driven intelligence to senior stakeholders.',
    impact: 'Enabled executive-level data-driven decision making',
    tags: ['Power BI', 'FinTech', 'KPI Design', 'DAX'],
    accentColor: '#3b82c4',
  },
  {
    id: 'p3',
    type: 'Data Engineering · Cloud',
    emoji: '🏗️',
    title: 'Enterprise Data Platform',
    desc: 'Designed a cloud-native, scalable data platform with high-volume ingestion pipelines, transformation layers, and governed analytics built on Azure Data Factory and Snowflake.',
    impact: 'Governed, cost-efficient platform serving enterprise analytics at scale',
    tags: ['Azure Data Factory', 'Snowflake', 'SQL Server', 'Data Governance'],
    accentColor: '#1a4880',
  },
  {
    id: 'p4',
    type: 'Data Quality · Snowflake',
    emoji: '✅',
    title: 'Automated Data Quality Framework',
    desc: 'Built an automated validation system across enterprise datasets — schema validation, completeness checks, and anomaly detection using Snowflake Snowpark and Python.',
    impact: 'Improved data reliability · Reduced manual QA effort significantly',
    tags: ['Snowpark', 'Python', 'SQL', 'Data Quality'],
    accentColor: '#2563b0',
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [img, setImg] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (!f) return
    const reader = new FileReader()
    reader.onload = ev => setImg(ev.target?.result as string)
    reader.readAsDataURL(f)
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.22,1,0.36,1] }}
      className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Image area */}
      <div
        className="h-48 relative cursor-pointer group flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}
        onClick={() => fileRef.current?.click()}
      >
        {img ? (
          <>
            <img src={img} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Upload size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 text-center px-4">
            <div className="text-4xl">{project.emoji}</div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white shadow-sm"
              style={{ background: project.accentColor }}
            >
              <Upload size={12} />
              Upload Screenshot
            </div>
            <p className="text-slate-400 text-xs">Click to add project image</p>
          </div>
        )}
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />

        {/* Type badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
          style={{ background: project.accentColor }}
        >
          {project.type}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-blue-900 text-base mb-2 leading-snug">{project.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1">{project.desc}</p>

        <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-100">
          <p className="text-xs text-blue-700 font-semibold">💡 {project.impact}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map(t => (
            <span key={t} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="section-tag mb-3">Featured Projects</p>
          <h2 className="font-serif text-4xl md:text-5xl text-blue-900 leading-tight mb-4 tracking-tight">
            Work That Makes <span className="italic text-blue-600">an Impact</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mb-14 text-[1.02rem]">
            A selection of AI, data engineering, and analytics projects across domains.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
