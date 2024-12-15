'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, MessageCircle } from 'lucide-react'

interface Message {
  text: string
  sender: 'user' | 'bot'
}

export default function Agyat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    setMessages(prev => [...prev, { text, sender }])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    addMessage(input, 'user')
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      const response = generateBotResponse(input)
      addMessage(response, 'bot')
    }, 1000)
  }

  const generateBotResponse = (userInput: string) => {
    const lowercaseInput = userInput.toLowerCase()
    if (lowercaseInput.includes('work') || lowercaseInput.includes('hire') || lowercaseInput.includes('job')) {
      return "That's great that you're interested in working with Sunil! He's an exceptional cybersecurity expert and ethical hacker. Would you like me to tell you more about his skills and experience?"
    } else if (lowercaseInput.includes('skills') || lowercaseInput.includes('experience')) {
      return "Sunil has over 5 years of experience in cybersecurity and ethical hacking. He's proficient in penetration testing, vulnerability assessment, and secure software development. His expertise would be a valuable asset to any team. Would you like to discuss potential collaboration opportunities?"
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('reach')) {
      return "You can reach out to Sunil directly through the contact form on this page. Just fill out the form with your details and message, and Sunil will get back to you as soon as possible."
    } else {
      return "I'm here to help you learn more about Sunil Bokare and his expertise in cybersecurity. Is there anything specific you'd like to know about his skills, projects, or how you could work together?"
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center"
      >
        <MessageCircle size={20} className="mr-2" />
        Chat with Agyat
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-md rounded-lg shadow-xl flex flex-col max-h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
                <h3 className="font-bold">Chat with Agyat</h3>
                <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                  <X size={20} />
                </button>
              </div>
              <div ref={chatRef} className="flex-grow overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${
                      message.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <span
                      className={`inline-block p-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

