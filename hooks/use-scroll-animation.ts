"use client"

import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Usar threshold más bajo en móviles para mejor detección
    const isMobile = window.innerWidth < 768
    const effectiveThreshold = isMobile ? Math.min(threshold, 0.05) : threshold
    const rootMargin = isMobile ? '0px 0px 0px 0px' : '0px 0px -50px 0px'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: effectiveThreshold,
        rootMargin
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}

export function useStaggeredAnimation(itemCount: number, delay = 0.1) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    // En móviles: threshold más bajo y delays más cortos
    const effectiveDelay = isMobile ? Math.min(delay, 0.1) : delay
    const rootMargin = isMobile ? '0px 0px 50px 0px' : '0px 0px -50px 0px'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animar elementos uno por uno con delay
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev]
                newState[i] = true
                return newState
              })
            }, i * effectiveDelay * 1000)
          }
        }
      },
      {
        threshold: isMobile ? 0.01 : 0.1,
        rootMargin
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [itemCount, delay])

  return { ref, visibleItems }
}