'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedSectionHeader from './AnimatedSectionHeader'
import SkillModal from './SkillModal'

const domains = [
  {
    name: 'Ethical Hacking',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGu2Jzd54vaAyLMHWwuWEFmci4gAy3xVntENAjDwOZtVIeAtfRbWkh87gEhIdNAX7Ctg&usqp=CAU',
    skills: [
      { name: 'Penetration Testing', description: 'Identifying and exploiting vulnerabilities in systems' },
      { name: 'Social Engineering', description: 'Manipulating individuals to divulge confidential information' },
      { name: 'Cryptography', description: 'Securing communication and data through encryption techniques' },
      { name: 'Network Security', description: 'Protecting network infrastructure and communications' },
    ],
    projects: [
      { name: 'Vulnerability Scanner', description: 'Developed an automated tool to detect security flaws in web applications' },
      { name: 'Phishing Simulator', description: 'Created a platform to test and train employees against phishing attacks' },
    ],
  },
  {
    name: 'Cybersecurity',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTX-qIpohYWvZP_abc2ZKdSlrSfND3FABiXV3V_C0HUOpoSDRaDAYTbV2gGc6OZw0B8ME&usqp=CAU',
    skills: [
      { name: 'Threat Analysis', description: 'Identifying and assessing potential security threats' },
      { name: 'Incident Response', description: 'Reacting to and managing security breaches' },
      { name: 'Security Auditing', description: 'Evaluating systems for compliance and vulnerabilities' },
      { name: 'Malware Analysis', description: 'Studying malicious software to understand its behavior' },
    ],
    projects: [
      { name: 'Security Operations Center', description: 'Designed and implemented a SOC for real-time threat monitoring' },
      { name: 'Cyber Threat Intelligence Platform', description: 'Developed a system for collecting and analyzing threat data' },
    ],
  },
  {
    name: 'Web Development',
    image: 'https://www.webstackacademy.com/wp-content/uploads/2023/11/001_developer__his_portfolio-2-1.jpg',
    skills: [
      { name: 'Front-end Development', description: 'Building user interfaces with React and Next.js' },
      { name: 'Back-end Development', description: 'Creating server-side applications with Node.js' },
      { name: 'Database Management', description: 'Designing and optimizing database systems' },
      { name: 'API Development', description: 'Creating and integrating RESTful and GraphQL APIs' },
    ],
    projects: [
      { name: 'E-commerce Platform', description: 'Built a full-stack e-commerce solution with Next.js and Node.js' },
      { name: 'Portfolio Website', description: 'Designed and developed a personal portfolio showcasing projects and skills' },
    ],
  },
  {
    name: 'IoT Security',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4s1e6jRnLRcwWGP-iYL6-VovNfTXVz-ClNBCj48KyzvYIC9WsSmhj11OqLOT44pVZ8o&usqp=CAU',
    skills: [
      { name: 'Device Hardening', description: 'Securing IoT devices against potential attacks' },
      { name: 'Secure Communication', description: 'Implementing encrypted protocols for IoT data transfer' },
      { name: 'Firmware Analysis', description: 'Examining and securing IoT device firmware' },
      { name: 'IoT Penetration Testing', description: 'Testing IoT ecosystems for vulnerabilities' },
    ],
    projects: [
      { name: 'Smart Home Security System', description: 'Developed a secure IoT-based home automation and security solution' },
      { name: 'Industrial IoT Monitoring', description: 'Created a secure platform for monitoring and managing industrial IoT devices' },
    ],
  },
]

export default function About() {
  const [selectedDomain, setSelectedDomain] = useState<typeof domains[0] | null>(null)

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <AnimatedSectionHeader>About Me</AnimatedSectionHeader>
        
        <motion.div
          className="flex flex-col md:flex-row items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="https://signature.freefire-name.com/img.php?f=2&t=Sunil%20B"
              alt="Sunil Santosh Bokare"
              width={300}
              height={300}
              className="rounded-full shadow-lg mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Sunil Santosh Bokare</h2>
            <p className="text-xl mb-4">Cybersecurity Specialist | Ethical Hacker | Web Developer</p>
            <p className="text-lg mb-4">
              I am a passionate cybersecurity professional and ethical hacker with a strong background in web development and IoT security. With over 5 years of experience in the field, I've dedicated my career to helping organizations and individuals protect their digital assets and stay ahead of emerging threats.
            </p>
            <p className="text-lg">
              My expertise spans across multiple domains, allowing me to bring a holistic approach to security. I combine technical skills with strategic thinking to deliver comprehensive solutions that address the complex challenges of today's digital landscape.
            </p>
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-6">My Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              className="bg-gray-100 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedDomain(domain)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={domain.image} alt={domain.name} width={500} height={450} className="mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-center">{domain.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedDomain && (
        <SkillModal
          domain={selectedDomain.name}
          skills={selectedDomain.skills}
          projects={selectedDomain.projects}
          onClose={() => setSelectedDomain(null)}
        />
      )}
    </section>
  )
}

