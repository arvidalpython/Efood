import { Container, Title } from './styles'

export type Props = {
  title: string
  background: 'claro' | 'escuro'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <>
      <Container background={background}>
        <div className="container">
          <Title>{title}</Title>
          {children}
        </div>
      </Container>
    </>
  )
}
export default Section
