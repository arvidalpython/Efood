import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  margin-bottom: 48px;
  border: solid 1px;

  ${TagContainer} {
    margin-right: 8px;
  }

  .imagem-card {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  img {
    top: 440px;
    left: 171px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-left: 7px;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const NomeNota = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const Nota = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    margin-left: 8px;
    vertical-align: middle;
  }
`
export const SaibaMais = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.rosaEscuro};
  font-size: 12px;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  text-decoration: none;

  font-family: Roboto;
  font-weight: 700;
  text-align: center;
`
