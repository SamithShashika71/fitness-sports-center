'use client'

import { useEffect, useRef } from 'react'

export function useCounter(target, suffix = '') {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let current = 0
          const step = target / 60
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              el.textContent = target + suffix
              clearInterval(timer)
            } else {
              el.textContent = Math.floor(current) + suffix
            }
          }, 25)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])

  return ref
}