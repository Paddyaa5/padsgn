import React from "react";
import styled from "styled-components";

const Styled = styled.div`
    padding: 2rem;
    width: 25rem;
    height: 18rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: ${(props) => props.theme.color3};
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        font-size: 0.9rem;
        font-weight: 200;
        margin: 0;
        padding: 1rem 0;
    }
`;

const ProjectDetailText = ({ title, description }) => {
    return (
        <Styled>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </Styled>
    );
};

export default ProjectDetailText;
