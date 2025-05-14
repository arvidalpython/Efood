import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'
import imagem from '../../assets/images/imagem.png'
import imagem1 from '../../assets/images/image 1.png'
import Header from '../../components/Header'
import Restaurante2 from '../../components/Restaurante2'
import CustomProductsList from '../../components/CustomProductsList'
import pizza from '../../assets/images/pizza.png'

const Detalhes = () => {
  return (
    <>
      <Header />
      <Restaurante2 />
      <CustomProductsList title="Cardápio" />
    </>
  )
}

export default Detalhes
