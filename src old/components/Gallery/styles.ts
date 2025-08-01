import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  img {
    border-radius: 10px;
    object-fit: cover;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  padding: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  max-width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  color: ${cores.rosa};
  background-color: ${cores.vermelho};

  .container-p {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: flex-start; */
    flex: 1;

    h4 {
      font-size: 8px;
      font-weight: bold;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
    }
    .button {
      max-width: 218px;
      margin: 0;
      margin-top: 16px;
      justify-content: space-between;
    }
  }

  .close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  > img {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`
