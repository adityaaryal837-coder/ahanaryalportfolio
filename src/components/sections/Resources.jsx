import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, FileText, Search, Filter } from 'lucide-react'

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'GK', 'Constitution', 'Current Affairs', 'IQ']

  const items = [
    { title: 'World Geography Summary', category: 'GK', date: '2024-05-10', type: 'PDF' },
    { title: 'Constitution of Nepal 2072', category: 'Constitution', date: '2024-05-12', type: 'PDF' },
    { title: 'Monthly Current Affairs - Baisakh', category: 'Current Affairs', date: '2024-05-15', type: 'PDF' },
    { title: 'IQ Logic & Speed Practice', category: 'IQ', date: '2024-05-14', type: 'DOCX' },
    { title: 'Civil Service Act Highlights', category: 'Constitution', date: '2024-05-11', type: 'PDF' },
    { title: 'History of Nepal Timeline', category: 'GK', date: '2024-05-09', type: 'PDF' },
  ]

  const filteredItems = activeFilter === 'All' 
    ? items 
    : items.filter(item => item.category === activeFilter)

  return (
    <section id="resources" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif-elegant italic mb-4">Study <span className="text-luxury-gold">Resources</span></h2>
            <p className="text-white/40 max-w-md">Curated notes and study materials for Lok Sewa aspirants.</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter ? 'bg-nepal-red text-white' : 'glass hover:bg-white/10 text-white/60'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass p-6 rounded-2xl group border border-white/5 hover:border-luxury-gold/30"
              >
                <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-neutral-900 rounded-xl text-luxury-gold">
                      <FileText size={24} />
                   </div>
                   <span className="text-[10px] bg-white/5 px-2 py-1 rounded-md text-white/40 font-bold uppercase tracking-widest">{item.type}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-luxury-gold transition-colors">{item.title}</h4>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-xs text-white/30 uppercase tracking-tighter">{item.category} • {item.date}</span>
                  <button className="flex items-center gap-2 text-sm font-bold text-nepal-red hover:underline decoration-2 underline-offset-4">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Resources
