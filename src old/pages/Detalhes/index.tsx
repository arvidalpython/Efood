import Header from '../../components/Header'
import Restaurante2 from '../../components/Restaurante2'
import CustomProductsList from '../../components/CustomProductsList'
import { useGetFeatureRestaurantsQuery } from '../../services/api'

const Detalhes = () => {
  const { data: restaurants, isLoading } = useGetFeatureRestaurantsQuery()

  if (isLoading) return <div>Carregando...</div>

  return (
    <>
      <Header />
      <Restaurante2 />
      <CustomProductsList title="Cardápio" />
    </>
  )
}

export default Detalhes
