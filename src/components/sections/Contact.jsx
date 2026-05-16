import React from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor - Minimal Nepal Map Silhouette (Placeholder) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
         <div className="w-[80vw] h-[40vw] border-2 border-nepal-red/40 rounded-[100px] blur-3xl transform -rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-serif-elegant italic mb-8">Get in <span className="text-nepal-red">Touch</span></h2>
            <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-md">
              Whether you have a question about the preparation journey, resource sharing, or just want to connect, feel free to reach out.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: 'Email', value: 'contact@ahanaryal.com.np' },
                { icon: <Phone />, label: 'Phone', value: '+977 98XXXXXXXX' },
                { icon: <MapPin />, label: 'Location', value: 'Kathmandu, Nepal' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-luxury-gold group-hover:bg-nepal-red transition-all group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-xl font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-16">
               {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Your Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-nepal-red transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-nepal-red transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-nepal-red transition-colors" placeholder="Regarding Preparation Resources" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-nepal-red transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>

              <button className="w-full py-5 bg-nepal-red text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-red-700 transition-all group">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
