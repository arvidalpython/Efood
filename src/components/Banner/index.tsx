import { Imagem, Titulo } from './styles'
import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logofood.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <img src={logo} alt="Logo Game" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Imagem>
)
export default Banner
