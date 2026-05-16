import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react'
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Namaste! I am Ahan\'s AI Assistant. How can I help you learn more about his Kharidar preparation journey or resources?' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "You are the AI Personal Assistant for Ahan Aryal, a dedicated Nepal government aspirant preparing for the Kharidar post. Personality: Disciplined, polite, patriotic. Information: Ahan follows a 12-hour routine, masters GK/Constitution/IQ, and provides resources on this site. Tone: Professional Future Officer. Keep responses concise and focused on Ahan's journey.",
      })

      const chat = model.startChat({
        history: messages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        })),
      })

      const result = await chat.sendMessage(input)
      const response = await result.response
      const botResponse = response.text()

      setMessages(prev => [...prev, { role: 'bot', content: botResponse }])
    } catch (error) {
      console.error("Gemini Error:", error)
      setMessages(prev => [...prev, { role: 'bot', content: "I am experiencing a brief communication delay with the main office. Please try again or check the resources section." }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-nepal-red text-white rounded-full flex items-center justify-center shadow-2xl shadow-nepal-red/40 relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={28} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-nepal-red blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass rounded-[32px] flex flex-col overflow-hidden border border-white/10 shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-nepal-red to-red-800 text-white flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                     <Bot size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Officer Assistant</h4>
                    <div className="flex items-center gap-1.5">
                       <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                       <span className="text-[10px] uppercase tracking-widest font-medium opacity-80">Online</span>
                    </div>
                  </div>
               </div>
               <Sparkles size={18} className="opacity-50" />
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
               {messages.map((msg, i) => (
                 <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                      ? 'bg-nepal-red text-white rounded-tr-none' 
                      : 'bg-white/5 text-white/80 border border-white/5 rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                 </div>
               ))}
               {isTyping && (
                 <div className="flex justify-start">
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                       <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                       <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                       <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                 </div>
               )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/5">
               <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about preparation..."
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 pr-14 focus:outline-none focus:border-nepal-red transition-all text-sm"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-nepal-red rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform"
                  >
                    <Send size={18} />
                  </button>
               </div>
               <p className="text-[9px] text-center mt-3 text-white/20 uppercase tracking-[0.2em]">Powered by Gemini AI Engine</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Chatbot
