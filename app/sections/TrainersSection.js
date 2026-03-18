'use client'

import { useEffect } from 'react'

const TRAINERS = [
  {
    name: 'Ashan Perera',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting & Hypertrophy',
    experience: '12 years',
    cert: 'NSCA-CSCS, CPT',
    emoji: '💪',
    gradient: 'from-gold/20 to-gym-black',
  },
  {
    name: 'Dilini Fernando',
    role: 'Cardio & HIIT Specialist',
    specialty: 'Fat Loss & Conditioning',
    experience: '8 years',
    cert: 'ACE-CPT, TRX',
    emoji: '🏃',
    gradient: 'from-gym-gray/40 to-gym-black',
  },
  {
    name: 'Nuwan Rajapaksa',
    role: 'Nutrition Coach',
    specialty: 'Sports Nutrition & Body Comp',
    experience: '10 years',
    cert: 'ISSN-CNS, RD',
    emoji: '🥗',
    gradient: 'from-gold/15 to-gym-black',
  },
  {
    name: 'Sachini Wijesinghe',
    role: 'Recovery & Wellness',
    specialty: 'Mobility & Injury Prevention',
    experience: '6 years',
    cert: 'NASM-CES, FMS',
    emoji: '🧘',
    gradient: 'from-gym-gray/30 to-gym-black',
  },
]

function TrainerCard({ trainer }) {
  return (
    <div
      className="group border border-gym-gray hover:border-gold
                 bg-white dark:bg-gym-dark
                 transition-all duration-300 overflow-hidden"
    >
      {/* Photo area */}
      <div
        className={`relative h-52 bg-gradient-to-br ${trainer.gradient}
                    flex items-center justify-center overflow-hidden`}
      >
        {/* Diagonal pattern */}
        <div
          className="absolute inset-0 stripe-bg opacity-[0.06]"
        />

        {/* Avatar circle */}
        <div
          className="relative z-10 w-24 h-24 rounded-full
                     border-2 border-gold/40 group-hover:border-gold
                     bg-gym-gray/40 flex items-center justify-center
                     text-5xl transition-all duration-300
                     group-hover:scale-110"
        >
          {trainer.emoji}
        </div>

        {/* Cert badge — shows on hover */}
        <div
          className="absolute inset-0 bg-gold/10 backdrop-blur-sm
                     flex items-center justify-center
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
        >
          <div className="text-center px-4">
            <div className="font-body text-gold text-[10px] tracking-widest uppercase mb-1">
              Certification
            </div>
            <div className="font-heading text-gym-offwhite text-lg">
              {trainer.cert}
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3
          className="font-heading text-xl tracking-wide mb-1
                     text-gym-black dark:text-gym-offwhite
                     group-hover:text-gold transition-colors duration-300"
        >
          {trainer.name}
        </h3>
        <div className="font-body text-gold text-[10px] tracking-[0.2em] uppercase mb-3">
          {trainer.role}
        </div>
        <div className="h-px bg-gray-200 dark:bg-gym-gray mb-3" />
        <div className="font-body text-gym-black/50 dark:text-gym-offwhite/50 text-sm">
          {trainer.specialty}
        </div>
        <div className="font-body text-gym-black/30 dark:text-gym-offwhite/30 text-xs mt-1">
          {trainer.experience} experience
        </div>
      </div>
    </div>
  )
}

export default function TrainersSection() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('#trainers .reveal, #trainers .reveal-left, #trainers .reveal-right')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="trainers"
      className="relative py-24 lg:py-32
                 bg-gym-offwhite dark:bg-gym-black
                 overflow-hidden transition-colors duration-300"
    >
      {/* Top divider line */}
      <div className="section-top-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end
                        justify-between gap-6 mb-14">
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="font-body text-gold text-sm tracking-[0.4em] uppercase">
                The Team
              </span>
            </div>
            <h2
              className="font-heading text-5xl md:text-6xl lg:text-7xl
                         tracking-wider uppercase leading-none
                         text-gym-black dark:text-gym-offwhite
                         transition-colors duration-300"
            >
              EXPERT <span className="text-gold">TRAINERS</span>
            </h2>
          </div>

          <p className="font-body text-gym-black/50 dark:text-gym-offwhite/40
                        max-w-xs reveal-right transition-colors duration-300">
            Certified professionals dedicated to your transformation.
            Not just coaches — partners in your journey.
          </p>
        </div>

        {/* Trainers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAINERS.map((trainer, i) => (
            <div
              key={trainer.name}
              className={`reveal delay-${(i + 1) * 100}`}
            >
              <TrainerCard trainer={trainer} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center reveal">
          <p className="font-body text-gym-black/40 dark:text-gym-offwhite/40
                        text-sm mb-4 transition-colors duration-300">
            Want personalized coaching?
          </p>
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-outline"
          >
            Book a Free Consultation
          </button>
        </div>

      </div>

      <div className="section-bottom-line" />
      
    </section>
  )
}