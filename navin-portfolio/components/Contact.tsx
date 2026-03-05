'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, FileText, Github } from 'lucide-react'
import FadeIn from './FadeIn'

const links = [
  {
    icon: <Mail size={20} />,
    label: 'gssvnavin@gmail.com',
    href: 'mailto:gssvnavin@gmail.com',
    desc: 'Email',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'linkedin.com/in/gssvnavin',
    href: 'https://www.linkedin.com/in/gssvnavin/',
    desc: 'LinkedIn',
  },
  {
    icon: <FileText size={20} />,
    label: 'medium.com/@gssvnavin',
    href: 'https://medium.com/@gssvnavin',
    desc: 'Medium',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub Profile',
    href: 'https://github.com/',
    desc: 'GitHub',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f2a4a 0%, #1a4880 60%, #2563b0 100%)' }}
    >
      {/* Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.15) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <p className="section-tag mb-3" style={{ color: '#38bdf8' }}>Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4 tracking-tight">
            Let's Build <span className="italic text-blue-300">Something Great</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mb-6" style={{ background: '#0ea5e9' }} />
          <p className="text-blue-200 max-w-lg mx-auto mb-14 text-[1.02rem] leading-relaxed">
            Open to senior architecture roles, consulting engagements, and thought leadership collaborations.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((l, i) => (
            <FadeIn key={l.desc} delay={i * 0.1}>
              <motion.a
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl text-white transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.14)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.5)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(14,165,233,0.25)' }}>
                  {l.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-0.5">{l.desc}</p>
                  <p className="text-white text-xs font-medium leading-tight">{l.label}</p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
