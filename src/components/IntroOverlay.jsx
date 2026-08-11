import { motion, useReducedMotion } from 'framer-motion'
import vcomLogo from '../assets/vcom-logo.png'

const EASE_EXPO = [0.16, 1, 0.3, 1]

export default function IntroOverlay({ percent, done }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0a0a0d]"
      style={!prefersReducedMotion ? { clipPath: 'circle(150% at 50% 50%)' } : undefined}
      exit={
        prefersReducedMotion
          ? { opacity: 0, transition: { duration: 0.5 } }
          : { clipPath: 'circle(0% at 16% 6%)', transition: { duration: 0.95, ease: EASE_EXPO } }
      }
    >
      {/* Ambient color glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(42% 38% at 34% 32%, oklch(0.62 0.24 350 / 0.22), transparent 70%), radial-gradient(46% 42% at 68% 74%, oklch(0.82 0.16 85 / 0.16), transparent 70%)',
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 50% 50%, transparent 45%, oklch(0.08 0.01 285) 100%)',
        }}
      />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative flex flex-col items-center gap-16">
        {/* Logo entrance */}
        <div style={{ perspective: 1000 }} className="relative">
          <motion.div
            layout={!prefersReducedMotion}
            layoutId={prefersReducedMotion ? undefined : 'vcom-mark'}
            className="relative"
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.55, y: 28, rotateX: 22, filter: 'blur(22px)' }
            }
            animate={
              done
                ? {
                    opacity: 1,
                    scale: 1,
                    y: prefersReducedMotion ? 0 : [0, -7, 0],
                    rotateX: 0,
                    filter: 'blur(0px)',
                  }
                : { opacity: 1, scale: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }
            }
            transition={
              done
                ? { y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }
                : { duration: 1.15, delay: 0.15, ease: EASE_EXPO }
            }
          >
            <img
              src={vcomLogo}
              alt="Vcom"
              width={520}
              height={252}
              className="w-[min(70vw,520px)] select-none"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Progress */}
        <motion.div
          className="flex flex-col items-center gap-3"
          animate={{ opacity: done ? 0 : 1 }}
          transition={{ duration: 0.5, delay: done ? 0.2 : 0 }}
        >
          <div className="h-px w-56 overflow-hidden bg-white/10">
            <div
              className="h-full"
              style={{
                width: `${percent}%`,
                background: 'linear-gradient(90deg, oklch(0.62 0.24 350), oklch(0.82 0.16 85))',
              }}
            />
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-white/40">
            <span>CARREGANDO</span>
            <span className="tabular-nums text-white/60">{percent}%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
