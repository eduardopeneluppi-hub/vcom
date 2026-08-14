import { useEffect, useRef, useState } from 'react'
import './AnimatedButton.css'

export default function AnimatedButton({ children, onClick, variant, scrollTrigger = true }) {
  const buttonRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!scrollTrigger) return

    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (!isTouchDevice) return

    const el = buttonRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.65 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [scrollTrigger])

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`animated-button${variant ? ` ${variant}` : ''}${inView ? ' in-view' : ''}`}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className="text">{children}</span>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  )
}
