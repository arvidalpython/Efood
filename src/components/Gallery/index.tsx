import Section from '../Section'
import img from '../../assets/images/Djapa-rodizio-japones-2.jpg'
import img2 from '../../assets/images/imagemRestaurante.png'
import fechar from '../../assets/images/close 1.png'
import { Item, Items, Modal, ModalContent } from './styles'
import Button from '../Button'
import { useState } from 'react'
import { GalleryItem } from '../../pages/Home'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: img,
    foto: img,
    preco: 'string',
    id: 1,
    nome: 'string',
    descricao: 'string',
    porcao: 'string',
    titulo: 'string',
    tipo: 'string',
    destacado: false
  },
  {
    type: 'image',
    url: img,
    foto: 'string',
    preco: 'string',
    id: 1,
    nome: 'string',
    descricao: 'string',
    porcao: 'string',
    titulo: 'string',
    tipo: 'string',
    destacado: false
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: '',
    foto: 'string',
    preco: 'string',
    id: 1,
    nome: 'string',
    descricao: 'string',
    porcao: 'string',
    titulo: 'string',
    tipo: 'string',
    destacado: false
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return img
    return img2
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: '',
      foto: 'string',
      preco: 'string',
      id: 1,
      nome: 'string',
      descricao: 'string',
      porcao: 'string',
      titulo: 'string',
      tipo: 'string',
      destacado: false
    })
  }

  return (
    <>
      <Section title="Sobre o Jogo2" background="escuro">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url,
                  foto: 'string',
                  preco: 'string',
                  id: 1,
                  nome: 'string',
                  descricao: 'string',
                  porcao: 'string',
                  titulo: 'string',
                  tipo: 'string',
                  destacado: false
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={modal.url} alt="" className="modal-image" />
          <img
            src={fechar}
            alt="ícone de fechar"
            className="close-icon"
            onClick={() => {
              closeModal()
            }}
          />
          <div className="container-p">
            <header>
              <h4>{name}</h4>
            </header>
            <p></p>
            <Button
              className="button"
              type="button"
              title="Saiba Mais"
              variant="secondary"
            >
              Adicionar ao carrinho - R$ 60,90
            </Button>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        />
      </Modal>
    </>
  )
}

export default Gallery
