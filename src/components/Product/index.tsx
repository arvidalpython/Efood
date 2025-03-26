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
  botaos: string
  description: string
  infos: string[]
  infos2?: string
  image: string
  imgestrela: string
}

const Product = ({
  title,
  id,
  nota,
  botaos,
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
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <NomeNota>
      <Titulo>{title}</Titulo>
      <Nota>
        {nota}
        <img src={imgestrela} alt="" />
      </Nota>
    </NomeNota>
    <Descricao>{description}</Descricao>
    <SaibaMais>{botaos}</SaibaMais>
  </Card>
)

export default Product
