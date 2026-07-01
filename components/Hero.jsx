'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
}

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' },
  },
}

const float = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background dark:bg-gray-950 pt-16"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400/15 dark:bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-primary font-medium font-inter">
                Available for new projects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-secondary dark:text-white mb-6"
            >
              Crafting Digital{' '}
              <span className="gradient-text">Experiences</span>{' '}
              That Inspire
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-lg font-inter"
            >
              We help startups and businesses build beautiful websites, powerful
              brands, and modern digital products that users love.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="px-8 py-3.5 rounded-xl gradient-bg text-white font-semibold font-inter shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
              >
                Get Started →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('portfolio')}
                className="px-8 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-secondary dark:text-white font-semibold font-inter hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-200"
              >
                View Portfolio
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              {[
                { value: '50+', label: 'Projects Done' },
                { value: '30+', label: 'Happy Clients' },
                { value: '3+', label: 'Years Exp' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-poppins font-bold text-2xl gradient-text">{stat.value}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-inter">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Illustration */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              variants={float}
              animate="animate"
              className="relative w-full max-w-sm lg:max-w-md"
            >
              {/* Main card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800">
                {/* Browser bar */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 ml-2 h-5 bg-gray-100 dark:bg-gray-800 rounded-md" />
                </div>

                {/* Hero image mock */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 h-44 flex items-center justify-center mb-5">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">🎨</div>
                    <p className="font-poppins font-semibold">Design Studio</p>
                  </div>
                </div>

                {/* Mock content bars */}
                <div className="space-y-3">
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full w-4/5" />
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full w-3/5" />
                  <div className="flex gap-3 mt-4">
                    <div className="h-8 bg-blue-500 rounded-lg flex-1" />
                    <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-lg w-20" />
                  </div>
                </div>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl px-3 py-2 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2"
              >
                <span className="text-xl">✨</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Premium Design</span>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl px-3 py-2 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2"
              >
                <span className="text-xl">🚀</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Fast Delivery</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
