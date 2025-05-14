import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card, SaibaMais } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'foods'>>`
  margin: 80px 171px 120px 171px;

  ${Card} {
    background-color: ${cores.vermelho};
    color: ${cores.rosaEscuro};
    padding: 8px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
