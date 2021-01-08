import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//import animations
import { pageAnim, imageAnim } from "../animations/animations";
//import images
import LT from "../images/lt.jpg";
import KM from "../images/km.jpg";

const Styled = styled(motion.div)`
    margin-top: 10vh;
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    .movie {
        padding-bottom: 10rem;
        a {
            text-decoration: none;
        }
        h2 {
            font-weight: 900;
            font-family: ${(props) => props.theme.font2};
            &:hover {
                color: ${(props) => props.theme.color3};
            }
        }
        .line {
            height: 0.5rem;
            background: ${(props) => props.theme.color1};
            margin-bottom: 3rem;
        }
        img {
            width: 100%;
            height: 80vh;
            object-fit: cover;
        }
    }
`;

export default function Projects() {
    return (
        <Styled variants={pageAnim} initial="hidden" animate="show" exit="exit">
            <div className="movie">
                <Link to="/projects/the-kilometre-club">
                    <h2>The Kilometre Club</h2>
                </Link>
                <div className="line"></div>
                <Link to="/projects/the-kilometre-club">
                    <motion.img variants={imageAnim} src={KM} alt="" />
                </Link>
            </div>
            <div className="movie">
                <Link to="/projects/little-tap">
                    <h2>Little Tap</h2>
                </Link>
                <div className="line"></div>
                <Link to="/projects/little-tap">
                    <motion.img variants={imageAnim} src={LT} alt="" />
                </Link>
            </div>
        </Styled>
    );
}
