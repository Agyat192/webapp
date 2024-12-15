'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedSectionHeader from './AnimatedSectionHeader'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: 'Vulnerability Scanner',
    description: 'An automated tool to detect security flaws in web applications.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lOPjlXlCkmdYy52mpbIVanMhfEPU0CeUjA&s',
    longDescription: 'Developed a comprehensive vulnerability scanner that automates the process of identifying security flaws in web applications. This tool performs thorough scans, detecting common vulnerabilities such as SQL injection, cross-site scripting (XSS), and insecure configurations.',
    technologies: ['Python', 'SQLMap', 'OWASP ZAP', 'Docker'],
    links: {
      github: 'https://github.com/yourusername/vulnerability-scanner',
      linkedin: 'https://www.linkedin.com/posts/your-post-id',
    },
  },
  {
    title: 'Secure IoT Platform',
    description: 'A robust platform for managing and securing IoT devices.',
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQH9Te3XOcNzIw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698777994220?e=2147483647&v=beta&t=FPqtUdqsdfJLgGOe5tigljua6ZS5GtNpUvHkZj9h80c',
    longDescription: 'Created a secure IoT platform that enables efficient management and protection of connected devices. The platform incorporates end-to-end encryption, secure boot, and over-the-air updates to ensure the highest level of security for IoT ecosystems.',
    technologies: ['Rust', 'MQTT', 'TLS', 'AWS IoT'],
    links: {
      live: 'https://secure-iot-platform.com',
      github: 'https://github.com/yourusername/secure-iot-platform',
      linkedin: 'https://www.linkedin.com/posts/your-post-id',
    },
  },
  {
    title: 'Cyber Threat Intelligence Platform',
    description: 'A system for collecting and analyzing threat data.',
    image: 'https://assets.tryhackme.com/img/modules/cyber-threat-intelligence.png',
    longDescription: 'Developed a comprehensive cyber threat intelligence platform that collects, processes, and analyzes data from various sources to provide actionable insights. The platform helps organizations stay ahead of potential threats and make informed security decisions.',
    technologies: ['Python', 'Elasticsearch', 'Kibana', 'Machine Learning'],
    links: {
      github: 'https://github.com/yourusername/threat-intelligence-platform',
      linkedin: 'https://www.linkedin.com/posts/your-post-id',
    },
  },
  {
    title: 'Secure Messaging App',
    description: 'An end-to-end encrypted messaging application.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2ui4bOD9PJalHQ6FX_m1VR5XvJQ8989JKg&s',
    longDescription: 'Built a secure messaging application that prioritizes user privacy through end-to-end encryption. The app ensures that only the intended recipients can read the messages, protecting communications from potential eavesdroppers, including service providers.',
    technologies: ['React Native', 'Signal Protocol', 'Node.js', 'MongoDB'],
    links: {
      live: 'https://securemessaging.app',
      github: 'https://github.com/yourusername/secure-messaging-app',
      linkedin: 'https://www.linkedin.com/posts/your-post-id',
    },
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <AnimatedSectionHeader>My Projects</AnimatedSectionHeader>
        <p className="text-lg mb-8 text-center">
          Here are some of the key projects I've worked on in the fields of cybersecurity, ethical hacking, and secure software development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

