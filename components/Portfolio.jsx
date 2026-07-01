'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { portfolioProjects } from '../data/portfolio'

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950 text-accent text-sm font-semibold font-inter mb-4">
            Our Work
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-inter text-lg">
            A selection of our best work — built with care, shipped with pride.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-lg bg-white text-secondary text-sm font-semibold font-inter"
                  >
                    View Project →
                  </motion.button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} mb-3`}>
                  {project.category}
                </span>
                <h3 className="font-poppins font-semibold text-base text-secondary dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-inter leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
