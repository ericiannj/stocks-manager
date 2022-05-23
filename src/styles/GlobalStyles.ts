import { createGlobalStyle } from 'styled-components'
import colors from './colors'

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

    .tooltip-primary {
        --balloon-color: ${colors.primary};
        position: absolute;
    }

    [aria-label][data-balloon-pos] {
    position: relative;
    cursor: pointer;
}
`

export default GlobalStyles
