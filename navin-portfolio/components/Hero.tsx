'use client'

import { useRef, useState, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Upload, ChevronDown, Linkedin, FileText, Github } from 'lucide-react'

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
  item: {
    hidden: { opacity: 0, y: 30 },
    show:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } },
  },
}

export default function Hero() {
  const [avatar, setAvatar] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (!f) return
    const reader = new FileReader()
    reader.onload = ev => setAvatar(ev.target?.result as string)
    reader.readAsDataURL(f)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060f1e 0%, #0f2a4a 40%, #1a4880 75%, #2563b0 100%)' }}
    >
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 65%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-48 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 65%)' }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-center">

          {/* Left — content */}
          <motion.div variants={stagger.container} initial="hidden" animate="show">
            <motion.div variants={stagger.item} className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent2">
                Open to Senior Architect Roles
              </span>
            </motion.div>

            <motion.h1
              variants={stagger.item}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-4"
            >
              Navin
              <br />
              <span className="italic text-blue-300">G.S.S.V</span>
            </motion.h1>

            <motion.p variants={stagger.item} className="text-blue-200 text-lg font-medium mb-5">
              GCP Data & AI Architect · Snowflake · Azure · 11 Years Experience
            </motion.p>

            <motion.p
              variants={stagger.item}
              className="text-white/75 text-lg leading-relaxed max-w-[560px] mb-8"
            >
              Designing scalable data platforms and AI-ready architectures that
              transform enterprise data into actionable intelligence.
            </motion.p>

            <motion.div variants={stagger.item} className="flex flex-wrap gap-2 mb-10">
              {['AI', 'GCP', 'Data Architect', 'Snowflake', 'PySpark', 'Data Vault', 'Vertex AI', 'Gemini', 'Power BI', 'Dataform'].map(tag => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-full text-white/90"
                  style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={stagger.item} className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-800 font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.28)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={stagger.item} className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/gssvnavin/" target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://medium.com/@gssvnavin" target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors">
                <FileText size={20} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — avatar card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22,1,0.36,1] }}
            className="hidden lg:flex flex-col items-center gap-5"
          >
            <div
              className="rounded-2xl p-6 w-full flex flex-col items-center gap-5"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(12px)' }}
            >
              {/* Avatar */}
              <div className="relative">
                <div
                  className="w-40 h-40 rounded-full overflow-hidden cursor-pointer flex items-center justify-center group"
                  style={{ border: '3px solid rgba(255,255,255,0.25)', background: '#1a4880' }}
                  onClick={() => fileRef.current?.click()}
                >
                  {avatar ? (
                    <img src={avatar} alt="Navin" className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-white/60 group-hover:text-white/90 transition-colors">
                      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className="text-xs text-center leading-tight px-2">Click to add<br/>your photo</span>
                    </div>
                  )}
                </div>
                <motion.div
                  className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                  style={{ background: '#0ea5e9' }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => fileRef.current?.click()}
                >
                  <Upload size={14} className="text-white" />
                </motion.div>
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />

              <div className="text-center">
                <p className="text-white font-semibold text-lg font-serif">Navin G.S.S.V</p>
                <p className="text-blue-200 text-sm">GCP Data & AI Architect</p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {[
                  { num: '11+', label: 'Years Exp.' },
                  { num: '60%', label: 'Latency Reduced' },
                  { num: '1.27M+', label: 'Records / Day' },
                  { num: '75%', label: 'Audit Complexity ↓' },
                ].map(s => (
                  <div
                    key={s.label}
                    className="rounded-xl p-3 text-center"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                  >
                    <p className="text-white font-serif text-xl leading-none">{s.num}</p>
                    <p className="text-blue-200 text-[10px] mt-1 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="px-4 py-2 rounded-full text-xs font-semibold text-white flex items-center gap-2"
              style={{ background: 'rgba(14,165,233,0.25)', border: '1px solid rgba(14,165,233,0.4)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent2" />
              Retail & FinTech Expert
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
