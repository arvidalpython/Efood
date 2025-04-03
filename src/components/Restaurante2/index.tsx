import { Imagem, Titulo, Titulo2 } from './styles'
import japa from '../../assets/images/japones.png'

const Restaurante = () => (
  <Imagem style={{ backgroundImage: `url(${japa})` }}>
    <div className="container">
      <Titulo> Japonesa </Titulo>
      <Titulo2> Hioki Sushi </Titulo2>
    </div>
  </Imagem>
)
export default Restaurante
