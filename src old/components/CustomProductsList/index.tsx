import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, List } from './styles'
import MenuItem from '../MenuItem'
import imgEstrela from '../../assets/images/estrela.png'
import { useGetMenuFoodsQuery } from '../../services/api'

export type Props = {
  title: string
}

const CustomProductsList = ({ title }: Props) => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurant, isLoading, error } = useGetMenuFoodsQuery(id!)

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar o restaurante</div>
  if (!restaurant) return <div>Restaurante não encontrado</div>

  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.cardapio.map((item) => (
            <MenuItem
              key={item.id}
              food={item}
              tipo={restaurant.tipo}
              nota={restaurant.avaliacao}
              imgestrela={imgEstrela}
              botaosmais="Mais detalhes"
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default CustomProductsList
