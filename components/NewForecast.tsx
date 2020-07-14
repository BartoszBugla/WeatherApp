import React from "react";
import styled from "styled-components";
import ConvertSkies from "../customF/ConvertSkies";
import getItems from "../customF/ConvertDate";
import SVG from "../static/svg/svg";
const blockSize = 130;
const margin = 2;
const Container = styled.div`
    width: 100%;
    color: white;

    padding: 0;
    @media (max-width: ${8 * blockSize + margin * 16 + 1 * 16}px) {
    }
`;
const Scroll = styled.section`
    margin: 0 auto;
    max-height: 200px;
    overflow-x: scroll;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    width: 100vw;
    overflow: hidden;
    @media (max-width: ${8 * (blockSize + 70)}px) {
        width: 100vw;
        overflow-x: scroll;
    }
`;
export const Block = styled.div`
    float: left;
    text-align: center;
    /* width: ${blockSize + 70}px; */
    height: ${blockSize}px;
    display: flex;
    *{margin:4px;}
    ${(props) => {
        if (props.colors) {
            if (props.colors[2])
                return `background: linear-gradient(180deg, ${props.colors[0]} 0%, ${props.colors[1]} 50.52%, ${props.colors[2]} 100%);`;
            else return `background: linear-gradient(180deg, ${props.colors[0]} 0%,  ${props.colors[1]} 100%);`;
        }
    }}
    justify-content: center;
    flex-direction: column;

    /* margin: ${margin}px; */
    /* border-radius: 5px; */
    @media (max-width: 800px) {
        width: 100px;
        height: 100px;
        font-size: 0.7rem;
        *{margin:1px;}
    }
`;
const SvgContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    * {
        margin: 2px 5px;
    }
    svg {
        height: 40px;
        width: 40px;
        fill: white;
    }
`;
const Day = styled.p`
    font-size: 1.3rem;
    @media (max-width: 800px) {
        font-size: 1.1rem;
    }
`;
const Temp = styled.p`
    font-size: 1.6rem;
    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
`;
const NewForecast = ({ forecast }) => {
    const items = forecast.map((item, index) => {
        const sky = item.weather[0].description;
        const temperature = Math.round(item.temp.day - 273.15);
        const { colors, name, icon } = ConvertSkies(sky, temperature);
        const { weekday } = getItems(item.dt);

        return (
            <Block key={index} colors={colors}>
                <Day>{weekday}</Day>
                <SvgContainer>
                    <SVG type={icon} />
                    <Temp>{temperature}°</Temp>
                </SvgContainer>

                <p> {sky}</p>
            </Block>
        );
    });
    return (
        <Container>
            <Scroll>{items}</Scroll>
        </Container>
    );
};

export default NewForecast;
