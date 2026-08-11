'use client'
import { useEffect, useRef, useState } from 'react'

export default function IntroOverlay() {
  const [phase, setPhase] = useState('covering')
  const containerRef = useRef(null)

  useEffect(() => {
    // Capture all page elements that will reveal with the intro
    const introEls = Array.from(document.querySelectorAll('[data-intro]'))

    // Hide them immediately — overlay is covering the page so no flash
    introEls.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(22px)'
    })

    // instant = snap visible; animated = staggered riseIn while overlay fades
    const revealElements = (instant) => {
      introEls.forEach((el, i) => {
        if (instant) {
          el.style.animation = ''
          el.style.animationDelay = ''
          el.style.opacity = '1'
          el.style.transform = ''
        } else {
          el.style.opacity = ''
          el.style.transform = ''
          el.style.animation = 'riseIn 0.55s cubic-bezier(.2,.7,.2,1) both'
          el.style.animationDelay = `${i * 0.07}s`
        }
      })
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements(true)
      const t = setTimeout(() => setPhase('done'), 0)
      return () => clearTimeout(t)
    }

    const navLogo = document.getElementById('nav-logo')
    const overlayEl = containerRef.current
    if (!navLogo || !overlayEl) {
      revealElements(true)
      const t = setTimeout(() => setPhase('done'), 100)
      return () => clearTimeout(t)
    }

    // Measure nav logo center for fly-back destination
    const rect = navLogo.getBoundingClientRect()
    const dx = rect.left + rect.width / 2 - window.innerWidth / 2
    const dy = rect.top + rect.height / 2 - window.innerHeight / 2
    const destTransform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1)`

    // Hide real logo; clone it into the overlay (avoids z-index stacking issues)
    navLogo.style.opacity = '0'
    const clone = navLogo.cloneNode(true)
    clone.removeAttribute('id')
    Object.assign(clone.style, {
      position: 'fixed',
      left: '50%',
      top: '50%',
      width: 'auto',
      whiteSpace: 'nowrap',
      margin: '0',
      pointerEvents: 'none',
      transition: 'none',
      opacity: '0',
      letterSpacing: '.35em',
      filter: 'blur(12px)',
      transform: 'translate(-50%, -50%) scale(2)',
    })
    overlayEl.appendChild(clone)

    document.body.style.overflow = 'hidden'
    const tPlay = setTimeout(() => setPhase('playing'), 0)

    let exitTimer, t2, tReveal, t3, raf1, raf2

    const restoreClone = () => {
      clone.remove()
      navLogo.style.opacity = ''
      navLogo.style.transition = ''
    }

    const finish = () => {
      setPhase('exiting')
      document.body.style.overflow = ''
      exitTimer = setTimeout(() => {
        setPhase('done')
        restoreClone()
      }, 400)
    }

    // Phase 1: blur-in at center (double-RAF ensures initial state is painted first)
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        Object.assign(clone.style, {
          transition: 'opacity 0.7s ease, letter-spacing 0.7s ease, filter 0.7s ease',
          opacity: '1',
          letterSpacing: '.01em',
          filter: 'blur(0)',
        })
      })
    })

    // Phase 2: clone flies back to nav position
    t2 = setTimeout(() => {
      Object.assign(clone.style, {
        transition: 'transform 0.65s cubic-bezier(.55,.05,.2,1)',
        transform: destTransform,
      })
    }, 1400)

    // Phase 2.5: start page element reveal 400ms before overlay fade
    // so elements are already rising when the overlay goes transparent
    tReveal = setTimeout(() => revealElements(false), 1700)

    // Phase 3: fade overlay out
    t3 = setTimeout(finish, 2100)

    const skip = () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      clearTimeout(t2)
      clearTimeout(tReveal)
      clearTimeout(t3)
      Object.assign(clone.style, {
        transition: 'none',
        opacity: '1',
        letterSpacing: '.01em',
        filter: 'blur(0)',
        transform: destTransform,
      })
      revealElements(true)
      setTimeout(finish, 50)
    }

    const handleKey = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault()
        skip()
      }
    }

    window.addEventListener('keydown', handleKey)
    overlayEl.addEventListener('click', skip)

    return () => {
      clearTimeout(tPlay)
      clearTimeout(t2)
      clearTimeout(tReveal)
      clearTimeout(t3)
      clearTimeout(exitTimer)
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      window.removeEventListener('keydown', handleKey)
      overlayEl.removeEventListener('click', skip)
      restoreClone()
      revealElements(true)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      ref={containerRef}
      style={{
        opacity: phase === 'exiting' ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}
      className="fixed inset-0 z-9999 bg-white dark:bg-gray-900 flex items-center justify-center cursor-pointer select-none"
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(179,161,240,.08), transparent 68%)' }}
      />

      <p
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[.15em] text-gray-400 dark:text-gray-500 pointer-events-none"
        style={{
          opacity: phase === 'playing' ? 1 : 0,
          transition: 'opacity 0.7s ease',
          transitionDelay: '0.5s',
        }}
      >
        CLICK ANYWHERE, OR PRESS ESC, TO SKIP
      </p>
    </div>
  )
}
