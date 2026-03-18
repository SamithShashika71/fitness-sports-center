'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

const NAV_LINKS = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers',   href: '#trainers' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme }  = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-gym-black/95 backdrop-blur-md shadow-[0_2px_20px_rgba(200,155,10,0.1)]'
          : 'bg-gym-offwhite/80 dark:bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 gold-shimmer flex items-center justify-center
                            font-heading text-gym-black text-lg font-bold flex-shrink-0">
              FSC
            </div>
            <div className="hidden sm:block">
              <div className="font-heading text-gold text-xl tracking-widest leading-none">
                FITNESS
              </div>
              <div className="font-body text-gym-black/50 dark:text-gym-offwhite/60
                              text-[9px] tracking-[0.35em] uppercase">
                Sports Center
              </div>
            </div>
          </button>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative font-body text-xs tracking-[0.2em] uppercase
                           text-gym-black/70 dark:text-gym-offwhite/70
                           hover:text-gold dark:hover:text-gold
                           transition-colors duration-200
                           after:absolute after:bottom-[-4px] after:left-0
                           after:w-0 after:h-px after:bg-gold
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 border border-gym-gray/50 dark:border-gym-gray
                         hover:border-gold flex items-center justify-center
                         text-gold transition-colors duration-200"
            >
              {theme === 'dark' ? (
                /* Sun icon */
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
                </svg>
              ) : (
                /* Moon icon */
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              )}
            </button>

            {/* Join Now CTA */}
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden sm:block bg-gold text-gym-black font-heading
                         tracking-widest uppercase px-6 py-2.5 text-sm
                         hover:bg-gold-light transition-colors duration-200"
            >
              Join Now
            </button>

            {/* Hamburger - mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            >
              <span className={`w-full h-0.5 bg-gold transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`w-full h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gold transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white/98 dark:bg-gym-black/98 backdrop-blur-md
                        border-t border-gray-200 dark:border-gym-gray/30
                        px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left font-body text-sm tracking-[0.2em] uppercase
                         text-gym-black/70 dark:text-gym-offwhite/70
                         hover:text-gold transition-colors
                         py-3 border-b border-gray-200 dark:border-gym-gray/20 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-gold text-gym-black font-heading tracking-widest
                       uppercase px-6 py-3 text-sm mt-3
                       hover:bg-gold-light transition-colors duration-200"
          >
            Join Now
          </button>
        </div>
      </div>
    </header>
  )
}