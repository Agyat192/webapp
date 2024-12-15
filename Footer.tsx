import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <p className="text-center mb-4">
            Thank you for visiting my portfolio. Let's connect and build something great together!
          </p>
          <motion.div className="flex justify-center space-x-4">
            {['LinkedIn', 'GitHub', 'Email'].map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={platform === 'Email' ? 'mailto:agyat192@gmail.com' : `https://${platform.toLowerCase()}.com/yourusername`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {platform}
                </Link>
              
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

