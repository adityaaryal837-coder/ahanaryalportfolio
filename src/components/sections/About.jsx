import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Clock, Heart } from 'lucide-react'

const About = () => {
  const values = [
    { icon: <Clock size={24} />, title: 'Discipline', desc: 'Consistency in preparation and lifestyle.' },
    { icon: <Shield size={24} />, title: 'Integrity', desc: 'Commitment to transparency and public trust.' },
    { icon: <Target size={24} />, title: 'Consistency', desc: 'Daily milestones towards the goal.' },
    { icon: <Heart size={24} />, title: 'Service', desc: 'Driven by the ambition to serve Nepal.' },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-nepal-red font-bold uppercase tracking-widest text-sm mb-4">The Aspirant</h3>
            <h2 className="text-4xl md:text-5xl font-serif-elegant italic mb-8">
              A Journey of Dedication and <span className="text-luxury-gold">Public Service Ambition</span>.
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 text-lg">
              Currently preparing for the Kharidar post, I am driven by a singular goal: to contribute to the administrative excellence of the Nepal Government. My journey is not just about passing an exam, but about developing the mindset of a leader and a public servant.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
               <div className="border-l-2 border-nepal-red pl-6">
                 <h4 className="text-2xl font-bold mb-2">Status</h4>
                 <p className="text-white/40">Intensive Preparation Phase</p>
               </div>
               <div className="border-l-2 border-luxury-gold pl-6">
                 <h4 className="text-2xl font-bold mb-2">Focus</h4>
                 <p className="text-white/40">General Knowledge & Admin</p>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-nepal-red/30 transition-all group"
              >
                <div className="text-nepal-red mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
