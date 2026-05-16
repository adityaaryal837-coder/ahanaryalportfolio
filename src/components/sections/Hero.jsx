import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Github, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-nepal-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main Title */}
          <div className="relative mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
              className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter opacity-10 select-none"
            >
              PORTFOLIO
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h2 className="text-4xl md:text-7xl font-serif-elegant italic text-luxury-gold tracking-tight">
                Future Kharidar Officer
              </h2>
            </motion.div>
          </div>

          {/* Subtitle / Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl max-w-2xl font-light tracking-widest text-white/60 mb-12"
          >
            “Discipline is the bridge between ambition and achievement.”
          </motion.p>

          {/* Profile Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="relative w-64 h-80 md:w-80 md:h-96 glass rounded-2xl overflow-hidden border border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            {/* Placeholder for portrait */}
            <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
              <span className="text-white/20 font-serif-elegant italic text-2xl uppercase tracking-widest">
                Ahan Aryal
              </span>
            </div>
            
            {/* Nepal Accent */}
            <div className="absolute top-4 right-4 w-8 h-8 z-20">
               <div className="w-full h-full bg-nepal-red/40 blur-md rounded-full" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-2 h-2 bg-white rounded-full" />
               </div>
            </div>
          </motion.div>

          {/* Socials */}
          <div className="flex gap-6 mt-12">
            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + (i * 0.1) }}
                className="p-3 glass rounded-full hover:bg-nepal-red/20 transition-all text-white/50 hover:text-white"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
            <ArrowDown size={16} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
