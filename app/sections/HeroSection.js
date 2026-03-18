'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useCounter } from '../hooks/useCounter'

const STATS = [
  { value: 500, suffix: '+', label: 'Active Members' },
  { value: 15,  suffix: '+', label: 'Expert Trainers' },
  { value: 50,  suffix: '+', label: 'Equipment Sets' },
  { value: 98,  suffix: '%', label: 'Success Rate' },
]

function StatCell({ value, suffix, label }) {
  const ref = useCounter(value, suffix)
  return (
    <div className="py-6 px-4 text-center border-r border-gym-gray/40 last:border-r-0
                    bg-white/80 dark:bg-gym-black/80
                    hover:bg-gym-offwhite dark:hover:bg-gym-dark
                    transition-colors duration-300">
      <div className="font-heading text-4xl sm:text-5xl text-gold leading-none mb-1">
        <span ref={ref}>0{suffix}</span>
      </div>
      <div className="font-body text-[10px] text-gym-black/50 dark:text-gym-offwhite/50
                      tracking-[0.2em] uppercase">
        {label}
      </div>
    </div>
  )
}

export default function HeroSection() {

  useEffect(() => {
    const els = document.querySelectorAll(
      '#hero .reveal, #hero .reveal-left, #hero .reveal-right'
    )
    setTimeout(() => els.forEach(el => el.classList.add('visible')), 100)
  }, [])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center
                 bg-gym-offwhite dark:bg-gym-black overflow-hidden
                 transition-colors duration-300"
    >
      {/* Diagonal stripe background */}
      <div className="absolute inset-0 stripe-bg opacity-[0.06]" />

      {/* Gold glow orb */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full
                   opacity-[0.06] dark:opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C89B0A 0%, transparent 70%)' }}
      />

      {/* Left gold accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: 'linear-gradient(to bottom, transparent, #C89B0A, transparent)' }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 reveal">
              <span className="w-8 h-px bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.4em] uppercase">
                Est. 2023 · Sports Center
              </span>
            </div>

            {/* Headline */}
            <div className="reveal delay-100">
              <h1 className="font-heading text-[80px] sm:text-[100px] lg:text-[110px]
                             text-gym-black dark:text-gym-offwhite
                             leading-[0.9] select-none transition-colors duration-300">
                PUSH
              </h1>
              <h1
                className="font-heading text-[80px] sm:text-[100px] lg:text-[110px]
                           leading-[0.9] select-none"
                style={{ WebkitTextStroke: '2px #C89B0A', color: 'transparent' }}
              >
                YOUR
              </h1>
              <h1 className="font-heading text-[80px] sm:text-[100px] lg:text-[110px]
                             text-gold leading-[0.9] mb-8 select-none">
                LIMITS
              </h1>
            </div>

            {/* Description */}
            <p className="font-body text-gym-black/60 dark:text-gym-offwhite/60
                          text-base sm:text-lg leading-relaxed max-w-lg mb-10
                          reveal delay-200 transition-colors duration-300">
              Transform your body and mind at Fitness Sports Center. World-class equipment,
              expert trainers, and a community that pushes you beyond what you thought possible.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 reveal delay-300">
              <button
                onClick={() => scrollTo('#membership')}
                className="btn-gold"
              >
                Start Training
              </button>
              <button
                onClick={() => scrollTo('#about')}
                className="btn-outline"
              >
                Discover More
              </button>
            </div>
          </div>

          {/* Right — Logo */}
          <div className="flex justify-center items-center reveal-right delay-200">
            <div
              className="relative flex items-center justify-center"
              style={{ marginTop: '-60px' }}
            >
              {/* Outer slow pulse ring */}
              <div className="absolute w-[620px] h-[620px] rounded-full
                              border border-gold/10 animate-spin-slow" />

              {/* Middle dashed ring */}
              <div
                className="absolute w-[580px] h-[580px] rounded-full animate-spin-reverse"
                style={{ border: '1px dashed rgba(200,155,10,0.25)' }}
              />

              {/* Inner solid ring */}
              <div className="absolute w-[530px] h-[530px] rounded-full
                              border border-gold/30 animate-spin-slow" />

              {/* Gold glow behind logo */}
              <div
                className="absolute w-[480px] h-[480px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(200,155,10,0.2) 0%, transparent 70%)',
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              />

              {/* Logo image */}
              <div
                className="relative z-10 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[560px]"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(200,155,10,0.3))',
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Fitness Sports Center Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4
                        border border-gym-gray/30 dark:border-gym-gray/30
                        reveal delay-400">
          {STATS.map((stat) => (
            <StatCell key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-bottom-line" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                      flex flex-col items-center gap-2 text-gold/40">
        <span className="font-body text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-bounce" />
      </div>

    </section>
  )
}