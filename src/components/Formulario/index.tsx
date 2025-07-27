import { Container } from './styles'

type Props = {
  children?: JSX.Element
  title?: string
}

const Formulario = ({ children, title }: Props) => (
  <Container>
    <h1>{title}</h1>
    {children}
  </Container>
)

export default Formulario
