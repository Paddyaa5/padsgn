import React from "react";
import styled from "styled-components";
//import images
import AboutImage from "../images/AimHigh.jpg";
//import styles
import { Layout, StyledImage, Hide } from "../styles/Styles";

const Styled = styled(Layout)`
    .description {
        padding-right: 5rem;
    }
`;

const AboutSection = () => {
    return (
        <Styled>
            <div className="description">
                <div className="title">
                    <Hide>
                        <h2>We Work To Make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            Your <span>Dreams</span>
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>Come True</h2>
                    </Hide>
                </div>
                <p>Contact us for any web design ideas you have.</p>
                <button>Contact Us</button>
            </div>
            <StyledImage>
                <img src={AboutImage} alt="aim-high" className="image" />
            </StyledImage>
        </Styled>
    );
};

export default AboutSection;
