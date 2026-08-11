import FocusCarousel from './FocusCarousel'
import mug1 from '../assets/mug-1.png'
import mug2 from '../assets/mug-2.png'
import mug3 from '../assets/mug-3.png'

const MUGS = [
  { src: mug1, alt: 'Caneca personalizada Vcom, estampa "Você merece o mundo"' },
  { src: mug2, alt: 'Canecas personalizadas com escudos de times de futebol' },
  { src: mug3, alt: 'Caneca preta personalizada com frase sobre café' },
]

export default function MugShowcase() {
  return (
    <FocusCarousel
      title="Canecas personalizadas"
      items={MUGS}
      prevLabel="Caneca anterior"
      nextLabel="Próxima caneca"
    />
  )
}
