import React from "react";
import styled from "styled-components";
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    /* width: 600px; */
    flex-wrap: wrap;
    justify-content: center;
    color: #bc5a5a;
    list-style: none;
    font-size: 1.4rem;

    * {
        padding: 2px 10px;
    }
    li {
        &:hover {
            background-color: #bc5a5a;
            color: white;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        }
    }
`;
const Menu = () => {
    return (
        <Nav>
            <li>
                <b>Home</b>
            </li>
            <li>Contact</li>
            <li>Language</li>
            <li>Options</li>
        </Nav>
    );
};

export default Menu;
