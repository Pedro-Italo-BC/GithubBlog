import styled from 'styled-components'

export const IssueItemContainer = styled.li`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  width: 26rem;
  height: 16.25rem;
  a {
    text-decoration: none;

    div {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      header {
        display: flex;
        justify-content: space-between;

        h3 {
          color: ${(props) => props.theme['base-title']};
          width: 17.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          line-height: 2rem;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        span {
          color: ${(props) => props.theme['base-span']};
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.37rem;
        }
      }

      p {
        color: ${(props) => props.theme['base-text']};
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.7rem;

        height: 7rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
      }
    }
  }

  &:hover {
    border: ${(props) => props.theme['base-label']} 1px solid;

    cursor: pointer;

    a {
      div {
        padding: calc(2rem - 1px);
      }
    }
  }
`
