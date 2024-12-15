'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionHeaderProps {
  children: React.ReactNode
}

export default function AnimatedSectionHeader({ children }: AnimatedSectionHeaderProps) {
  return (
    <motion.h2
      className="text-3xl font-bold mb-8 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  )
}

