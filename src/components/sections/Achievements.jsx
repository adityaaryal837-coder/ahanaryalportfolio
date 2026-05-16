import React from 'react'
import { motion } from 'framer-motion'
import { Award, FileDown, Eye, CheckCircle } from 'lucide-react'

const Achievements = () => {
  const stats = [
    { label: 'Mock Tests Taken', value: '150+', icon: <CheckCircle /> },
    { label: 'GK Topics Mastered', value: '500+', icon: <Award /> },
    { label: 'Preparation Months', value: '12+', icon: <CheckCircle /> },
    { label: 'Success Rate (Mocks)', value: '92%', icon: <Award /> },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl flex flex-col items-center text-center group"
              >
                <div className="text-nepal-red mb-4 group-hover:scale-125 transition-transform duration-500">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-black mb-1">{stat.value}</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CV Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl relative overflow-hidden flex flex-col justify-center border border-luxury-gold/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 blur-[80px]" />
            <h2 className="text-4xl font-serif-elegant italic mb-6">Curriculum <span className="text-luxury-gold">Vitae</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Detailed record of academic achievements, professional background, and the progressive journey in public service preparation. Download the official resume of Ahan Aryal.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <button className="px-8 py-4 bg-nepal-red text-white font-bold rounded-xl flex items-center gap-3 hover:bg-red-700 transition-all group">
                 <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
                 Download CV
               </button>
               <button className="px-8 py-4 glass text-white font-bold rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all">
                 <Eye size={20} />
                 Preview Resume
               </button>
            </div>
            
            {/* Visual Decor */}
            <div className="mt-12 flex items-center gap-4 opacity-30 grayscale">
               <span className="text-sm font-bold tracking-widest uppercase">Verified Aspirant</span>
               <div className="h-px flex-1 bg-white/20" />
               <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-[10px] font-bold">NP</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
