import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.variant === 'primary' ? cores.rosa : cores.vermelho};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.vermelho : cores.rosaEscuro};
  font-size: ${(props) => (props.variant === 'primary' ? '12px' : '14px')};
  border: none;
  display: inline-block;
  width: ${(props) => (props.variant === 'primary' ? '82px' : '100%')};
  max-width: ${(props) => (props.variant === 'primary' ? '' : '100%')};
  height: 24px;
  /* margin-left: 8px; */
  /* margin-bottom: 8px; */
  cursor: pointer;
  text-decoration: none;

  font-family: Roboto;
  font-weight: 700;
`
export const SaibaMais = styled(Link)`
  background-color: ${cores.rosaEscuro};
  color: ${cores.vermelho};
  font-size: 14px;
  padding: 4px 4px;
  display: inline-block;
  margin-top: 8px;
  cursor: pointer;
  text-decoration: none;

  font-family: Roboto;
  font-weight: 700;
  text-align: center;
`

export const ButtonLink = styled(Link)`
  color: ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`

// Botão saiba mais no CustomProduct
// background-color: ${cores.rosaEscuro};
// color: ${cores.vermelho};
// font-size: 14px;
// padding: 4px 4px;
// display: inline-block;
// margin-top: 8px;
// cursor: pointer;
// text-decoration: none;

// font-family: Roboto;
// font-weight: 700;
// text-align: center;
