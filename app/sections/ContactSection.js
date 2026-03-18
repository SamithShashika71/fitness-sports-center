'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const CONTACT_INFO = [
  { icon: '📍', label: 'Location', value: '42 Galle Road, Colombo 03, Sri Lanka' },
  { icon: '📞', label: 'Phone',    value: '+94 11 234 5678' },
  { icon: '📧', label: 'Email',    value: 'info@fitnesssportscenter.lk' },
  { icon: '🕐', label: 'Hours',    value: 'Mon–Fri: 5AM–11PM · Sat–Sun: 6AM–10PM' },
]

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [charCount, setCharCount]       = useState(0)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'onTouched' })

  const messageValue = watch('message', '')

  useEffect(() => {
    setCharCount(messageValue?.length || 0)
  }, [messageValue])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll(
      '#contact .reveal, #contact .reveal-left, #contact .reveal-right'
    ).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const onSubmit = async (data) => {
    setSubmitStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || 'Submission failed')
      setSubmitStatus('success')
      reset()
      setCharCount(0)
      setTimeout(() => setSubmitStatus('idle'), 6000)
    } catch (err) {
      setErrorMessage(err.message)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const inputClass = (fieldName) => {
    const base = 'form-input'
    if (errors[fieldName])
      return `${base} !border-red-500 focus:!border-red-500`
    if (touchedFields[fieldName] && !errors[fieldName])
      return `${base} !border-green-500/50`
    return base
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32
                 bg-gym-offwhite dark:bg-gym-dark
                 overflow-hidden transition-colors duration-300"
    >
      {/* Top divider line */}
      <div className="section-top-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">

          {/* Left — Info */}
          <div className="reveal-left flex flex-col">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="font-body text-gold text-sm tracking-[0.4em] uppercase">
                Get In Touch
              </span>
            </div>

            {/* Title */}
            <h2
              className="font-heading text-5xl md:text-6xl lg:text-7xl
                         tracking-wider uppercase leading-none mb-6
                         text-gym-black dark:text-gym-offwhite
                         transition-colors duration-300"
            >
              START YOUR <span className="text-gold">JOURNEY</span>
            </h2>

            <p className="font-body text-gym-black/60 dark:text-gym-offwhite/60
                          leading-relaxed mb-10 transition-colors duration-300">
              Ready to transform? Fill out the form and one of our coaches
              will reach out within 24 hours to discuss your goals and
              create a plan tailored just for you.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 mb-10">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div
                    className="w-12 h-12 flex-shrink-0
                               border border-gray-200 dark:border-gym-gray
                               group-hover:border-gold group-hover:bg-gold/10
                               transition-all duration-300
                               flex items-center justify-center text-xl"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-heading text-gold text-xs
                                    tracking-[0.3em] uppercase mb-0.5">
                      {item.label}
                    </div>
                    <div className="font-body text-gym-black/60 dark:text-gym-offwhite/60
                                    text-sm transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-auto">
            <div className="font-body text-gym-black/30 dark:text-gym-offwhite/30
                            text-xs tracking-widest uppercase mb-4
                            transition-colors duration-300">
                Follow Us
            </div>
            <div className="flex gap-3">

                {/* Instagram */}
                <a href="#" aria-label="Instagram"
                className="w-10 h-10 border border-gray-200 dark:border-gym-gray
                hover:border-gold hover:bg-gold hover:text-gym-black
                dark:hover:border-gold dark:hover:bg-gold dark:hover:text-gym-black
                flex items-center justify-center
                text-gym-black/40 dark:text-gym-offwhite/40
                transition-all duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                </a>

                {/* Facebook */}
                <a href="#" aria-label="Facebook"
                className="w-10 h-10 border border-gray-200 dark:border-gym-gray
                hover:border-gold hover:bg-gold hover:text-gym-black
                dark:hover:border-gold dark:hover:bg-gold dark:hover:text-gym-black
                flex items-center justify-center
                text-gym-black/40 dark:text-gym-offwhite/40
                transition-all duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                </a>

                {/* YouTube */}
                <a href="#" aria-label="YouTube"
                className="w-10 h-10 border border-gray-200 dark:border-gym-gray
                hover:border-gold hover:bg-gold hover:text-gym-black
                dark:hover:border-gold dark:hover:bg-gold dark:hover:text-gym-black
                flex items-center justify-center
                text-gym-black/40 dark:text-gym-offwhite/40
                transition-all duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                </a>

                {/* TikTok */}
                <a href="#" aria-label="TikTok"
                className="w-10 h-10 border border-gray-200 dark:border-gym-gray
                hover:border-gold hover:bg-gold hover:text-gym-black
                dark:hover:border-gold dark:hover:bg-gold dark:hover:text-gym-black
                flex items-center justify-center
                text-gym-black/40 dark:text-gym-offwhite/40
                transition-all duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                </a>

            </div>
            </div>

          </div>

          {/* Right — Form */}
          <div className="reveal-right flex flex-col">
            <div className="bg-gym-black border border-gym-gray
                            p-8 lg:p-10 flex-1 flex flex-col">

              <h3 className="font-heading text-gym-offwhite text-2xl tracking-wide mb-1">
                Send Us A Message
              </h3>
              <div className="w-12 h-0.5 bg-gold mb-8" />

              {/* Success message */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/40
                                p-5 mb-6 text-center">
                  <div className="text-3xl mb-2">✅</div>
                  <div className="font-heading text-green-400 text-lg tracking-wide mb-1">
                    Message Received!
                  </div>
                  <p className="font-body text-gym-offwhite/60 text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {/* Error message */}
              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/40 p-4 mb-6">
                  <p className="font-body text-red-400 text-sm text-center">
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 flex-1"
                noValidate
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-gym-offwhite/50 text-xs
                                      tracking-widest uppercase mb-1.5 block">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={inputClass('name')}
                      {...register('name', {
                        required: 'Name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters',
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="font-body text-red-400 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="font-body text-gym-offwhite/50 text-xs
                                      tracking-widest uppercase mb-1.5 block">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className={inputClass('email')}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="font-body text-red-400 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-gym-offwhite/50 text-xs
                                      tracking-widest uppercase mb-1.5 block">
                      Phone
                      <span className="text-gym-offwhite/20 text-[10px]
                                       normal-case ml-1">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 77 000 0000"
                      className="form-input"
                      {...register('phone')}
                    />
                  </div>

                  <div>
                    <label className="font-body text-gym-offwhite/50 text-xs
                                      tracking-widest uppercase mb-1.5 block">
                      Subject <span className="text-gold">*</span>
                    </label>
                    <select
                      className={`${inputClass('subject')} cursor-pointer
                                  bg-white dark:bg-gym-gray
                                  text-gym-black dark:text-gym-offwhite`}
                      {...register('subject', {
                        required: 'Please select a subject',
                      })}
                    >
                      <option value=""
                        className="bg-white dark:bg-gym-gray
                                   text-gym-black dark:text-gym-offwhite">
                        Select a subject
                      </option>
                      <option value="membership"
                        className="bg-white dark:bg-gym-gray
                                   text-gym-black dark:text-gym-offwhite">
                        Membership Inquiry
                      </option>
                      <option value="pt"
                        className="bg-white dark:bg-gym-gray
                                   text-gym-black dark:text-gym-offwhite">
                        Personal Training
                      </option>
                      <option value="classes"
                        className="bg-white dark:bg-gym-gray
                                   text-gym-black dark:text-gym-offwhite">
                        Group Classes
                      </option>
                      <option value="nutrition"
                        className="bg-white dark:bg-gym-gray
                                   text-gym-black dark:text-gym-offwhite">
                        Nutrition Coaching
                      </option>
                      <option value="other"
                        className="bg-white dark:bg-gym-gray
                                   text-gym-black dark:text-gym-offwhite">
                        Other
                      </option>
                    </select>
                    {errors.subject && (
                      <p className="font-body text-red-400 text-xs mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex-1 flex flex-col">
                  <label className="font-body text-gym-offwhite/50 text-xs
                                    tracking-widest uppercase mb-1.5
                                    flex justify-between">
                    <span>Message <span className="text-gold">*</span></span>
                    <span className={`normal-case ${
                      charCount > 450 ? 'text-gold' : 'text-gym-offwhite/30'
                    }`}>
                      {charCount}/500
                    </span>
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your fitness goals..."
                    className={`${inputClass('message')} resize-none flex-1`}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 20,
                        message: 'Please write at least 20 characters',
                      },
                      maxLength: {
                        value: 500,
                        message: 'Message cannot exceed 500 characters',
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="font-body text-red-400 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-4 h-4 mt-0.5 accent-gold
                               flex-shrink-0 cursor-pointer"
                    {...register('consent', {
                      required: 'Please accept to proceed',
                    })}
                  />
                  <label
                    htmlFor="consent"
                    className="font-body text-gym-offwhite/40 text-xs
                               leading-relaxed cursor-pointer"
                  >
                    I agree to be contacted by Fitness Sports Center and
                    accept the{' '}
                    <span className="text-gold underline">Privacy Policy</span>.
                  </label>
                </div>
                {errors.consent && (
                  <p className="font-body text-red-400 text-xs -mt-3">
                    {errors.consent.message}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={
                    submitStatus === 'loading' || submitStatus === 'success'
                  }
                  className="w-full bg-gold text-gym-black font-heading
                             tracking-widest text-lg uppercase py-4
                             transition-all duration-300 hover:bg-gold-light
                             disabled:opacity-50 disabled:cursor-not-allowed
                             flex items-center justify-center gap-3 mt-2"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none" viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25" cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="4"
                        />
                        <path
                          className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    'Message Sent ✓'
                  ) : (
                    'Send Message'
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      <div className="section-bottom-line" />
      
    </section>
  )
}