'use client'

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

const quickLinks = ['Home', 'Services', 'Portfolio', 'Contact']
const serviceLinks = ['UI/UX Design', 'Web Development', 'Brand Identity', 'Digital Marketing']

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary dark:bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm font-bold">
                P
              </span>
              <span className="font-poppins font-bold text-xl text-white">PixelCraft</span>
            </div>
            <p className="text-sm font-inter leading-relaxed mb-5">
              Crafting digital experiences that inspire. We build beautiful products for the modern web.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: <FiGithub size={18} />, href: 'https://github.com', label: 'GitHub' },
                { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FiInstagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 dark:bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-sm font-inter hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm font-inter hover:text-white transition-colors duration-200 cursor-default">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-sm font-inter mb-4">Get design tips and project news in your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="santhoshloganathan03.com"
                className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-gray-800 text-white text-sm font-inter placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button className="px-3 py-2 rounded-lg gradient-bg text-white text-sm font-inter whitespace-nowrap hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  )
}
