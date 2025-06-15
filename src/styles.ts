import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  rosa: '#FFF8F2',
  branca: '#FFFFFF',
  verde: '#10AC84',
  rosaEscuro: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    }

    body{
      background-color: ${cores.rosa};
      color: ${cores.vermelho};
    }

    .container{
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width:${breakpoints.desktop}) {
        max-width: 80%;
      }
    }

`
export const Container = styled.div``
