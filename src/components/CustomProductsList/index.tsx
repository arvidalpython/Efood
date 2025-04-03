import React from 'react'
import { Container, List } from './styles'
import Food from '../../models/Food'
import CustomProduct from '../CustomProduct'

export type Props = {
  title: string
  foods: Food[]
  isCategoriesPage?: boolean // Adicione uma prop para identificar o contexto
}

const CustomProductsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <CustomProduct
            key={food.id}
            nota={food.nota}
            description={food.description}
            image={food.image}
            infos={food.infos}
            infos2={food.infos2}
            botaosmais={food.botaosmais}
            title={food.title}
            id={1}
            imgestrela={food.imgestrela}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default CustomProductsList
