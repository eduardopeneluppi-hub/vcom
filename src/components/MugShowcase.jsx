import FocusCarousel from './FocusCarousel'
import mug1 from '../assets/mug-1.png'
import caixa1 from '../assets/caixa-1.png'
import panfleto1 from '../assets/panfleto-1.png'
import mugFrameBg from '../assets/mug-frame-bg.png'

const PRODUCTS = [
  {
    src: mug1,
    alt: 'Caneca personalizada Vcom, estampa "Você merece o mundo"',
    title: 'Canecas personalizadas',
  },
  {
    src: caixa1,
    alt: 'Caixas cartonadas personalizadas Vcom',
    title: 'Caixas Cartonadas',
  },
  {
    src: panfleto1,
    alt: 'Panfletos personalizados impressos pela Vcom',
    title: 'Panfletos personalizados',
    scale: 1.15,
  },
]

export default function MugShowcase() {
  return (
    <FocusCarousel
      items={PRODUCTS}
      frameSrc={mugFrameBg}
      frameClassName="pointer-events-none absolute inset-0 z-0 h-full w-full scale-150 select-none object-contain sm:scale-[1.9]"
      prevLabel="Produto anterior"
      nextLabel="Próximo produto"
    />
  )
}
