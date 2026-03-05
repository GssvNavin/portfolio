'use client'

import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const testimonials = [
  {
    quote: 'Navin brings a rare combination of deep technical knowledge and strategic thinking. His ability to translate complex data architecture challenges into practical, scalable solutions has been invaluable to our team.',
    author: '[Colleague Name]',
    title: '[Title · Company]',
    initial: 'A',
  },
  {
    quote: 'Working with Navin on our data modernisation initiative was a game-changer. His expertise in cloud-native architectures and AI integration helped us move faster and with far more confidence.',
    author: '[Colleague Name]',
    title: '[Title · Company]',
    initial: 'B',
  },
  {
    quote: 'Navin\'s approach to data governance and platform design set a new standard for our organisation. The AI-powered tools he introduced dramatically reduced onboarding time for new developers.',
    author: '[Colleague Name]',
    title: '[Title · Company]',
    initial: 'C',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="section-tag mb-3">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-blue-900 leading-tight mb-4 tracking-tight">
            What <span className="italic text-blue-600">Colleagues Say</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mb-14 text-[1.02rem]">
            Feedback from teammates and stakeholders. Replace placeholders with real LinkedIn recommendations.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative bg-slate-50 border border-blue-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Quote mark */}
                <div className="font-serif text-6xl text-blue-200 leading-none absolute top-4 left-6 select-none pointer-events-none">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#FCD34D">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed italic mb-6 mt-2">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-sm flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 text-sm">{t.author}</p>
                    <p className="text-slate-400 text-xs">{t.title} — Add via LinkedIn</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
