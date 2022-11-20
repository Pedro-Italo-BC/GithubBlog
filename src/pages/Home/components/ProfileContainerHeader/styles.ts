import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  padding: 2rem 2.5rem;
  gap: 2rem;

  background-color: ${(props) => props.theme['base-profile']};

  border-radius: 10px;

  margin-top: -5.5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const ProfileContentHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 120%;
    font-weight: 700;
  }

  a {
    color: ${(props) => props.theme['blue-normal']};
    text-transform: uppercase;

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%;
    height: fit-content;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-normal']};
    }
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 6.375rem;

  p {
    color: ${(props) => props.theme['base-text']};

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    max-height: 3.5rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li {
      color: ${(props) => props.theme['base-subtitle']};

      display: flex;
      gap: 0.625rem;

      align-items: center;

      svg {
        color: ${(props) => props.theme['base-label']};

        font-weight: 400;
        font-size: 16px;
        line-height: 1.6rem;
      }
    }
  }
`
