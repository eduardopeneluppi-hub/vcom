import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import vcomLogo from '../assets/vcom-logo.png'
import ServicesBanner from './ServicesBanner'
import MugShowcase from './MugShowcase'
import QuoteModal from './QuoteModal'

const EASE_EXPO = [0.16, 1, 0.3, 1]

export default function ContentPage({ revealed }) {
  const prefersReducedMotion = useReducedMotion()
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-5 z-10 flex justify-center px-4 sm:top-6">
        <div className="flex w-full max-w-2xl items-center justify-between gap-4 rounded-full border border-white/15 bg-black/35 py-0.5 pl-4 pr-2.5 shadow-[0_8px_32px_-10px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:pl-5">
          <motion.div
            layout={!prefersReducedMotion}
            layoutId={prefersReducedMotion ? undefined : 'vcom-mark'}
            className="flex items-center"
          >
            <img src={vcomLogo} alt="Vcom" className="h-12 w-auto sm:h-14" draggable={false} />
          </motion.div>

          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-medium text-[#17151c] transition-colors hover:bg-white/90 sm:px-5"
          >
            Solicitar orçamento
          </button>
        </div>
      </header>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />

      <main className="flex flex-col items-center pb-16 pt-28 sm:pt-32">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 22 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_EXPO }}
        >
          <ServicesBanner />
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 22 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE_EXPO }}
        >
          <MugShowcase />
        </motion.div>
      </main>
    </div>
  )
}
