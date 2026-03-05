'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const testimonials = [
  {
    quote: "I had the pleasure of working closely with Navin G.S.S.V as a BI Developer at Odessa Inc. Navin consistently impressed me with his exceptional skills, dedication, and commitment to delivering high-quality solutions. His expertise in business intelligence, Azure Data Factory, data analysis, and visualization tools is truly remarkable. Navin possesses a deep understanding of data modeling, ETL processes, and database management, enabling him to design and implement robust BI solutions tailored to our organization's needs. Beyond their technical proficiency, Navin is a valuable team player who collaborates effectively with cross-functional teams. He is proactive, resourceful, and always willing to go the extra mile to ensure project success. I highly recommend Navin — his technical expertise, professionalism, and dedication make him a valuable asset to any organization seeking to harness the power of data.",
    author: 'Karthikeyan Govindaraj',
    title: 'Full Stack Developer',
    company: 'Odessa Inc.',
    date: 'March 12, 2024',
    relation: 'Managed Navin directly',
    initials: 'KG',
    rating: 5,
    placeholder: false,
  },
  {
    quote: 'Add another LinkedIn recommendation here — reach out to a former colleague or manager.',
    author: 'Add Colleague',
    title: 'Title · Company',
    company: '',
    date: '',
    relation: '',
    initials: '?',
    rating: 5,
    placeholder: true,
  },
]

export default function Testimonials() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-sky-500 mb-3">
            What People Say
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-serif text-4xl md:text-5xl text-blue-900 leading-tight mb-3 tracking-tight">
            Recommendations &amp;{' '}
            <em className="text-blue-600 not-italic italic">Testimonials</em>
          </h2>
          <div className="w-14 h-1 bg-sky-400 rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mb-14 text-base">
            What colleagues and managers say about working with Navin.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-7 h-full flex flex-col transition-all duration-300 ${
                  t.placeholder
                    ? 'bg-slate-50 border border-dashed border-slate-200'
                    : 'bg-white border border-blue-100 shadow-sm hover:shadow-lg'
                }`}
                style={{ borderTop: t.placeholder ? undefined : '3px solid #1a4880' }}
              >
                {!t.placeholder ? (
                  <>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, si) => (
                        <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <div className="font-serif text-5xl text-blue-100 leading-none absolute top-5 right-7 select-none pointer-events-none">
                      &ldquo;
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-2 flex-1">
                      {expanded[i] ? t.quote : t.quote.slice(0, 240) + (t.quote.length > 240 ? '...' : '')}
                    </p>
                    {t.quote.length > 240 && (
                      <button
                        onClick={() => setExpanded(prev => ({ ...prev, [i]: !prev[i] }))}
                        className="text-sky-500 text-xs font-semibold mb-4 text-left hover:text-sky-700 transition-colors"
                      >
                        {expanded[i] ? 'Show less ↑' : 'Read more ↓'}
                      </button>
                    )}

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg,#1a4880,#0ea5e9)' }}
                      >
                        {t.initials}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-blue-900 text-sm leading-tight">{t.author}</p>
                        <p className="text-slate-500 text-xs">{t.title} &middot; {t.company}</p>
                        {t.date && (
                          <p className="text-slate-400 text-[10px] mt-0.5">{t.date} &middot; {t.relation}</p>
                        )}
                      </div>
                      <a
                        href="https://www.linkedin.com/in/gssvnavin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-blue-600 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center gap-3 py-8 h-full">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl">+</div>
                    <p className="text-slate-400 font-medium text-sm">Add another recommendation</p>
                    <p className="text-slate-300 text-xs">Ask a colleague on LinkedIn</p>
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
