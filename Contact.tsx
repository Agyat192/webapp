'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSectionHeader from './AnimatedSectionHeader'
import Agyat from './Agyat'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Log the form data (for demonstration purposes)
    console.log('Form submitted:', { name, email, message })

    // In a real-world scenario, you would send this data to a server
    // For now, we'll just simulate a successful submission
    setSubmitStatus('success')
    setName('')
    setEmail('')
    setMessage('')
    setIsSubmitting(false)
  }

  return (
    <section className="py-12 bg-white min-h-screen relative">
      <div className="container mx-auto px-4">
        <AnimatedSectionHeader>Contact Me</AnimatedSectionHeader>
        <p className="text-lg mb-8 text-center">
          Feel free to get in touch with me for collaboration, consulting, or just to have a conversation about tech and cybersecurity!
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-600">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-600">An error occurred. Please try again later.</p>
            )}
          </motion.form>
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Chat with Agyat</h3>
              <p className="mb-4">
                Have a quick question? Chat with Agyat, our AI assistant, for immediate responses about my skills, experience, or availability.
              </p>
              <Agyat />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

