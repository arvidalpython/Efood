import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import img3 from '../../assets/images/imagemRestaurante.png'
import Gallery from '../../components/Gallery'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import CustomProductsList from '../../components/CustomProductsList'

interface Restaurante {
  id: number
  titulo: string
  tipo: string
  capa: string // URL da imagem
  avaliacao: string
  descricao: string
  cardapio: Array<{
    id: number
    nome: string
    descricao: string
    foto: string
    preco: string
    porcao: string
  }>
}

const Product = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data)
      })
  }, [id])

  if (!restaurante) return <div>Carregando...</div>
  return (
    <>
      <Header />
      <Hero
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      {/* <Section title="Sobre o Jogo" background="claro">
        <p>{restaurante.descricao}</p>
      </Section> */}
      <CustomProductsList title={''} />
      {/* <Gallery name="jogo teste" defaultCover={img3} /> */}
    </>
  )
}

export default Product
