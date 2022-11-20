import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  gap: 1.25rem;

  background-color: ${(props) => props.theme['base-profile']};

  border-radius: 10px;

  margin-top: -5.5rem;
`

export const PostHeaderContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.18rem;

    color: ${(props) => props.theme['blue-normal']};

    text-decoration: none;
  }
`

export const PostHeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.93rem;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      color: ${(props) => props.theme['base-span']};

      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
