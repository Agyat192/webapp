import { motion } from 'framer-motion'
import AnimatedSectionHeader from './AnimatedSectionHeader'

export default function Awards() {
  return (
    <section id="awards" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedSectionHeader>Awards & Certifications</AnimatedSectionHeader>
        <motion.ul
          className="list-disc list-inside max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[
            "CyberOps NetAcad: Completed CyberOps course with a score of 98.3%.",
            "Various online cybersecurity certifications.",
            "Hackathon awards for best project in tech and cybersecurity categories.",
            "Certifications in Ethical Hacking and Web Development."
          ].map((item, index) => (
            <motion.li
              key={index}
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

