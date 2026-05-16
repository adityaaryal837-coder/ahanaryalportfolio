import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'

const Blog = () => {
  const posts = [
    {
      title: 'How to Master Nepal GK in 30 Days',
      category: 'Strategy',
      date: 'May 15, 2024',
      img: 'Strategy',
    },
    {
      title: 'Deciphering the Constitution: A Guide for Aspirants',
      category: 'Constitution',
      date: 'May 12, 2024',
      img: 'Constitution',
    },
    {
      title: 'Daily Habits of Successful Government Officers',
      category: 'Motivation',
      date: 'May 08, 2024',
      img: 'Habits',
    },
  ]

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif-elegant italic mb-4">Aspirant <span className="text-nepal-red">Insights</span></h2>
            <p className="text-white/40">Thoughts on preparation, discipline, and the path ahead.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-nepal-red transition-colors">
            View All Posts <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-neutral-900 rounded-3xl overflow-hidden mb-6 border border-white/5">
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6">
                    <span className="bg-nepal-red text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                 </div>
                 {/* Placeholder Image Overlay */}
                 <div className="w-full h-full flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <span className="text-4xl font-black italic">{post.img}</span>
                 </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-white/30 mb-3 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={12} /> Ahan Aryal</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-luxury-gold transition-colors leading-tight">
                {post.title}
              </h3>
              
              <button className="flex items-center gap-2 text-nepal-red font-bold text-sm uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                Read Full Article <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
