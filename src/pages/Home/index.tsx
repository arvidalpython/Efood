import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useEffect, useState } from 'react'

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
  cardapio: GalleryItem[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Food2[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList foods={restaurantes} title="Destaques da semana" />
      {/* <ProductsList
        foods={restaurantes.filter((item) => !item.destacado)}
        title="Nossos restaurantes"
      /> */}
    </>
  )
}
export default Home
