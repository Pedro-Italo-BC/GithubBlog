import styled from 'styled-components'

export const SearchContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.37rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    height: 3.125rem;
    padding: 1rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};

    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.56rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};

      font-weight: 400;
      font-size: 1rem;
      line-height: 1.56rem;
    }

    &:active {
    }
  }
`
