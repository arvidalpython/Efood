import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import Restaurante from '../../components/Restaurante'
import CustomProductsList from '../../components/CustomProductsList'
import { useGetFeatureRestaurantsQuery } from '../../services/api'

const Categories = () => {
  const { data: restaurants, isLoading } = useGetFeatureRestaurantsQuery()

  if (isLoading) return <div>Carregando...</div>

  return (
    <>
      <Header />
      <Restaurante />
      <CustomProductsList title="Cardápio" />
    </>
  )
}

export default Categories
