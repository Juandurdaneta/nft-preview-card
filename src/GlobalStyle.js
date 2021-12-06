import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --darkBlue: #0D192B;
        --ligthBlue: #13253C;
        --white: #FFFEFF;
        --cyan: #01FFF7;
        --gray: #82A0CD;
    }

    *{
        font-family: 'Outfit', sans-serif;
    }

    body{
        background-color: var(--darkBlue);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

`;