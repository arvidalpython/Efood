import { Food2 } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'
import imgEstrela from '../../assets/images/estrela.png'

export type Props = {
  title: string
  foods: Food2[]
}

const ProductsList = ({ foods, title }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            id={food.id}
            titulo={food.titulo}
            tipo={food.tipo}
            destacado={food.destacado}
            nota={food.avaliacao}
            description={food.descricao}
            image={food.capa}
            infos={[]}
            botaosmais="Saiba Mais"
            imgestrela={imgEstrela}
            destino={`/product/${food.id}`}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
