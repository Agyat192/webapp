'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/">
            <Image src="https://signature.freefire-name.com/img.php?f=2&t=Sunil%20B" alt="Logo" width={50} height={50} />
          </Link>
          <div className="ml-2">
            <h1 className="text-2xl font-bold">Sunil Santosh Bokare</h1>
            <p className="text-sm text-gray-600">Portfolio</p>
          </div>
        </motion.div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <motion.nav
          className="hidden md:flex space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                pathname === item.path ? 'text-blue-500' : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block py-2 px-4 text-sm font-medium hover:bg-gray-100 ${
                pathname === item.path ? 'text-blue-500' : 'text-gray-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}

