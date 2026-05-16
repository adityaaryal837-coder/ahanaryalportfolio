import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Coffee, BookOpen, Utensils, Zap, Moon } from 'lucide-react'

const Routine = () => {
  const schedule = [
    { time: '05:00 AM', activity: 'Wake up & Physical Exercise', icon: <Zap /> },
    { time: '07:00 AM', activity: 'Core Subject Study Block I', icon: <BookOpen /> },
    { time: '10:00 AM', activity: 'Breakfast & Break', icon: <Coffee /> },
    { time: '11:00 AM', activity: 'Current Affairs & GK Revision', icon: <Sun /> },
    { time: '02:00 PM', activity: 'Lunch & Rest', icon: <Utensils /> },
    { time: '04:00 PM', activity: 'Mock Test & Practice Sets', icon: <Zap /> },
    { time: '07:00 PM', activity: 'Dinner & Relaxation', icon: <Utensils /> },
    { time: '09:00 PM', activity: 'Daily Review & Planning', icon: <Moon /> },
  ]

  return (
    <section className="py-24 bg-neutral-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-elegant italic mb-4">Daily <span className="text-nepal-red">Routine</span></h2>
          <p className="text-white/40 uppercase tracking-widest text-sm">Discipline in every hour</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-6 rounded-2xl flex items-center gap-6 border border-white/5 hover:bg-white/[0.07] transition-all"
            >
              <div className="text-luxury-gold shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="text-nepal-red font-bold text-xs uppercase tracking-widest">{item.time}</span>
                <p className="font-bold text-sm text-white/80">{item.activity}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Routine
