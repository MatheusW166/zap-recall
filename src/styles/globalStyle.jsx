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

    @keyframes entrance {
        from {
            opacity: 0;
            transform: translateX(-150px);
            visibility: hidden;
        }
        to {
            opacity: 1;
            transform: translateX(0);
            visibility: visible;
        }
    }

    @keyframes exit {
        from {
            opacity: 1;
            transform: translateX(0);
            visibility: visible;
        }
        to {
            opacity: 0;
            transform: translateX(150px);
            visibility: hidden;
        }
    }
`;

export default GlobalStyle;
