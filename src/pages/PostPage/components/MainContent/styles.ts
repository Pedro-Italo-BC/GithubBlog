import styled from 'styled-components'

export const MainContentContainer = styled.main`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p,
  ul,
  li {
    color: ${(props) => props.theme['base-text']};
  }
  a {
    color: ${(props) => props.theme['blue-normal']};
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme['base-title']};
  }

  img {
    max-width: 100%;
  }

  pre {
    background-color: ${(props) => props.theme['base-post']};
    padding: 1rem;

    div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`
