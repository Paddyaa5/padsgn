import React from "react";
import styled from "styled-components";
//import images
import DoMore from "../../images/DoMore.jpg";
//import styles
import { Layout, StyledImage } from "../../styles/Styles";

const Styled = styled(Layout)`
    .description {
        padding-left: 5rem;
        display: flex;
        flex-direction: column;
        h2 {
            text-align: center;
            padding-bottom: 5rem;
        }
        .cards {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .card {
                flex-basis: 19rem;
                .icon {
                    display: flex;
                    i {
                        color: white;
                        font-size: 2rem;
                    }
                    h3 {
                        padding-left: 1rem;
                    }
                }
                p {
                    width: 100%;
                    padding: 2rem 0 4rem 0;
                }
            }
        }
        button {
            align-self: center;
        }
    }
`;

const Services = [
    {
        icon: <i className="fas fa-gem"></i>,
        title: "Something Special",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        icon: <i className="fas fa-piggy-bank"></i>,
        title: "Cheaper Than Agencies",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        icon: <i className="fas fa-eye"></i>,
        title: "Eye Catching Design",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        icon: <i className="fas fa-chart-line"></i>,
        title: "Help you business grow",
        text: "Lorem ipsum dolor sit amet.",
    },
];

const ServicesSection = () => {
    return (
        <Styled>
            <StyledImage>
                <img src={DoMore} alt="do-more" className="image" />
            </StyledImage>
            <div className="description">
                <h2>
                    High <span>Quality</span> Services
                </h2>
                <div className="cards">
                    {Services.map((Service) => (
                        <div className="card">
                            <div className="icon">
                                {Service.icon}
                                <h3>{Service.title}</h3>
                            </div>
                            <p>{Service.text}</p>
                        </div>
                    ))}
                </div>
                <button>See Projects</button>
            </div>
        </Styled>
    );
};

export default ServicesSection;
