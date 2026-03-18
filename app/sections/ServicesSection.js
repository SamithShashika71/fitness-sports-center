'use client'

import { useState, useEffect } from 'react'

const SERVICES = [
  {
    id: 1,
    category: 'strength',
    icon: '🏋️',
    title: 'Weight Training',
    desc: 'Build raw power and muscle mass with our extensive free weight and machine zones. Olympic platforms, power racks, and everything you need.',
    tags: ['Strength', 'Muscle', 'Powerlifting'],
  },
  {
    id: 2,
    category: 'cardio',
    icon: '🏃',
    title: 'Cardio Zone',
    desc: 'Treadmills, ellipticals, rowing machines, assault bikes — our cardio floor is fully loaded to maximize your endurance and burn.',
    tags: ['Cardio', 'Endurance', 'Fat Loss'],
  },
  {
    id: 3,
    category: 'classes',
    icon: '🥊',
    title: 'Group Classes',
    desc: 'HIIT, Boxing, Spin, Yoga — over 30 weekly classes led by certified instructors for every fitness level.',
    tags: ['HIIT', 'Boxing', 'Classes'],
  },
  {
    id: 4,
    category: 'training',
    icon: '🎯',
    title: 'Personal Training',
    desc: 'One-on-one sessions with elite coaches who design programs specifically for your body, goals, and timeline.',
    tags: ['Coaching', 'Personalized', 'Premium'],
  },
  {
    id: 5,
    category: 'nutrition',
    icon: '🥗',
    title: 'Nutrition Coaching',
    desc: 'Fuel your gains with personalized nutrition plans, meal prep guidance, and supplement advice from certified dietitians.',
    tags: ['Nutrition', 'Diet', 'Wellness'],
  },
  {
    id: 6,
    category: 'recovery',
    icon: '🧖',
    title: 'Recovery Suite',
    desc: 'Sauna, steam room, ice bath, and foam rolling stations. Because recovery is where the real gains happen.',
    tags: ['Recovery', 'Sauna', 'Wellness'],
  },
]

const CATEGORIES = ['all', 'strength', 'cardio', 'classes', 'training', 'nutrition', 'recovery']

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery]   = useState('')
  const [filtered, setFiltered]         = useState(SERVICES)

  // Filter + search logic
  useEffect(() => {
    let result = SERVICES

    if (activeFilter !== 'all') {
      result = result.filter((s) => s.category === activeFilter)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.desc.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    setFiltered(result)
  }, [activeFilter, searchQuery])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('#services .reveal')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32
                 bg-gym-offwhite dark:bg-gym-black
                 overflow-hidden transition-colors duration-300"
    >
      {/* Top divider line */}
      <div className="section-top-line" />

      {/* Diagonal stripe background */}
      <div className="absolute inset-0 stripe-bg opacity-[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 reveal">

          {/* Title */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="font-body text-gold text-sm tracking-[0.4em] uppercase">
                What We Offer
              </span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wider
                           uppercase leading-none
                           text-gym-black dark:text-gym-offwhite
                           transition-colors duration-300">
              OUR <span className="text-gold">SERVICES</span>
            </h2>
          </div>

          {/* Search box */}
          <div className="relative w-full lg:w-64">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-gym-gray/20
                         border border-gray-300 dark:border-gym-gray
                         text-gym-black dark:text-gym-offwhite
                         pl-9 pr-4 py-2.5 text-sm font-body
                         outline-none focus:border-gold transition-colors
                         placeholder:text-gray-400 dark:placeholder:text-gym-offwhite/30"
            />
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10 reveal delay-100">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-body text-xs tracking-widest uppercase px-4 py-2
                          border transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gold border-gold text-gym-black'
                  : 'border-gray-300 dark:border-gym-gray text-gym-black/60 dark:text-gym-offwhite/60 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px
                        bg-gray-200 dark:bg-gym-gray/20 reveal delay-200">
          {filtered.length > 0 ? (
            filtered.map((service) => (
              <div
                key={service.id}
                className="group bg-gym-offwhite dark:bg-gym-black
                           hover:bg-gray-100 dark:hover:bg-gym-dark
                           p-8 border-l-[3px] border-transparent
                           hover:border-l-gold transition-all duration-300
                           cursor-default"
              >
                {/* Icon */}
                <span className="text-4xl mb-4 block group-hover:scale-110
                                 transition-transform duration-300">
                  {service.icon}
                </span>

                {/* Title */}
                <h3 className="font-heading text-2xl tracking-wide mb-3
                               text-gym-black dark:text-gym-offwhite
                               group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed mb-5
                              text-gym-black/50 dark:text-gym-offwhite/50">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] text-gold/60
                                 border border-gold/20 px-2 py-1
                                 tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-20 text-center
                            bg-gym-offwhite dark:bg-gym-black">
              <div className="font-heading text-4xl mb-2
                              text-gym-black/20 dark:text-gym-offwhite/20">
                NO RESULTS
              </div>
              <p className="font-body text-sm
                            text-gym-black/30 dark:text-gym-offwhite/30">
                Try a different search or filter
              </p>
            </div>
          )}
        </div>

      </div>

      <div className="section-bottom-line" />
      
    </section>
  )
}