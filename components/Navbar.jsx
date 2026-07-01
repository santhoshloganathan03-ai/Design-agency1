'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Track active section
  useEffect(() => {
    const sections = ['home', 'services', 'portfolio', 'contact']
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveLink(`#${id}`)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((obs) => obs && obs.disconnect())
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 font-poppins font-bold text-xl"
          >
            <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm font-bold">
              P
            </span>
            <span className="gradient-text">PixelCraft</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeLink === link.href
                    ? 'text-primary bg-blue-50 dark:bg-blue-950'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* CTA Button (desktop) */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:block px-4 py-2 rounded-lg gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeLink === link.href
                      ? 'text-primary bg-blue-50 dark:bg-blue-950'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="mt-2 px-4 py-3 rounded-lg gradient-bg text-white text-sm font-medium"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
