'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface Skill {
  name: string
  description: string
}

interface Project {
  name: string
  description: string
}

interface SkillModalProps {
  domain: string
  skills: Skill[]
  projects: Project[]
  onClose: () => void
}

export default function SkillModal({ domain, skills, projects, onClose }: SkillModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    setTimeout(onClose, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{domain} Skills</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gray-100 rounded-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4">Related Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    className="bg-gray-100 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + skills.length * 0.1 }}
                  >
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{project.name}</h4>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

