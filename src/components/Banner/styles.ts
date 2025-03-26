import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    img {
      margin-top: 64px;
    }
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Logo = styled.div`
  align-items: center;
  margin-top: 640px;
`
export const Titulo = styled.h2`
  max-width: 539px;
  margin: 0 auto;
  font-family: Roboto;
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
