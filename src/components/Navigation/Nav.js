import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 10vh;
    z-index: 10;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.navcolor};
    font-family: ${(props) => props.theme.font2};
    text-transform: uppercase;
    ul {
        display: flex;
        list-style: none;
        width: 50%;
        justify-content: space-between;
        padding-right: 10vw;
        li {
            position: relative;
            a {
                color: ${(props) => props.theme.color1};
                &:hover {
                    color: ${(props) => props.theme.color3};
                }
            }
            a.active {
                border-bottom: 3px solid ${(props) => props.theme.color3};
            }
        }
    }
    #logo {
        font-family: ${(props) => props.theme.font2};
        padding-left: 10vw;
        a {
            font-size: 2rem;
            color: ${(props) => props.theme.color1};
        }
        a.active {
            color: ${(props) => props.theme.color3};
        }
    }
`;

const Nav = () => {
    return (
        <StyledNav>
            <h1 id="logo">
                <NavLink exact to="/" activeClassName="active">
                    PA
                </NavLink>
            </h1>
            <ul>
                <li>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" activeClassName="active">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </StyledNav>
    );
};

export default Nav;
