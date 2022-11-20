import styled from 'styled-components'

import Cover from '../../assets/headerImgs/Cover.svg'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  width: 100%;

  background: url(${Cover}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-top: -5.5rem;
    width: 9.25rem;
    height: 6.125rem;
  }
`
