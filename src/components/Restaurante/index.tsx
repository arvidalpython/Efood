import { Imagem, Titulo, Titulo2 } from './styles'
import restaurantes from '../../assets/images/imagemRestaurante.png'

const Restaurante = () => (
  <Imagem style={{ backgroundImage: `url(${restaurantes})` }}>
    <div className="container">
      <Titulo> Italiana </Titulo>
      <Titulo2> La Dolce Vita Trattoria </Titulo2>
    </div>
  </Imagem>
)
export default Restaurante
