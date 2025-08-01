import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaEscuro};
  padding: 32px 0px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
`
export const SectionLogo = styled.div`
  color: ${cores.vermelho};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Links = styled.ul`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  list-style: none;
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  .imgLink {
    width: 24px;
    height: 24px;
    top: 1980px;
    left: 639px;
  }
`
export const FooterSection = styled.div`
  color: ${cores.vermelho};
  margin-bottom: 40px;
`

export const Paragrafo = styled.p`
  display: block;
  margin-top: 80px;
  padding-bottom: 8px;
  font-size: 10px;
  text-align: center;
  color: ${cores.vermelho};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`
