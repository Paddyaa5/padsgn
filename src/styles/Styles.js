import styled from "styled-components";

export const StyledImage = styled.div`
    img {
        width: 20rem;
        height: 80vh;
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
    padding: 15vh 10vw;
`;

export const Hide = styled.div`
    overflow: hidden;
`;
