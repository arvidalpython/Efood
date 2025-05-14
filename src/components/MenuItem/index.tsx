import { useState } from 'react'
import Tag from '../Tag'
import Button from '../Button'
import fechar from '../../assets/images/close 1.png'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  NomeNota,
  Nota,
  SaibaMais
} from '../Product/styles'

import { Item, Items, Modal, ModalContent } from './styles'

type Props = {
  id: number
  titulo: string
  tipo: string
  nota: string
  description: string
  image: string
  infos: string[]
  botaosmais: string
  imgestrela: string
  preco: string
  porcao: string
}

const MenuItem = ({
  id,
  titulo,
  tipo,
  nota,
  description,
  image,
  infos,
  botaosmais,
  imgestrela,
  preco,
  porcao
}: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <Card>
        <div className="imagem-card">
          <img src={image} alt={titulo} />
        </div>
        <NomeNota>
          <Titulo>{titulo}</Titulo>
        </NomeNota>
        <Descricao>{description}</Descricao>
        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={() => setModalIsOpen(true)}
          variant="secondary"
        >
          {botaosmais}
        </Button>
      </Card>

      <Modal className={modalIsOpen ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={image} alt={titulo} className="modal-image" />
          <img
            src={fechar}
            alt="ícone de fechar"
            className="close-icon"
            onClick={() => setModalIsOpen(false)}
          />
          <div className="container-p">
            <h4>{titulo}</h4>
            <p>{description}</p>
            <p>Serve: de {porcao}</p>
            <Button
              className="button"
              type="button"
              title="Fechar"
              variant="secondary"
            >
              {`Adicionar ao carrinho - R$ ${preco}`}
            </Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)} />
      </Modal>
    </>
  )
}

export default MenuItem
