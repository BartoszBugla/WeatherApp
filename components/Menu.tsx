import React from "react";
import styled from "styled-components";
import Link from "next/link";
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    color: #bc5a5a;
    list-style: none;
    font-size: 1.2rem;
    a:focus,
    a:hover {
        outline: none;
        text-shadow: 0px 0px 10px #bc5a5a;
    }
    * {
        padding: 2px 10px;
    }
    li:first-child {
        background-color: #bc5a5a;
        color: white;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
    }
    @media (max-width: 800px) {
        display: none;
    }
`;
const Menu = () => {
    return (
        <Nav>
            <li>
                <a href="/">
                    <b>Home</b>
                </a>
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
        </Nav>
    );
};

export default Menu;
