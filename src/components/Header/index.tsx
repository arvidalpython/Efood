import { Link } from 'react-router-dom'

import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Imagem,
  Titulo
} from './styles'
import logo from '../../assets/images/logofood.png'
import bannerImg from '../../assets/images/Vector.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
        <CartButton onClick={openCart}>
          {items.length} - produto(s) no carrinho
        </CartButton>
      </div>
    </HeaderBar>
  )
}

export default Header
