import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.rosaEscuro};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 8px;

  font-family: Roboto;
  font-weight: 700;
  text-align: center;
`
