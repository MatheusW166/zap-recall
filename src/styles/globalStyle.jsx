import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        user-select: none;
    }
    body {
        font-family: "Recursive", sans-serif;
    }
    h1 {
        height: fit-content;
        font-family: "Righteous", sans-serif;
        color: ${({ theme }) => theme.overBackground};
        font-size: ${({ theme }) => theme.xl};
    }
`;

export default GlobalStyle;
