'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'
import FadeIn from './FadeIn'

const articles = [
  {
    date: 'May 2025',
    title: 'From Silos to Strategy — Reimagining the Modern Data Stack',
    desc: 'What truly matters in today\'s data landscape? Explores the shift from fragmented silos to unified, strategy-aligned data platforms that power intelligent decision-making.',
    tags: ['Data Strategy', 'Modern Stack', 'Architecture'],
    href: 'https://medium.com/@gssvnavin/from-silos-to-strategy-reimagining-the-modern-data-stack-8350ddd1a78d',
    live: true,
  },
  {
    date: 'Coming Soon',
    title: 'The Evolution of Data Architecture',
    desc: 'From traditional data warehouses to modern distributed architectures — exploring how enterprise data platforms have transformed for cloud and AI workloads.',
    tags: ['Data Mesh', 'Cloud', 'AI Workloads'],
    href: 'https://medium.com/@gssvnavin',
    live: false,
  },
  {
    date: 'Coming Soon',
    title: 'Modern Data Platforms & Interoperability',
    desc: 'How modern platforms enable seamless data sharing, cross-platform interoperability, and AI-ready architectures that scale across the enterprise.',
    tags: ['Interoperability', 'Data Sharing', 'Snowflake'],
    href: 'https://medium.com/@gssvnavin',
    live: false,
  },
]

export default function Articles() {
  return (
    <section
      id="articles"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060f1e 0%, #0f2a4a 60%, #163a63 100%)' }}
    >
      {/* Background orb */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <p className="section-tag mb-3" style={{ color: '#38bdf8' }}>Thought Leadership</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4 tracking-tight">
            Articles on <span className="italic text-blue-300">Medium</span>
          </h2>
          <div className="w-16 h-1 rounded-full mb-4" style={{ background: '#0ea5e9' }} />
          <p className="text-blue-200 max-w-xl mb-14 text-[1.02rem]">
            Sharing perspectives on data architecture, modern platforms, and AI integration.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.1}>
              <motion.a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="flex flex-col h-full rounded-2xl p-6 transition-all duration-300 group"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.10)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.4)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-blue-300" />
                    <span className="text-xs text-blue-300 font-medium">{a.date}</span>
                  </div>
                  {a.live && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                      style={{ background: '#0ea5e9' }}>
                      Live
                    </span>
                  )}
                </div>

                <h3 className="text-white font-semibold text-base leading-snug mb-3 flex-1">
                  {a.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">{a.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {a.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 text-[10px] font-medium text-blue-200 rounded-md"
                      style={{ background: 'rgba(255,255,255,0.08)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all"
                  style={{ color: '#38bdf8' }}>
                  {a.live ? 'Read on Medium' : 'View all articles'}
                  <ExternalLink size={12} />
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
