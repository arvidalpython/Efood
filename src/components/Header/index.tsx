import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart, Imagem, Titulo } from './styles'
import logo from '../../assets/images/logofood.png'
import bannerImg from '../../assets/images/Vector.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container-header">
      <nav>
        <Links>
          <LinkItem>
            <Link className="link-categorias" to="/">
              Restaurantes
            </Link>
          </LinkItem>
        </Links>
      </nav>
      <Link className="logo" to="/">
        <img src={logo} alt="efood" />
      </Link>
      <LinkCart href="#">0 - produto(s) no carrinho</LinkCart>
    </div>
  </HeaderBar>
)

export default Header
