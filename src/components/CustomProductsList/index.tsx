import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, List } from './styles'
import Product from '../Product'
import { Food } from '../../models/Food'
import imgEstrela from '../../assets/images/estrela.png'
import MenuItem from '../MenuItem'

export type Props = {
  title: string
}

const CustomProductsList = ({ title }: Props) => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Food | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        const data = await response.json()
        setRestaurant(data)
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurantMenu()
  }, [id])

  if (loading) return <div>Carregando...</div>
  if (!restaurant) return <div>Restaurante não encontrado</div>

  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.cardapio.map((item) => (
            <MenuItem
              key={item.id}
              id={item.id}
              titulo={item.nome}
              tipo={restaurant.tipo}
              nota={restaurant.avaliacao}
              description={item.descricao}
              image={item.foto}
              infos={[item.porcao, item.preco]}
              botaosmais="Adicionar ao carrinho"
              imgestrela={imgEstrela}
              preco={item.preco}
              porcao={item.porcao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default CustomProductsList
