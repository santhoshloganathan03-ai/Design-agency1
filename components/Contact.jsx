'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {

  // Step 1: Store what the user types
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // Step 2: Store error messages
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messageError, setMessageError] = useState('')

  // Step 3: Track if form is submitted or loading
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Step 4: Simple validation function
  const handleSubmit = async (e) => {
    e.preventDefault() // stop page from refreshing

    // Reset old errors first
    setNameError('')
    setEmailError('')
    setMessageError('')

    // Check each field one by one
    let hasError = false

    if (name === '') {
      setNameError('Please enter your name')
      hasError = true
    }

    if (email === '') {
      setEmailError('Please enter your email')
      hasError = true
    } else if (!email.includes('@')) {
      setEmailError('Email must contain @')
      hasError = true
    }

    if (message === '') {
      setMessageError('Please enter a message')
      hasError = true
    }

    // If any error found, stop here
    if (hasError) return 

// Print form data

console.log("Name:", name);
console.log("Email:", email);
console.log("Message:", message);

setLoading(true);

    // If all good, simulate sending
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)

    // Clear the form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-secondary dark:text-white">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 font-inter">
            Have an idea? Let&apos;s talk about your project.
          </p>
        </div>

        <div className="max-w-xl mx-auto">

          {/* Success Message */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 rounded-3xl bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-poppins font-bold text-2xl text-secondary dark:text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-inter mb-6">
                Thanks! We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-xl gradient-bg text-white font-semibold font-inter"
              >
                Send Another Message
              </button>
            </motion.div>

          ) : (

            /* The Form */
            <form
              onSubmit={handleSubmit}
              className="bg-background dark:bg-gray-950 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 space-y-5"
            >

              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-inter mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-secondary dark:text-white font-inter text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {/* Show error if name is empty */}
                {nameError && (
                  <p className="mt-1.5 text-xs text-red-500">{nameError}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-inter mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-secondary dark:text-white font-inter text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {/* Show error if email is wrong */}
                {emailError && (
                  <p className="mt-1.5 text-xs text-red-500">{emailError}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-inter mb-1.5">
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-secondary dark:text-white font-inter text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                />
                {/* Show error if message is empty */}
                {messageError && (
                  <p className="mt-1.5 text-xs text-red-500">{messageError}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl gradient-bg text-white font-semibold font-inter flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>

            </form>
          )}
        </div>
      </div>
    </section>
  )
}