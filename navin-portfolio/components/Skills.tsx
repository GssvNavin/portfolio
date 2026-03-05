'use client'

import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const skillGroups = [
  {
    category: 'Cloud & Platform Architecture',
    icon: '☁️',
    color: 'from-sky-400 to-blue-600',
    skills: ['GCP', 'Microsoft Azure', 'Cloud-Native Data Platform Design', 'Cloud Migration Strategy', 'BigQuery', 'Dataflow', 'Pub/Sub', 'Vertex AI', 'GCS'],
  },
  {
    category: 'Data Architecture & Governance',
    icon: '🏗️',
    color: 'from-blue-500 to-blue-700',
    skills: ['Enterprise Data Modeling (Erwin)', 'Data Vault', 'Data Governance', 'Data Interoperability', 'Metadata Management', 'Cost Optimization', 'Data Mesh', 'Lineage Tracking', 'RBAC', 'Dataplex'],
  },
  {
    category: 'AI-Enabled Data Architecture',
    icon: '🤖',
    color: 'from-accent to-blue-500',
    skills: ['AI-Ready Data Platforms', 'Snowpark – Anomaly Detection', 'Automated Data Quality Frameworks', 'Generative AI for Metadata & Governance', 'AI Workload Cost Optimization', 'LLM Applications', 'Prompt Engineering'],
  },
  {
    category: 'Data Engineering & Pipelines',
    icon: '⚙️',
    color: 'from-blue-700 to-blue-900',
    skills: ['Informatica', 'PySpark', 'Dataform', 'ETL / ELT Pipelines', 'Snowflake Streams & Tasks', 'Batch & Real-Time Processing', 'Data Quality Frameworks'],
  },
  {
    category: 'Snowflake',
    icon: '❄️',
    color: 'from-cyan-400 to-sky-600',
    skills: ['Snowpark', 'Snowflake Streams & Tasks', 'Data Sharing', 'Zero-Copy Cloning', 'Data Warehousing'],
  },
  {
    category: 'Storage & Databases',
    icon: '🗄️',
    color: 'from-blue-600 to-indigo-700',
    skills: ['SQL Server', 'RDBMS', 'OLAP Systems', 'Azure Blob Storage', 'GCS', 'Azure Synapse', 'SSIS'],
  },
  {
    category: 'Programming & Analytics',
    icon: '💻',
    color: 'from-blue-400 to-blue-600',
    skills: ['SQL', 'Python', 'PySpark', 'DAX', 'KPI Frameworks'],
  },
  {
    category: 'Analytics & BI',
    icon: '📊',
    color: 'from-blue-400 to-cyan-500',
    skills: ['Power BI (DAX, KPI Frameworks)', 'SSRS', 'Data Visualization', 'Executive Dashboards', 'Business Intelligence'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="section-tag mb-3">Core Skills</p>
          <h2 className="font-serif text-4xl md:text-5xl text-blue-900 leading-tight mb-4 tracking-tight">
            Technologies &amp;{' '}
            <span className="italic text-blue-600">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mb-14 text-[1.02rem]">
            A broad stack spanning architecture design, cloud platforms, data engineering, and AI integration.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.07}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,42,74,0.12)' }}
                className="rounded-2xl border border-blue-100 bg-slate-50 p-6 h-full transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-lg`}>
                    {group.icon}
                  </div>
                  <span className="text-xs font-bold tracking-[0.14em] uppercase text-blue-500">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.04, backgroundColor: '#dbeafe', color: '#1a4880' }}
                      className="px-3 py-1 bg-white border border-blue-200 text-blue-800 text-xs font-medium rounded-lg cursor-default transition-colors duration-150"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
