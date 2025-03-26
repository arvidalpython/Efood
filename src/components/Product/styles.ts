import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  /* border-radius: 8px; */
  /* padding: 8px; */
  position: relative;
  margin-bottom: 48px;
  border: solid 1px;

  ${TagContainer} {
    margin-right: 8px;
  }

  .imagem-card {
    width: 100%; /* Faz a imagem ocupar toda a largura do Card */
    height: 200px; /* Altura específica para a área da imagem */
    overflow: hidden; /* Esconde partes da imagem que ultrapassem os limites */
  }

  img {
    width: 472;
    height: 217;
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
  /* margin-top: 16px; */
  /* margin-bottom: 16px; */
  margin: 16px 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const NomeNota = styled.div`
  display: flex; /* Ativa flexbox */
  justify-content: space-between; /* Distribui os itens, colocando um em cada extremidade horizontal */
  align-items: center; /* Alinha os itens verticalmente no centro */
  width: 100%; /* Garante que o elemento ocupe toda a largura disponível */
  /* margin: 8px 0; */
`
export const Nota = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
  display: flex; /* Ativa flexbox */
  align-items: center; /* Centraliza verticalmente o texto e a imagem */
  gap: 4px; /* Adiciona espaçamento entre o texto e a imagem (opcional) */

  img {
    margin-left: 8px; /* Espaçamento da imagem em relação ao texto */
    vertical-align: middle; /* Garante que a imagem esteja alinhada no centro vertical */
  }
`
export const SaibaMais = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.rosaEscuro};
  font-size: 12px;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  font-family: Roboto;
  font-weight: 700;
  text-align: center;
`
