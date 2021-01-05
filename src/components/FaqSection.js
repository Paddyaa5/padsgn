import React from "react";
import styled from "styled-components";
import { Layout } from "../styles/Styles";

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

const FaqSection = () => {
    return (
        <Layout>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            {Questions.map((Question) => (
                <div className="question">
                    <h4>{Question.title}</h4>
                    <div className="answer">
                        <p>{Question.text1}</p>
                        <p>{Question.text2}</p>
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default FaqSection;
