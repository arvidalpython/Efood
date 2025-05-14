import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'
import imagem from '../../assets/images/imagem.png'
import imagem1 from '../../assets/images/image 1.png'
import Header from '../../components/Header'
import Restaurante from '../../components/Restaurante'
import CustomProductsList from '../../components/CustomProductsList'
import pizza from '../../assets/images/pizza.png'
import { Food2 } from '../Home'

const Categories = () => {
  return (
    <>
      <Header />
      <Restaurante />
      <CustomProductsList title="Cardápio" />
    </>
  )
}

export default Categories
