import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'foods'>>`
  margin: 80px 171px 120px 171px;
  background-color: ${(props) =>
    props.background === 'claro' ? cores.verde : cores.branca};
  color: ${(props) =>
    props.background === 'claro' ? cores.rosa : cores.vermelho};

  ${Card} {
    background-color: #fff;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
