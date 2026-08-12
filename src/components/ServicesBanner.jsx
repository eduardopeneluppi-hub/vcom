import { useEffect, useRef } from 'react'
import panfletos from '../assets/banner-panfletos.png'
import cadernos from '../assets/banner-cadernos.png'
import fachadas from '../assets/banner-fachadas.png'

const SLIDES = [
  { src: panfletos, alt: 'Panfletos coloridos impressos em alta qualidade pela Vcom' },
  { src: cadernos, alt: 'Cadernos A5 personalizados de todos os tipos pela Vcom' },
  { src: fachadas, alt: 'Banner de lona para fachada de negócio impresso pela Vcom' },
]

const AUTOPLAY_SPEED = 0.5
const RESUME_DELAY = 2200

export default function ServicesBanner() {
  const trackRef = useRef(null)
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame
    const step = () => {
      if (!pausedRef.current) {
        const loopWidth = track.scrollWidth / 2
        track.scrollLeft += AUTOPLAY_SPEED
        if (track.scrollLeft >= loopWidth) {
          track.scrollLeft -= loopWidth
        }
      }
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [])

  const pause = () => {
    pausedRef.current = true
    clearTimeout(resumeTimerRef.current)
  }

  const scheduleResume = () => {
    clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false
    }, RESUME_DELAY)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        track.scrollLeft += event.deltaY
        event.preventDefault()
      }
      pause()
      scheduleResume()
    }

    track.addEventListener('wheel', handleWheel, { passive: false })
    return () => track.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section aria-label="Serviços em destaque" className="w-full">
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {[...SLIDES, ...SLIDES].map((slide, index) => (
          <div
            key={index}
            className="relative aspect-[16/9] w-[82vw] max-w-[560px] shrink-0 overflow-hidden rounded-3xl bg-black/5 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.28)]"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
