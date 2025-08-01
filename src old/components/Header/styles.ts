import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

export const HeaderBar = styled.header`
  background-color: ${cores.branca};
  /* padding: 24px; */
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;

  .container-header {
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: ${cores.vermelho};
    text-decoration: none;
    font-weight: bold;
  }

  .logo {
    max-width: 150px;
    margin-left: 80px;
  }
`

export const Links = styled.ul`
  display: flex;
  /* margin-left: 40px; */
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`
export const CartButton = styled.a`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;

  img {
    margin-left: 8px;
  }
`
