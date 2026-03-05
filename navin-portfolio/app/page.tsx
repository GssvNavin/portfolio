'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Articles from '@/components/Articles'
import Certifications from '@/components/Certifications'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AIChatWidget from '@/components/AIChatPopup'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Articles />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
      <AIChatWidget />
    </main>
  )
}
