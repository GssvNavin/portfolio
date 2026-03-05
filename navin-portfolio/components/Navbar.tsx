'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Articles', href: '#articles' },
  { label: 'Certs',    href: '#certifications' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.35 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-blue-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a
            href="#"
            className="font-serif text-xl text-blue-900 tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            Navin<span className="text-accent"> G.S.S.V</span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm font-medium hover-underline transition-colors duration-200 ${
                    active === l.href.slice(1)
                      ? 'text-blue-600'
                      : scrolled ? 'text-slate-500 hover:text-blue-600' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
            className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
              scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
            }`}
          >
            Hire Me
          </button>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-lg md:hidden"
          >
            <ul className="flex flex-col p-4 gap-2">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
