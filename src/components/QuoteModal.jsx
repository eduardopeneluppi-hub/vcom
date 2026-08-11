import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const EASE_EXPO = [0.16, 1, 0.3, 1]
const WHATSAPP_NUMBER = '5512996535788'

const SERVICES = [
  { id: 'banners', label: 'Banners & Lonas para fachada', icon: 'banner' },
  { id: 'cartoes', label: 'Cartões', icon: 'card' },
  { id: 'tags', label: 'Tags', icon: 'tag' },
  { id: 'flyers', label: 'Flyers & Folders', icon: 'flyer' },
  { id: 'canecas', label: 'Copos & Canecas', icon: 'mug' },
  { id: 'camisetas', label: 'Camisetas', icon: 'shirt' },
  { id: 'apostilas', label: 'Apostilas', icon: 'book' },
  { id: 'caixa', label: 'Caixa Cartonada', icon: 'box' },
  { id: 'adesivos', label: 'Adesivos', icon: 'sticker' },
  { id: 'outro', label: 'Outro', icon: 'other' },
]

const ICON_PATHS = {
  banner: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="M3 15.5l5-4 4 3.5 3-2.5 6 5" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M3 10h18" />
      <path d="M6.5 14h4" />
    </>
  ),
  tag: (
    <>
      <path d="M11.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v6.5c0 .4.16.78.44 1.06l8 8c.58.58 1.52.58 2.1 0l6.5-6.5a1.5 1.5 0 0 0 0-2.1l-8-8a1.5 1.5 0 0 0-1.04-.46Z" />
      <circle cx="8" cy="8" r="1.5" />
    </>
  ),
  flyer: (
    <>
      <path d="M7 3h8l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M15 3v4h4" />
      <path d="M9 12h6M9 15.5h6M9 8.5h3" />
    </>
  ),
  mug: (
    <>
      <path d="M5 4h11v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V4Z" />
      <path d="M16 7h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 4V2.5M12 4V2.5" />
    </>
  ),
  shirt: (
    <>
      <path d="M8 3 4 6l1.5 3L8 8v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8l2.5 1L20 6l-4-3-2 2h-4Z" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21Z" />
      <path d="M4 5.5v15.5" />
      <path d="M8 8h8M8 11h8" />
    </>
  ),
  other: (
    <>
      <circle cx="6" cy="12" r="1.4" />
      <circle cx="12" cy="12" r="1.4" />
      <circle cx="18" cy="12" r="1.4" />
    </>
  ),
  box: (
    <>
      <path d="M3 8l9-4 9 4-9 4-9-4Z" />
      <path d="M3 8v9l9 4V12" />
      <path d="M21 8v9l-9 4V12" />
    </>
  ),
  sticker: (
    <>
      <path d="M4 4h11l5 5v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4Z" />
      <path d="M15 4v3a2 2 0 0 0 2 2h3" />
      <circle cx="10" cy="14" r="2.2" />
    </>
  ),
}

function ServiceIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {ICON_PATHS[name]}
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.78-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17 0-.37 0-.57 0-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9A11.82 11.82 0 0 0 20.44 3.5 11.8 11.8 0 0 0 12.05 0Zm6.99 18.88a9.87 9.87 0 0 1-6.99 2.9h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.44 6.6 2 12.05 2a9.83 9.83 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99 9.85 9.85 0 0 1-2.89 6.99Z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-5 w-5">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export default function QuoteModal({ open, onClose }) {
  const [selected, setSelected] = useState(null)
  const [customText, setCustomText] = useState('')

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setSelected(null)
      setCustomText('')
    }
  }, [open])

  const isOther = selected === 'outro'
  const canContinue = selected && (!isOther || customText.trim().length > 0)

  const handleContinue = () => {
    if (!canContinue) return
    const service = SERVICES.find((s) => s.id === selected)
    const message = isOther
      ? customText.trim()
      : `Olá! Gostaria de solicitar um orçamento para: ${service.label}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
              className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.35, ease: EASE_EXPO }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#17151c]/50 transition-colors hover:bg-black/5 hover:text-[#17151c]"
              >
                <CloseIcon />
              </button>

              <h2
                id="quote-modal-title"
                className="pr-10 text-[clamp(1.4rem,3.5vw,1.75rem)] font-semibold tracking-tight text-[#17151c]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Solicitar orçamento
              </h2>
              <p className="mt-1.5 text-sm text-[#6b6875]">
                Escolha o serviço que você precisa e continue no WhatsApp.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {SERVICES.map((service) => {
                  const isSelected = selected === service.id
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelected(service.id)}
                      aria-pressed={isSelected}
                      className={`flex cursor-pointer flex-col items-start gap-2.5 rounded-2xl border px-3.5 py-3.5 text-left text-sm font-medium transition-colors ${
                        isSelected
                          ? 'border-[#17151c] bg-[#17151c] text-white'
                          : 'border-black/10 text-[#17151c] hover:border-black/25 hover:bg-black/[0.03]'
                      }`}
                    >
                      <ServiceIcon name={service.icon} />
                      <span className="leading-snug">{service.label}</span>
                    </button>
                  )
                })}
              </div>

              <AnimatePresence initial={false}>
                {isOther && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE_EXPO }}
                    className="overflow-hidden"
                  >
                    <textarea
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="Descreva o que você precisa..."
                      rows={3}
                      className="mt-4 w-full resize-none rounded-2xl border border-black/10 px-4 py-3 text-sm text-[#17151c] outline-none placeholder:text-[#6b6875]/70 focus:border-black/30"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={handleContinue}
                disabled={!canContinue}
                className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              >
                <WhatsAppIcon />
                Continuar no WhatsApp
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
