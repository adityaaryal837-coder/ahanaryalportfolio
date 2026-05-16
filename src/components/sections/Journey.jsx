import React from 'react'
import { motion } from 'framer-motion'

const Journey = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Initial Decision',
      desc: 'Commitment to the Kharidar post preparation and public service.',
      align: 'left'
    },
    {
      year: 'Jan 2026',
      title: 'GK Mastery Phase',
      desc: 'Completed comprehensive study of World Geography and Nepal History.',
      align: 'right'
    },
    {
      year: 'Feb 2026',
      title: 'Administrative Foundation',
      desc: 'Focused study on the Constitution of Nepal and Civil Service Act.',
      align: 'left'
    },
    {
      year: 'March 2026',
      title: 'Mock Exam Series',
      desc: 'Achieved consistent top-tier results in weekly practice sets.',
      align: 'right'
    },
    {
      year: 'Current',
      title: 'Final Revision',
      desc: 'Refining current affairs and IQ solving speed.',
      align: 'left'
    }
  ]

  return (
    <section id="journey" className="py-24 bg-neutral-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-elegant italic mb-4">Preparation <span className="text-nepal-red">Journey</span></h2>
          <p className="text-white/40 tracking-widest uppercase text-sm">Consistent steps towards the Kharidar post</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10" />

          <div className="space-y-16">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex items-center justify-between w-full ${item.align === 'right' ? 'flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`w-[45%] ${item.align === 'right' ? 'text-left' : 'text-right'}`}>
                   <span className="text-luxury-gold font-bold text-xl mb-2 block">{item.year}</span>
                   <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                   <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Dot */}
                <div className="w-10 h-10 rounded-full glass border border-nepal-red/50 flex items-center justify-center z-10 bg-black">
                   <div className="w-3 h-3 bg-nepal-red rounded-full" />
                </div>

                {/* Spacer */}
                <div className="w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
