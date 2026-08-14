import { motion } from 'framer-motion'
import SectionBadgeTitle from './SectionBadgeTitle'
import mug1 from '../assets/mug-1.png'
import mugFrameBg from '../assets/mug-frame-bg.png'

const EASE_EXPO = [0.16, 1, 0.3, 1]

export default function MugShowcase() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="flex justify-center px-6">
        <SectionBadgeTitle>Canecas personalizadas</SectionBadgeTitle>
      </div>

      <motion.div
        className="relative mx-auto mt-10 flex h-[320px] w-full max-w-lg items-center justify-center sm:h-[400px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE_EXPO }}
      >
        <img
          src={mugFrameBg}
          alt=""
          className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-150 select-none object-contain sm:scale-[1.9]"
          draggable={false}
        />

        <img
          src={mug1}
          alt='Caneca personalizada Vcom, estampa "Você merece o mundo"'
          className="relative z-10 h-[280px] w-auto select-none drop-shadow-2xl sm:h-[360px]"
          draggable={false}
        />
      </motion.div>
    </section>
  )
}
