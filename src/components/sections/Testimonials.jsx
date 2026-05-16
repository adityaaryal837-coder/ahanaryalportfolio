import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mentor Rajesh',
      role: 'Senior Admin Officer',
      text: 'Ahan shows exceptional discipline and a deep understanding of administrative principles. A promising future officer.',
    },
    {
      name: 'Binita Sharma',
      role: 'Study Group Lead',
      text: 'His consistency in GK preparation is an inspiration to our entire study circle. Always helpful and focused.',
    },
    {
      name: 'Prakash Thapa',
      role: 'Ex-Kharidar Officer',
      text: 'The quality of notes Ahan prepares shows his dedication. He has the analytical mind required for the civil service.',
    },
  ]

  return (
    <section className="py-24 bg-neutral-950/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif-elegant italic mb-4">Words from <span className="text-luxury-gold">Mentors</span></h2>
          <div className="w-24 h-1 bg-nepal-red mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl relative"
            >
              <div className="text-nepal-red/20 absolute top-6 right-6">
                <Quote size={64} fill="currentColor" />
              </div>
              <p className="text-white/70 italic mb-8 relative z-10 leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nepal-red to-luxury-gold" />
                 <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{item.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
