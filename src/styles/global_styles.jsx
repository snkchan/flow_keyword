import { createGlobalStyle } from "styled-components"
import { color, fontSize, fontWeight } from "./themes"
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;
        font-weight: ${fontWeight.regular};
        background-color: ${color.black[100]};
    }

    ul, li {
        list-style: none;
    }

    h1 {
    font-size: ${fontSize.huge};
        font-weight: ${fontWeight.bold};
    }


    h2 {
        font-size: ${fontSize.big};
        font-weight: ${fontWeight.extraLight};
    }

    h3 {
        font-size: ${fontSize.large};
        font-weight: ${fontWeight.medium};
    }

    h4 {
        font-size: ${fontSize.medium};
        font-weight: ${fontWeight.semiBold};
    }

    button {
        border: none;
    }

    input {
        outline: none;
    }

    textarea {
        font-size:${fontSize.small};
    }

    p, div, span {
        font-size:${fontSize.small};
    }
`

export default GlobalStyles
