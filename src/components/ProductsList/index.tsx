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
            botaosmais={food.botaosmais}
            title={food.title}
            id={food.id}
            imgestrela={food.imgestrela}
            destino={food.destino}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
