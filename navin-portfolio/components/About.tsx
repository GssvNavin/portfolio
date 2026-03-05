'use client'

import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

const highlights = [
  { icon: '🏗️', title: 'Enterprise Architecture', desc: 'End-to-end data platform design for enterprise-scale organisations across FinTech and Healthcare.' },
  { icon: '🧠', title: 'AI-Ready Platforms', desc: 'Building data foundations that power LLM apps, AI-assisted analytics, and ML workloads.' },
  { icon: '🔗', title: 'Data Mesh Advocate', desc: 'Championing domain-driven ownership and federated governance at enterprise scale.' },
  { icon: '✍️', title: 'Thought Leader', desc: 'Writing on Medium about modern data architecture, platform design, and AI integration.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="section-tag mb-3">About Me</p>
          <h2 className="font-serif text-4xl md:text-5xl text-blue-900 leading-tight mb-4 tracking-tight">
            Building the Data<br />
            <span className="italic text-blue-600">Foundations of Tomorrow</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Text */}
          <div className="space-y-5">
            {[
              <>
                <strong>Data & AI Architect specialising in Google Cloud</strong> data and AI platforms. I design scalable cloud-native architectures leveraging BigQuery, Dataflow, Vertex AI, and modern data platforms such as Snowflake.
              </>,
              <>
                Focused on building <strong>governance-driven, AI-ready data ecosystems</strong> that enable advanced analytics, machine learning, and enterprise transformation — while aligning data strategy with business outcomes.
              </>,
              <>
                With <strong>11+ years across FinTech and Healthcare</strong>, I have delivered solutions at Odessa Inc. and QBrainX — from enterprise BI modernisation to cloud-native compliance platforms processing 1.27M+ hospital records daily.
              </>,
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-slate-600 leading-relaxed text-[1.02rem]">{text}</p>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-2 pt-2">
                {['🏦 FinTech', '🏥 Healthcare', '🛒 Retail', '☁️ Google Cloud', '🤖 AI/ML'].map(b => (
                  <span key={b} className="px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.1} direction="left">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm border border-blue-100 hover:shadow-md hover:border-blue-200 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 text-sm mb-1">{h.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
