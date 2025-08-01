import japa from '../../assets/images/japones.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Titulo, Titulo2 } from './styles'

type Props = {
  capa: string // URL da imagem da capa
  tipo: string // Tipo de culinária
  titulo: string // Nome do restaurante
}

const Hero = ({ capa, tipo, titulo }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <div>
          <Titulo>{tipo}</Titulo>
        </div>
        <div>
          <Titulo2>{titulo}</Titulo2>
        </div>
      </div>
    </Banner>
  )
}
export default Hero
