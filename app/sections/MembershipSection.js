'use client'

import { useEffect } from 'react'

const PLANS = [
  {
    name: 'Starter',
    price: 29,
    period: 'month',
    featured: false,
    badge: null,
    features: [
      'Full gym access (6AM–10PM)',
      'Locker room & showers',
      '2 group classes/month',
      'Fitness assessment',
      'Access to cardio zone',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Elite',
    price: 59,
    period: 'month',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Full gym access (24/7)',
      'Unlimited group classes',
      '2 PT sessions/month',
      'Nutrition consultation',
      'Recovery suite access',
      'Body composition scan',
      'Guest passes (2/month)',
    ],
    cta: 'Go Elite',
  },
  {
    name: 'Champion',
    price: 99,
    period: 'month',
    featured: false,
    badge: 'Best Value',
    features: [
      'Everything in Elite',
      'Unlimited PT sessions',
      'Custom meal plan',
      'Priority class booking',
      'VIP locker assignment',
      'Quarterly progress review',
      'Unlimited guest passes',
    ],
    cta: 'Become Champion',
  },
]

function PlanCard({ plan, onSelect }) {
  return (
    <div
      className={`relative flex flex-col w-full
        transition-all duration-500
        hover:-translate-y-3 hover:scale-[1.02] cursor-default
        ${plan.featured
          ? 'bg-gym-black border-2 border-gold shadow-[0_0_40px_rgba(200,155,10,0.25)]'
          : 'bg-white dark:bg-gym-black/50 border border-gray-200 dark:border-gym-gray'
        }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className={`absolute -top-4 left-1/2 -translate-x-1/2
                       font-heading text-xs tracking-[0.2em] uppercase
                       px-5 py-1.5 whitespace-nowrap
                       ${plan.featured
                         ? 'bg-gold text-gym-black'
                         : 'bg-gym-gray text-gym-offwhite'
                       }`}
        >
          {plan.badge}
        </div>
      )}

      {/* Plan header */}
      <div
        className={`px-12 pt-12 pb-8 border-b
                     ${plan.featured
                       ? 'border-gold/20'
                       : 'border-gray-200 dark:border-gym-gray/50'
                     }`}
      >
        <div className="font-heading text-gold text-sm tracking-[0.4em] uppercase mb-3">
          {plan.name}
        </div>
        <div className="flex items-end gap-1">
          <span
            className={`font-heading text-7xl leading-none
                         ${plan.featured
                           ? 'text-gym-offwhite'
                           : 'text-gym-black dark:text-gym-offwhite'
                         }`}
          >
            ${plan.price}
          </span>
          <span className="font-body text-sm text-gray-400 dark:text-gym-offwhite/40 mb-3">
            /{plan.period}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="px-12 py-8 flex-1">
        <ul className="flex flex-col gap-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={`font-body text-sm leading-relaxed
                             ${plan.featured
                               ? 'text-gym-offwhite/70'
                               : 'text-gym-black/60 dark:text-gym-offwhite/60'
                             }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-12 pb-10">
        <button
          onClick={onSelect}
          className={`w-full py-4 font-heading tracking-widest uppercase
                      text-lg transition-all duration-300 hover:scale-105
                      ${plan.featured
                        ? 'bg-gold text-gym-black hover:bg-gold-light'
                        : 'border-2 border-gold text-gold hover:bg-gold hover:text-gym-black'
                      }`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  )
}

export default function MembershipSection() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('#membership .reveal')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="membership"
      className="relative py-24 lg:py-32
                 bg-gym-offwhite dark:bg-gym-dark
                 overflow-hidden transition-colors duration-300"
    >
      {/* Top divider line */}
      <div className="section-top-line" />

      <div className="w-full px-4 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="font-body text-gold text-sm tracking-[0.4em] uppercase">
              Pricing Plans
            </span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2
            className="font-heading text-5xl md:text-6xl lg:text-7xl
                       tracking-wider uppercase leading-none mb-4
                       text-gym-black dark:text-gym-offwhite
                       transition-colors duration-300"
          >
            MEMBERSHIP <span className="text-gold">PLANS</span>
          </h2>
          <p className="font-body text-gym-black/50 dark:text-gym-offwhite/50
                        max-w-xl mx-auto transition-colors duration-300">
            No hidden fees. No contracts. Just choose the plan that fits
            your goals and start today.
          </p>
        </div>

        {/* Plans grid — centered, full width, equal size */}
        <div
          className="grid md:grid-cols-3 items-stretch
                     gap-6 lg:gap-10
                     max-w-[1200px] mx-auto"
        >
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`flex reveal delay-${(i + 1) * 100}`}
            >
              <PlanCard plan={plan} onSelect={scrollToContact} />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center font-body text-sm mt-10 reveal
                     text-gym-black/30 dark:text-gym-offwhite/30
                     transition-colors duration-300"
        >
          All plans include a 7-day free trial. Cancel anytime. No hidden fees.
        </p>

      </div>

      <div className="section-bottom-line" />
      
    </section>
  )
}