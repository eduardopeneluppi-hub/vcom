import { useEffect, useRef, useState } from 'react'

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

export function useLoadingProgress(durationMs = 2400) {
  const [percent, setPercent] = useState(0)
  const [done, setDone] = useState(false)
  const startRef = useRef(null)

  useEffect(() => {
    let frame

    const tick = (now) => {
      if (startRef.current === null) startRef.current = now
      const elapsed = now - startRef.current
      const t = Math.min(elapsed / durationMs, 1)
      setPercent(Math.round(easeOutQuart(t) * 100))

      if (t < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDone(true)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [durationMs])

  return { percent, done }
}
