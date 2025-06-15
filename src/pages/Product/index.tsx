import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import CustomProductsList from '../../components/CustomProductsList'
import { useGetMenuFoodsQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Product = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading, error } = useGetMenuFoodsQuery(id!)

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar o restaurante</div>
  if (!restaurante) return <div>Restaurante não encontrado</div>

  return (
    <>
      <Header />
      <Hero
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <CustomProductsList title={''} />
    </>
  )
}

export default Product
