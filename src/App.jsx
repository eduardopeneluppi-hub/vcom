import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import IntroOverlay from './components/IntroOverlay'
import ContentPage from './components/ContentPage'
import { useLoadingProgress } from './hooks/useLoadingProgress'

function App() {
  const { percent, done } = useLoadingProgress(2400)
  const [stage, setStage] = useState('intro')

  useEffect(() => {
    if (!done) return
    const timer = setTimeout(() => setStage('content'), 650)
    return () => clearTimeout(timer)
  }, [done])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <ContentPage revealed={stage === 'content'} />
      <AnimatePresence>
        {stage === 'intro' && <IntroOverlay percent={percent} done={done} />}
      </AnimatePresence>
    </div>
  )
}

export default App
