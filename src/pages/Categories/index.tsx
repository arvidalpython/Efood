import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'
import imagem from '../../assets/images/imagem.png'
import imagem1 from '../../assets/images/image 1.png'
import Header from '../../components/Header'
import Restaurante from '../../components/Restaurante'
import CustomProductsList from '../../components/CustomProductsList'
import pizza from '../../assets/images/pizza.png'

const menu: Food[] = [
  {
    id: 1,
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: [''],
    infos2: '',
    botaosmais: 'Adicionar ao carrinho',
    title: 'Pizza Marguerita',
    imgestrela: '',
    destino: ''
  },
  {
    id: 2,
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: [''],
    infos2: '',
    botaosmais: 'Adicionar ao carrinho',
    title: 'Pizza Marguerita',
    imgestrela: '',
    destino: ''
  },
  {
    id: 3,
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: [''],
    infos2: '',
    botaosmais: 'Adicionar ao carrinho',
    title: 'Pizza Marguerita',
    imgestrela: '',
    destino: ''
  },
  {
    id: 4,
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: [''],
    infos2: '',
    botaosmais: 'Adicionar ao carrinho',
    title: 'Pizza Marguerita',
    imgestrela: '',
    destino: ''
  },
  {
    id: 5,
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: [''],
    infos2: '',
    botaosmais: 'Adicionar ao carrinho',
    title: 'Pizza Marguerita',
    imgestrela: '',
    destino: ''
  },
  {
    id: 6,
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: [''],
    infos2: '',
    botaosmais: 'Adicionar ao carrinho',
    title: 'Pizza Marguerita',
    imgestrela: '',
    destino: ''
  }
]

const Categories = () => {
  return (
    <>
      <Header />
      <Restaurante />
      <CustomProductsList foods={menu} title="menu" isCategoriesPage={true} />
    </>
  )
}

export default Categories
