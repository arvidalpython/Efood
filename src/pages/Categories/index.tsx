import ProductsList from '../../components/ProductsList'
import Game from '../../models/Food'
import imagem from '../../assets/images/imagem.png'
import imagem1 from '../../assets/images/image 1.png'
import estrela from '../../assets/images/estrela.png'

const emBreve: Game[] = [
  {
    id: 1,
    nota: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: imagem,
    infos: ['Japonesa'],
    infos2: 'Destaque da semana',
    botaos: 'Saiba mais',
    title: 'Hioki Sushi',
    imgestrela: estrela
  },
  {
    id: 2,
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem1,
    infos: ['Italiana'],
    infos2: '',
    botaos: 'Saiba mais',
    title: 'La Dolce Vita Trattoria',
    imgestrela: estrela
  },
  {
    id: 3,
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem1,
    infos: ['Italiana'],
    infos2: '',
    botaos: 'Saiba mais',
    title: 'La Dolce Vita Trattoria',
    imgestrela: estrela
  },
  {
    id: 4,
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem1,
    infos: ['Italiana'],
    infos2: '',
    botaos: 'Saiba mais',
    title: 'La Dolce Vita Trattoria',
    imgestrela: estrela
  },
  {
    id: 5,
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem1,
    infos: ['Italiana'],
    infos2: '',
    botaos: 'Saiba mais',
    title: 'La Dolce Vita Trattoria',
    imgestrela: estrela
  },
  {
    id: 6,
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem1,
    infos: ['Italiana'],
    infos2: '',
    botaos: 'Saiba mais',
    title: 'La Dolce Vita Trattoria',
    imgestrela: estrela
  }
]

const Categories = () => (
  <>
    <ProductsList foods={emBreve} title="Ação" />
  </>
)
export default Categories
