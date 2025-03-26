import Food from '../../models/Food'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            nota={food.nota}
            description={food.description}
            image={food.image}
            infos={food.infos}
            infos2={food.infos2}
            botaos={food.botaos}
            title={food.title}
            id={1}
            imgestrela={food.imgestrela}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
