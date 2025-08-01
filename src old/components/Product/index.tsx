import { Link } from 'react-router-dom'
import Tag from '../Tag'
import Button from '../Button'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  NomeNota,
  Nota,
  SaibaMais
} from './styles'

type Props = {
  id: number
  titulo: string
  tipo: string
  nota: string
  description: string
  image: string
  infos: string[]
  botaosmais: string
  imgestrela: string
  destino: string
  destacado?: boolean
}

const Product = ({
  id,
  titulo,
  tipo,
  nota,
  description,
  image,
  infos,
  botaosmais,
  imgestrela,
  destino,
  destacado
}: Props) => {
  return (
    <Card>
      <div className="imagem-card">
        <img src={image} alt={titulo} />
      </div>
      <Infos>
        {destacado && <Tag size="small">Destaque da semana</Tag>}
        <Tag size="small">{tipo}</Tag>
      </Infos>
      <NomeNota>
        <Titulo>{titulo}</Titulo>
        <Nota>
          {nota}
          <img src={imgestrela} alt="" />
        </Nota>
      </NomeNota>
      <Descricao>{description}</Descricao>
      <SaibaMais to={destino}>{botaosmais}</SaibaMais>
    </Card>
  )
}

export default Product
