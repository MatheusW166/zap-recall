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
        font-family: "Righteous";
    }
`;

export default GlobalStyle;
