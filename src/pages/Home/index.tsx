import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetFeatureRestaurantsQuery } from '../../services/api'
import { on } from 'events'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
  foto: string
  preco: string
  id: number
  nome: string
  descricao: string
  porcao: string
  titulo: string
  tipo: string
  destacado: boolean
}

export type Food2 = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Array<{
    id: number
    nome: string
    descricao: string
    foto: string
    preco: string
    porcao: string
  }>
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Home = () => {
  const { data: onSaleFoods } = useGetFeatureRestaurantsQuery()

  if (!onSaleFoods) {
    return <h4>Carregando</h4>
  }
  return (
    <>
      <Banner />
      <ProductsList foods={onSaleFoods} title="Destaques da semana" />
      {/* <ProductsList
        foods={restaurantes.filter((item) => !item.destacado)}
        title="Nossos restaurantes"
      /> */}
    </>
  )
}
export default Home
