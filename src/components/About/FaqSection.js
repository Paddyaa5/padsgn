import React from "react";
import styled from "styled-components";
import { Layout } from "../../styles/Styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const Questions = [
    {
        title: "How Do I Start?",
        text1: "Lorem ipsum dolor sit amet.",
        text2:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, perferendis.",
    },
    {
        title: "How long does it take?",
        text1: "Lorem ipsum dolor sit amet.",
        text2:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, perferendis.",
    },
    {
        title: "How much does it cost?",
        text1: "Lorem ipsum dolor sit amet.",
        text2:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, perferendis.",
    },
];

const Styled = styled(Layout)`
    display: block;
    h2 {
        padding-bottom: 2rem;
        font-weight: 200;
        span {
            display: block;
        }
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question {
        cursor: pointer;
        .answer {
            padding: 2rem 0;
            p {
                padding: 1rem 0;
            }
        }
    }
`;

const FaqSection = () => {
    return (
        <Styled>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                {Questions.map((Question) => (
                    <Toggle title={Question.title}>
                        <div className="answer">
                            <p>{Question.text1}</p>
                            <p>{Question.text2}</p>
                        </div>
                    </Toggle>
                ))}
            </AnimateSharedLayout>
        </Styled>
    );
};

export default FaqSection;
