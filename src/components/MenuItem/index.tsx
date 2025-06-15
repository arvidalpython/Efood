import { useState } from 'react'
import Button from '../Button'
import fechar from '../../assets/images/close 1.png'
import { Item, Items, Modal, ModalContent } from './styles'
import { Card, Descricao } from '../Product/styles'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type CardapioItem = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: string
  porcao: string
}

type Props = {
  food: CardapioItem
  tipo: string
  nota: string
  imgestrela: string
  botaosmais: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuItem = ({ food, tipo, nota, imgestrela, botaosmais }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
    setModalIsOpen(false)
  }

  return (
    <>
      <Card>
        <img src={food.foto} alt={food.nome} />
        <Descricao>{food.descricao}</Descricao>
        <Button
          type="button"
          title="Mais detalhes"
          onClick={() => setModalIsOpen(true)}
          variant="secondary"
        >
          {botaosmais}
        </Button>
      </Card>

      <Modal className={modalIsOpen ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={food.foto} alt={food.nome} className="modal-image" />
          <img
            src={fechar}
            alt="ícone de fechar"
            className="close-icon"
            onClick={() => setModalIsOpen(false)}
          />
          <div className="container-p">
            <h4>{food.nome}</h4>
            <p>{food.descricao}</p>
            <p>Serve: {food.porcao}</p>
            <Button
              className="button"
              type="button"
              title="Adicionar ao carrinho"
              variant="secondary"
              onClick={addToCart}
            >
              {`Adicionar ao carrinho - R$ ${food.preco}`}
            </Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)} />
      </Modal>
    </>
  )
}

export default MenuItem
