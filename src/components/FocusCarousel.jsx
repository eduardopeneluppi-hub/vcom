import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionBadgeTitle from './SectionBadgeTitle'

const EASE_EXPO = [0.16, 1, 0.3, 1]

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Focus carousel: the active item shows large and sharp; the item it
 * replaced shrinks, blurs, and settles beside it in the direction it
 * came from. Navigate with the left/right buttons.
 */
export default function FocusCarousel({ title, items, prevLabel = 'Anterior', nextLabel = 'Próximo' }) {
  const [active, setActive] = useState(0)
  const [ghost, setGhost] = useState(null)
  const [dir, setDir] = useState(1)
  const navCountRef = useRef(0)

  const go = (step) => {
    navCountRef.current += 1
    setGhost(active)
    setDir(step)
    setActive((current) => (current + step + items.length) % items.length)
  }

  return (
    <section className="w-full py-16 sm:py-20">
      {title && (
        <div className="flex justify-center px-6">
          <SectionBadgeTitle>{title}</SectionBadgeTitle>
        </div>
      )}

      <div
        className="relative mx-auto mt-10 h-[320px] w-full max-w-lg sm:h-[400px]"
        style={{ perspective: 1200 }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <AnimatePresence>
            {ghost !== null && items[ghost] && (
              <motion.div
                key={`ghost-${navCountRef.current}`}
                initial={{ opacity: 0, scale: 0.85, x: dir === 1 ? -20 : 20, filter: 'blur(0px)' }}
                animate={{ opacity: 0.4, scale: 0.52, x: dir === 1 ? -160 : 160, filter: 'blur(7px)' }}
                exit={{ opacity: 0, scale: 0.4, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: EASE_EXPO }}
              >
                <img
                  src={items[ghost].src}
                  alt=""
                  className="h-[260px] w-auto select-none sm:h-[320px]"
                  draggable={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <AnimatePresence mode="popLayout" initial={false}>
            {items[active] && (
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.85, x: dir === 1 ? 130 : -130 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: EASE_EXPO }}
              >
                <img
                  src={items[active].src}
                  alt={items[active].alt}
                  className="h-[280px] w-auto select-none drop-shadow-2xl sm:h-[360px]"
                  draggable={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={prevLabel}
          className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#17151c] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 sm:left-6"
        >
          <ChevronIcon direction="left" />
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label={nextLabel}
          className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#17151c] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 sm:right-6"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </section>
  )
}
