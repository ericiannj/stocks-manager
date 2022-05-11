import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,
    input,
    button,
    textarea {
        font: 16px Graphik;
    }
`

export default GlobalStyles
