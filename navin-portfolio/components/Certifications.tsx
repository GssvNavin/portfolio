'use client'

import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

type Cert = {
  icon?: string
  badge?: string
  name: string
  issuer: string
  year: string
  status: string
  color: string
  extra?: string
}

const certs: Cert[] = [
  {
    icon: '🤖',
    name: 'Google AI Professional',
    issuer: 'Google',
    year: 'Certificate of Completion',
    status: 'verified',
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: '☁️',
    name: 'GCP Data Engineer',
    issuer: 'Google Cloud',
    year: '[Add Year]',
    status: 'placeholder',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: '🔷',
    name: 'Microsoft Azure Data Engineer',
    issuer: 'Microsoft',
    year: '[Add Year]',
    status: 'placeholder',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    icon: '🎓',
    name: 'BE in Electrical & Electronics Engineering',
    issuer: 'Anna University, Chennai',
    year: '2010 – 2014',
    status: 'verified',
    color: 'from-blue-700 to-blue-900',
    extra: 'CGPA: 9.46 · College Topper',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="section-tag mb-3">Certifications & Education</p>
          <h2 className="font-serif text-4xl md:text-5xl text-blue-900 leading-tight mb-4 tracking-tight">
            <span className="italic text-blue-600">Credentials</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mb-14 text-[1.02rem]">
            Professional certifications validating cloud, data, and AI expertise.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,42,74,0.12)' }}
                className="bg-white rounded-2xl border border-blue-100 p-6 flex flex-col items-center text-center gap-4 shadow-sm transition-shadow duration-300"
              >
                {c.badge ? (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md bg-black flex items-center justify-center">
                    <img src={c.badge} alt={c.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl shadow-md`}>
                    {c.icon}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm leading-snug mb-1">{c.name}</h4>
                  <p className="text-slate-400 text-xs">{c.issuer}</p>
                  {c.extra && <p className="text-blue-600 text-xs font-semibold mt-1">{c.extra}</p>}
                </div>
                <div className="flex flex-col gap-1.5 items-center">
                  {c.status === 'verified' ? (
                    <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold rounded-full">
                      ✓ {c.year}
                    </span>
                  ) : (
                    <>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold rounded-full">
                        {c.year}
                      </span>
                      <span className="text-[10px] text-slate-400">Click to update</span>
                    </>
                  )}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-slate-400 text-sm mt-8">
            Replace placeholder details with your actual certifications and education ✏️
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
