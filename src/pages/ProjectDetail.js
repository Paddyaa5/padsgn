import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
//import project state
import { ProjectState } from "../data/projectState";
//import components
import ProjectDetailText from "../components/Projects/ProjectDetailText";
//import animations
import { pageAnim } from "../animations/animations";

const Styled = styled(motion.div)`
    min-height: 100vh;
    position: relative;
    padding-top: 10vh;
    .headline {
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            position: absolute;
            font-family: ${(props) => props.theme.font2};
        }
        img {
            width: 100%;
            height: 90vh;
            object-fit: cover;
            border: 2px solid ${(props) => props.theme.color1};
        }
    }
    .description {
        min-height: 80vh;
        display: flex;
        margin: 5rem 10rem;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(ProjectState);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const currentProject = projects.filter(
            (stateProjects) => stateProjects.url === url
        );
        setProject(currentProject[0]);
    }, [projects, url]);

    return (
        <>
            {project && (
                <Styled
                    variants={pageAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <div className="headline">
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt={project.title} />
                    </div>
                    <div className="description">
                        {project.features.map((feature) => (
                            <ProjectDetailText
                                title={feature.title}
                                description={feature.description}
                                key={feature.title}
                            />
                        ))}
                    </div>
                </Styled>
            )}
        </>
    );
};
export default ProjectDetail;
