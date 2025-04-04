import { Link } from 'react-router-dom'
import Tag from '../Tag'

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
  title: string
  nota: string
  botaosmais: string
  description: string
  infos: string[]
  infos2?: string
  image: string
  imgestrela: string
}

const CustomProduct = ({
  title,
  id,
  nota,
  botaosmais,
  description,
  infos,
  infos2,
  image,
  imgestrela
}: Props) => (
  <Card>
    <div className="imagem-card">
      <img src={image} alt={title} />
    </div>
    <Infos>
      {id === 1 && infos2 && <Tag>{infos2}</Tag>}
      {infos.length > 0 &&
        infos.some((info) => info !== '') &&
        infos.map((info) => info && <Tag key={info}>{info}</Tag>)}
    </Infos>
    <NomeNota>
      <Titulo>{title}</Titulo>
      <Nota>
        {nota}
        <img src={imgestrela} alt="" />
      </Nota>
    </NomeNota>
    <Descricao>{description}</Descricao>
    <SaibaMais to="">{botaosmais}</SaibaMais>
  </Card>
)

export default CustomProduct
