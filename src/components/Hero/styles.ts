import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 280px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  /* padding-top: 16px; */

  &::after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    z-index: 1;
    /* padding: 20px 0; */
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Titulo = styled.h2`
  max-width: 539px;
  margin-top: 25px;
  /* margin: 0 auto; */
  color: ${cores.branca};
  font-family: Roboto;
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;
`
export const Titulo2 = styled.h2`
  max-width: 539px;
  color: ${cores.branca};
  margin-bottom: 32px;
  /* margin: 0 auto; */
  font-family: Roboto;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;
`
