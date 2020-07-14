import styled from "styled-components";
import React, { useState } from "react";
import SVG from "../static/svg/svg";

const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    color: ${(props) => (props.active ? "#bc5a5a" : "#00000000")};
    list-style: none;
    font-size: 1.2rem;
    transition: 1s ease;
    height: ${(props) => (props.active ? "30" : "0")}px;
    opacity: ${(props) => (props.active ? "1 " : "0")}px;
    @media (max-width: 470px) {
        height: ${(props) => (props.active ? "50" : "0")}px;
    }

    a:focus,
    a:hover {
        outline: none;
        text-shadow: 0px 0px 10px #bc5a5a;
    }
    * {
        padding: 2px 10px;
    }
    li {
        display: ${(props) => (props.active ? "block" : "none")};
    }
    li:first-child {
        background-color: #bc5a5a;
        color: white;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
    }
`;
const Container = styled.div`
    @media (max-width: 800px) {
        display: block;
    }
    display: none;
    svg {
        width: 40px;
        transition: 1s ease;
        height: 30px;
        fill: #bc5a5a;
        position: absolute;
        top: ${(props) => (props.active ? "156" : "126")}px;
        right: 3%;

        @media (max-width: 470px) {
            top: ${(props) => (props.active ? "180" : "126")}px;
        }
        &:hover {
            * {
                box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.35);
            }
        }
    }
`;
const Burger = () => {
    const [active, setActive] = useState(false);

    return (
        <Container active={active}>
            {/* <Burg active={active} onClick={() => setActive(!active)}>
                <Line active={active} />
                <Line active={active} />
                <Line active={active} />
            </Burg> */}
            <SVG type="menu" onClick={() => setActive(!active)} />
            <Menu active={active}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/language">Language</a>
                </li>
                <li>
                    <a href="/options">Options</a>
                </li>
            </Menu>
        </Container>
    );
};

export default Burger;
