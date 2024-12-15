'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, FileText } from 'lucide-react'

const skills = [
  {
    domain: 'Cybersecurity',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTX-qIpohYWvZP_abc2ZKdSlrSfND3FABiXV3V_C0HUOpoSDRaDAYTbV2gGc6OZw0B8ME&usqp=CAU',
    description: 'Protecting digital assets and systems from unauthorized access and cyber threats.',
    subPoints: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Security Auditing',
      'Incident Response',
    ],
  },
  {
    domain: 'Ethical Hacking',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGu2Jzd54vaAyLMHWwuWEFmci4gAy3xVntENAjDwOZtVIeAtfRbWkh87gEhIdNAX7Ctg&usqp=CAU',
    description: 'Identifying and addressing security vulnerabilities to strengthen system defenses.',
    subPoints: [
      'Network Exploitation',
      'Web Application Security',
      'Social Engineering',
      'Cryptography',
    ],
  },
  {
    domain: 'IoT Security',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4s1e6jRnLRcwWGP-iYL6-VovNfTXVz-ClNBCj48KyzvYIC9WsSmhj11OqLOT44pVZ8o&usqp=CAU',
    description: 'Securing interconnected devices and systems in the Internet of Things ecosystem.',
    subPoints: [
      'Device Hardening',
      'Secure Communication Protocols',
      'IoT Vulnerability Analysis',
      'Firmware Security',
    ],
  },
  {
    domain: 'Cloud Security',
    image: 'https://media.licdn.com/dms/image/D5612AQGeT6WMOu2Upg/article-cover_image-shrink_720_1280/0/1696467051571?e=2147483647&v=beta&t=PbsYB1gSui5fsUePM3WuCPqxIAlx49FJAXS44Ct53rA',
    description: 'Ensuring data protection and privacy in cloud computing environments.',
    subPoints: [
      'Cloud Infrastructure Protection',
      'Data Encryption',
      'Access Control Management',
      'Compliance and Governance',
    ],
  },
  {
    domain: 'Web Development',
    image: 'https://www.webstackacademy.com/wp-content/uploads/2023/11/001_developer__his_portfolio-2-1.jpg',
    description: 'Creating responsive and secure web applications using modern technologies.',
    subPoints: [
      'Front-end Development (React, Next.js)',
      'Back-end Development (Node.js, Express)',
      'Database Management (SQL, NoSQL)',
      'API Development and Integration',
    ],
  },
]

export default function Home() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const nextSkill = useCallback(() => {
    setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length)
  }, [])

  const prevSkill = useCallback(() => {
    setCurrentSkillIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length)
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    if (isAutoPlay) {
      intervalId = setInterval(() => {
        nextSkill()
      }, 5000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoPlay, nextSkill])

  const handleManualNavigation = (direction: 'prev' | 'next') => {
    setIsAutoPlay(false)
    if (direction === 'prev') {
      prevSkill()
    } else {
      nextSkill()
    }
  }

  return (
    <div className="bg-gray-100">
      <section className="pt-24 pb-12 flex items-center min-h-screen">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="https://signature.freefire-name.com/img.php?f=2&t=Sunil%20B" alt="Sunil Santosh Bokare" width={400} height={400} className="rounded-full mx-auto" />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">Sunil Santosh Bokare</h1>
            <p className="text-xl mb-4">Cybersecurity Defender | Ethical Hacker | Tech Enthusiast</p>
            <motion.blockquote
              className="border-l-4 border-blue-500 pl-4 italic mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              "Empowering security through innovation and dedication."
            </motion.blockquote>
            <div className="flex space-x-4">
              <SocialLink href="/resume.pdf" color="bg-red-500" icon={FileText} text="Resume" />
              <SocialLink href="https://github.com/yourusername" color="bg-blue-500" icon={Github} text="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/sunil-bokare-7a240b266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" color="bg-orange-500" icon={Linkedin} text="LinkedIn" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSkillIndex}
                className="flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:w-1/2">
                  <Image
                    src={skills[currentSkillIndex].image}
                    alt={skills[currentSkillIndex].domain}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">{skills[currentSkillIndex].domain}</h3>
                  <p className="text-lg mb-4">{skills[currentSkillIndex].description}</p>
                  <ul className="list-disc list-inside">
                    {skills[currentSkillIndex].subPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        className="mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between mt-8">
              <button
                onClick={() => handleManualNavigation('prev')}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                aria-label="Previous Skill"
              >
                Previous Skill
              </button>
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-4 py-2 rounded transition-colors ${
                  isAutoPlay ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                } text-white`}
                aria-label={isAutoPlay ? 'Pause Autoplay' : 'Resume Autoplay'}
              >
                {isAutoPlay ? 'Pause' : 'Resume'} Autoplay
              </button>
              <button
                onClick={() => handleManualNavigation('next')}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                aria-label="Next Skill"
              >
                Next Skill
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SocialLink({ href, color, icon: Icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <motion.div
          className={`${color} text-white p-4 rounded-full flex items-center justify-center w-16 h-16`}
          whileHover={{ rotate: 15 }}
        >
          <Icon size={24} />
        </motion.div>
        <p className="text-center mt-2 text-sm">{text}</p>
      </Link>
    </motion.div>
  )
}

