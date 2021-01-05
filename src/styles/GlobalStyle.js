import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme.color2};
        font-family: ${(props) => props.theme.font1};
    }

    button{
        font-weight: 900;
        text-transform: uppercase;
        font-size: 0.9rem;
        cursor: pointer;
        padding: 1rem 2.5rem;
        border: 2px solid ${(props) => props.theme.color3};
        letter-spacing: 1.5px;
        border-radius: 2px;
        color: ${(props) => props.theme.color1};
        background-color: ${(props) => props.theme.color2};
        transition: all 5 ease;
        font-family: ${(props) => props.theme.font1};
        outline: none;
        &:hover{
            background-color: ${(props) => props.theme.color3};
            color: ${(props) => props.theme.color2};
            transition: all 5 ease;
        }
    }

    h2{
        font-weight: 200;
        font-size: calc(2vw + 1rem);
        color: ${(props) => props.theme.color1};
    }
    h3{
        color: ${(props) => props.theme.color3};
    }
    h4{
        color: ${(props) => props.theme.color3};
        font-weight: 900;
        font-size: 2rem;
    }
    span{
        font-weight: 900;
        color: ${(props) => props.theme.color3};
    }
    p{
        padding: 3rem 0rem;
        color: ${(props) => props.theme.color1};
        font-size: calc(0.5vw + 0.5rem);
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
