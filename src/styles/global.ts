import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito';
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['blue-normal']};
    }

    body{
        background-color: ${(props) => props.theme['base-background']};
    }
`
