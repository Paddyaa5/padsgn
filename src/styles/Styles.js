import styled from "styled-components";

export const StyledImage = styled.div`
    img {
        width: 20rem;
        min-width: 15rem;
        max-width: 80vw;
        height: 80vh;
        max-height: 50rem;
        object-fit: cover;
        border: 1px solid white;
    }
`;
export const Layout = styled.div`
    height: auto;
    min-height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15vh 5vw;
    @media screen and (min-width: 1200px) {
        padding: 15vh 10vw;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;
