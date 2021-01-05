import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #202030;
        font-family: 'Raleway', sans-serif;
    }

    button{
        font-weight: 900;
        text-transform: uppercase;
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2.5rem;
        border: 2px solid #1EA896;
        letter-spacing: 1.5px;
        border-radius: 2px;
        color: #F1F9F2;
        background-color: #202030;
        transition: all 5 ease;
        font-family: 'Raleway', sans-serif;
        &:hover{
            background-color: #1EA896;
            color: #202030;
            transition: all 5 ease;
        }
    }

    h2{
        font-weight: 200;
        font-size: 4rem;
        color: #E0F2E9;
    }
    h3{
        color: #1EA896;
    }
    h4{
        color: #1EA896;
        font-weight: 900;
        font-size: 2rem;
    }
    span{
        font-weight: 900;
        color: #1EA896;
    }
    p{
        padding: 3rem 0rem;
        color: #E0F2E9;
        font-size: 1rem;
    }
`;

export default GlobalStyle;
