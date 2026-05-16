import React from 'react'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Info */}
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-nepal-red/20 rounded-lg flex items-center justify-center border border-nepal-red/30">
               <span className="text-nepal-red font-black">AA</span>
             </div>
             <div>
               <h4 className="font-bold uppercase tracking-widest text-sm">Ahan Aryal</h4>
               <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Future Kharidar Officer</p>
             </div>
          </div>

          {/* Quote */}
          <div className="text-center md:text-left max-w-sm">
             <p className="text-xs text-white/40 italic font-serif-elegant">
               "Public service is not a job, it's a calling to contribute to the nation's integrity."
             </p>
          </div>

          {/* Scroll Up */}
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-nepal-red hover:text-white transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
           <p>© 2024 Ahan Aryal Portfolio</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-nepal-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-nepal-red transition-colors">Terms of Service</a>
           </div>
           <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
