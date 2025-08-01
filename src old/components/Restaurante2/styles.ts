import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    color: ${cores.branca};

    img {
      margin-top: 64px;
    }
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Titulo = styled.h2`
  max-width: 539px;
  /* margin: 0 auto; */
  font-family: Roboto;
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;
`
export const Titulo2 = styled.h2`
  max-width: 539px;
  /* margin: 0 auto; */
  font-family: Roboto;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;
`
