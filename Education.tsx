'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSectionHeader from './AnimatedSectionHeader'
import AchievementModal from './AchievementModal'
import { X } from 'lucide-react'

const achievements = [
  {
    title: 'CyberOps NetAcad Certification',
    description: 'Completed CyberOps course with a score of 98.3%',
    date: 'June 2023',
    image: 'https://media.licdn.com/dms/image/sync/v2/D5610AQGabWVk-zwMGA/image-shrink_480/image-shrink_480/0/1722597603731?e=1734854400&v=beta&t=QgsP5NIIKkcSjMiVMBKl27qitfh_eiq6nP4XoqYAjRk',
    details: 'This certification demonstrates proficiency in cybersecurity operations, including threat detection, incident response, and network defense strategies.'
  },
  {
    title: 'Ethical Hacking Hackathon Winner',
    description: '1st place in national ethical hacking competition',
    date: 'August 2023',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5XG0_nvLHhAfOxI9Wf5RAg85ygEw8oO0bEWbHJsmRHBmCEut02F9QtJJjjPd1iNZuFU&usqp=CAU',
    details: 'Led a team of 3 to victory in a 48-hour hackathon, demonstrating advanced penetration testing skills and innovative exploit development.'
  },
  {
    title: 'OSCP Certification',
    description: 'Obtained Offensive Security Certified Professional certification',
    date: 'December 2023',
    image: 'https://images.credly.com/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/twitter_thumb_201604_image.png',
    details: 'Successfully completed the challenging OSCP certification, showcasing advanced penetration testing skills and the ability to compromise complex networks.'
  },
  {
    title: 'Bug Bounty Hall of Fame',
    description: 'Recognized by major tech company for critical vulnerability discovery',
    date: 'February 2024',
    image: 'https://statusgator.com/blog/wp-content/uploads/2024/07/Blog-thumbnail-5.png',
    details: 'Identified and responsibly disclosed a critical security vulnerability in a Fortune 500 company\'s infrastructure, resulting in a significant bounty reward and public recognition.'
  }
]

interface EducationDetails {
  degree: string
  institution: string
  year: string
  details: string
}

const educationDetails: EducationDetails = {
  degree: 'Bachelor of Engineering in Electronics and Telecommunication',
  institution: 'Deogiri Institute of Engineering and Management Studies, Chhatrapati Sambhajinagar',
  year: '2024 To 2026',
  details: 'Focused on advanced topics in electronics and telecommunication, with a special emphasis on cybersecurity and ethical hacking. Participated in various technical competitions and workshops to enhance practical skills.'
}

export default function Education() {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null)
  const [showEducationModal, setShowEducationModal] = useState(false)

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <AnimatedSectionHeader>Education</AnimatedSectionHeader>
        <motion.div
          className="max-w-2xl mx-auto mb-12 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setShowEducationModal(true)}
        >
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{educationDetails.degree}</h3>
            <p className="text-gray-600">{educationDetails.institution}</p>
            <p className="text-gray-600">{educationDetails.year}</p>
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-6 text-center">Cybersecurity Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-gray-100 rounded-lg p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedAchievement(achievement)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
              <p className="text-gray-600 mb-2">{achievement.description}</p>
              <p className="text-sm text-gray-500">{achievement.date}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}

      <AnimatePresence>
        {showEducationModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{educationDetails.degree}</h2>
                <button
                  onClick={() => setShowEducationModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-600 mb-2">{educationDetails.institution}</p>
              <p className="text-gray-600 mb-4">{educationDetails.year}</p>
              <p className="text-gray-800">{educationDetails.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

