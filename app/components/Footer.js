'use client'

const QUICK_LINKS = [
  { label: 'About Us',   href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers',   href: '#trainers' },
  { label: 'Contact',    href: '#contact' },
]

const SERVICES = [
  'Weight Training',
  'Cardio Zone',
  'Group Classes',
  'Personal Training',
  'Nutrition Coaching',
  'Recovery Suite',
]

export default function Footer() {

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gym-offwhite dark:bg-gym-black transition-colors duration-300">

      {/* CTA Band */}
      <div className="gold-shimmer py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        flex flex-col sm:flex-row items-center
                        justify-between gap-6">
          <div>
            <h3 className="font-heading text-gym-black text-3xl tracking-wider">
              READY TO TRANSFORM?
            </h3>
            <p className="font-body text-gym-black/70 text-sm mt-1">
              Join 500+ members already crushing their goals.
            </p>
          </div>
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-gym-black text-gold font-heading tracking-widest
                       uppercase px-8 py-3.5 hover:bg-gym-dark
                       transition-colors duration-300 whitespace-nowrap"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 gold-shimmer flex items-center
                              justify-center font-heading text-gym-black text-lg">
                FSC
              </div>
              <div>
                <div className="font-heading text-gold text-xl tracking-widest">
                  FITNESS
                </div>
                <div className="font-body text-gym-black/50 dark:text-gym-offwhite/50
                                text-[9px] tracking-[0.35em] uppercase
                                transition-colors duration-300">
                  Sports Center
                </div>
              </div>
            </div>

            <p className="font-body text-gym-black/50 dark:text-gym-offwhite/40
                          text-sm leading-relaxed mb-6
                          transition-colors duration-300 w-40">
              Forging champions since 2023. Your transformation starts
              the moment you walk through our doors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-gold text-sm
                           tracking-[0.35em] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm relative
                               text-gym-black/50 dark:text-gym-offwhite/50
                               hover:text-gold dark:hover:text-gold
                               transition-colors duration-200
                               after:absolute after:bottom-[-1px] after:left-0
                               after:w-0 after:h-px after:bg-gold
                               after:transition-all after:duration-300
                               hover:after:w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-gold text-sm
                           tracking-[0.35em] uppercase mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="font-body text-sm cursor-default
                             text-gym-black/50 dark:text-gym-offwhite/50
                             hover:text-gold transition-colors duration-200"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-gold text-sm
                           tracking-[0.35em] uppercase mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: '📍', text: '42 Galle Road, Colombo 03, Sri Lanka' },
                { icon: '📞', text: '+94 11 234 5678' },
                { icon: '📧', text: 'info@fitnesssportscenter.lk' },
                { icon: '🕐', text: 'Mon–Fri: 5AM–11PM' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 text-sm font-body
                             text-gym-black/50 dark:text-gym-offwhite/50
                             transition-colors duration-300"
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gym-gray/20 py-5
                      transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        flex flex-col sm:flex-row items-center
                        justify-between gap-3">
          <p className="font-body text-xs
                        text-gym-black/30 dark:text-gym-offwhite/30
                        transition-colors duration-300">
            © {new Date().getFullYear()} Fitness Sports Center.
            All rights reserved. Est. 2023.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <span
                key={item}
                className="font-body text-xs cursor-pointer
                           text-gym-black/30 dark:text-gym-offwhite/30
                           hover:text-gold transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}