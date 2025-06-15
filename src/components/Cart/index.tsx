import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import imgteste from '../../assets/images/japones.png'
import { RootReducer } from '../../store/'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += Number(valorAtual.preco))
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  if (!isOpen) return null

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(Number(item.preco))}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total <span>{formataPreco(Number(getTotalPrice()))}</span>{' '}
        </Prices>
        <Button
          // className="button"
          type="button"
          title="Saiba Mais"
          variant="secondary"
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
