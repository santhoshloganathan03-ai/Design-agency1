'use client'

import { motion } from 'framer-motion'
import { services } from '../data/services'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-primary text-sm font-semibold font-inter mb-4">
            What We Do
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary dark:text-white">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-inter text-lg">
            Everything you need to launch and grow your digital presence — under one roof.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-background dark:bg-gray-950 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 card-glow transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-poppins font-semibold text-lg text-secondary dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-inter">
                {service.description}
              </p>

              {/* Bottom gradient line on hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
