import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import images
import AboutImage from "../../images/AimHigh.jpg";
//import styles
import { Layout, StyledImage, Hide } from "../../styles/Styles";
//import animations
import {
    titleRevealAnim,
    fadeAnim,
    imageAnim,
} from "../../animations/animations";

const Styled = styled(Layout)`
    .description {
        padding-right: 5rem;
    }
`;

const AboutSection = () => {
    return (
        <Styled>
            <div className="description">
                <div>
                    <Hide>
                        <motion.h2 variants={titleRevealAnim}>
                            We Work To Make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleRevealAnim}>
                            Your <span>Dreams</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleRevealAnim}>
                            Come True
                        </motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fadeAnim}>
                    Contact us for any web design ideas you have.
                </motion.p>
                <motion.button variants={fadeAnim}>Contact Us</motion.button>
            </div>
            <StyledImage>
                <motion.img
                    variants={imageAnim}
                    src={AboutImage}
                    alt="aim-high"
                    className="image"
                />
            </StyledImage>
        </Styled>
    );
};

export default AboutSection;
