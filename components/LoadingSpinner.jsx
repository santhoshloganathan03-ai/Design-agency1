'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingSpinner() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] bg-white dark:bg-gray-950 flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white text-2xl font-bold font-poppins mb-6 shadow-lg shadow-blue-500/30"
          >
            P
          </motion.div>
          {/* Spinner */}
          <div className="w-8 h-8 border-3 border-gray-200 border-t-primary rounded-full animate-spin" />
          <p className="mt-4 text-gray-400 text-sm font-inter">Loading PixelCraft...</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
