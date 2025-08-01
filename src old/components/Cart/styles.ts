import styled from 'styled-components'
import { cores } from '../../styles'
import Button from '../Button'

import imgfechar from '../../assets/images/lixo.png'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  color: ${cores.branca};
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`
export const Prices = styled.p`
  font-size: 14px;
  color: ${cores.branca};
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 12px;
    color: ${cores.branca};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.rosaEscuro};
  color: ${cores.vermelho};
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
  }

  button {
    background-image: url(${imgfechar});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    padding: 0;
    display: block;
  }
`
export const Row = styled.div`
  display: flex;
  column-gap: 32px;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${cores.rosaEscuro};
    height: 32px;
    padding: 0 8px;
    border: none;
    width: 100%;
    margin-bottom: 8px;

    &.error {
      border: 4px solid #800202ff;
    }
  }
`
export const BotaoCarrinho = styled(Button)`
  margin-bottom: 8px;
`
