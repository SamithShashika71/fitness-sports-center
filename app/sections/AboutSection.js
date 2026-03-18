'use client'

import { useEffect } from 'react'

const PILLARS = [
  { icon: '🏋️', title: 'Elite Equipment',   desc: 'State-of-the-art machines and free weights for every fitness goal.' },
  { icon: '🔥', title: 'Proven Results',     desc: 'Our methodology is backed by science and validated by thousands of transformations.' },
  { icon: '🤝', title: 'Strong Community',   desc: 'Join a tribe of motivated individuals who lift each other higher.' },
]

export default function AboutSection() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('#about .reveal, #about .reveal-left, #about .reveal-right')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-gym-offwhite dark:bg-gym-dark overflow-hidden"
    >
      {/* Top divider line */}
      <div className="section-top-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left card */}
          <div className="reveal-left relative pb-8 pr-8">
            <div className="relative bg-gym-black p-10 sm:p-12 border border-gym-gray/50">

              {/* Inner border accent */}
              <div className="absolute inset-3 border border-gold/15 pointer-events-none" />

              {/* BG watermark */}
              <span className="absolute -top-5 -left-1 font-heading text-[100px] text-gold/[0.05] leading-none select-none pointer-events-none">
                IRON
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-gold" />
                  <span className="font-body text-gold text-xs tracking-[0.4em] uppercase">
                    Since 2023
                  </span>
                </div>

                <h3 className="font-heading text-gym-offwhite text-3xl sm:text-4xl leading-tight mb-4">
                  FORGED IN DISCIPLINE.<br />
                  <span className="text-gold">BUILT FOR CHAMPIONS.</span>
                </h3>

                <p className="font-body text-gym-offwhite/60 text-sm leading-relaxed mb-8">
                  We don&apos;t just build bodies — we forge character.
                  every drop of sweat is a step toward the best version of yourself.
                </p>

                {/* Member avatars */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {['#C89B0A', '#2E2E2E', 'rgba(200,155,10,0.6)'].map((bg, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-gym-black flex items-center justify-center font-heading text-sm text-gym-black"
                        style={{ background: bg }}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-heading text-gold text-2xl leading-none">500+</div>
                    <div className="font-body text-gym-offwhite/50 text-[10px] tracking-[0.2em] uppercase">
                      Happy Members
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-0 sm:right-0 w-28 h-28 bg-gold flex flex-col items-center justify-center z-10">
              <span className="font-heading text-gym-black text-5xl leading-none">3+</span>
              <span className="font-body text-gym-black/70 text-[9px] tracking-[0.2em] uppercase mt-0.5">
                Years Strong
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="reveal-right">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="font-body text-gold text-sm tracking-[0.4em] uppercase">About Us</span>
            </div>

            {/* Title */}
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase leading-none text-gym-black dark:text-gym-offwhite mb-6">
              MORE THAN <span className="text-gold">A GYM</span>
            </h2>

            <p className="font-body text-gym-black/60 dark:text-gym-offwhite/60 leading-relaxed mb-4">
              Fitness Sports Center was born from a simple belief: every person deserves access
              to world-class training in a space that inspires greatness.
            </p>
            <p className="font-body text-gym-black/60 dark:text-gym-offwhite/60 leading-relaxed mb-10">
              Whether you&apos;re picking up your first dumbbell or training for your next competition,
              our coaches are ready to help you crush your goals.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-5">
              {PILLARS.map((p) => (
                <div key={p.title} className="flex items-start gap-4 group cursor-default">
                  <div className="w-11 h-11 flex-shrink-0 border border-gold/30
                                  group-hover:border-gold group-hover:bg-gold/10
                                  transition-all duration-300 flex items-center justify-center text-xl">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-gym-black dark:text-gym-offwhite text-lg tracking-wide">
                      {p.title}
                    </h4>
                    <p className="font-body text-gym-black/50 dark:text-gym-offwhite/50 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="section-bottom-line" />
      
    </section>
  )
}