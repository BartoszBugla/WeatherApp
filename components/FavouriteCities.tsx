import React from "react";
import styled from "styled-components";
import Block from "./Block";
const blockSize = 180;
const margin = 10;
const Container = styled.div`
    width: 100%;
    color: white;
    overflow: hidden;
    margin-top: 30px;
    width: ${(props) => {
        props.size * blockSize + margin * 16 + 1 * 16;
    }}px;
    @media (max-width: ${(props) => {
            props.size * blockSize + margin * 16 + 1 * 16;
        }} px) {
        width: 100vw;
        overflow-x: scroll;
    }
`;
const Scroll = styled.section`
    margin: 0 5vw;
    max-height: 200px;
    /* overflow-x: scroll; */
    overflow-y: hidden;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 10px 0px;
`;

const Header = styled.p`
    font-size: 1.3rem;
    color: black;
    margin: 0 5vw;
    font-weight: 700;
`;
const FavouriteCities = ({ data, text }) => {
    const items = data.map((i, index) => {
        return <Block key={index} city={i} />;
    });

    return (
        <Container>
            <Header>{text}</Header>
            <Scroll size={data.length}> {items}</Scroll>
        </Container>
    );
};

export default FavouriteCities;
