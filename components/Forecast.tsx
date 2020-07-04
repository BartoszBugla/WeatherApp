import React from "react";
import styled from "styled-components";

import ConvertSkies from "../customF/ConvertSkies";

import SVG from "../static/svg/svg";
import getItems from "../customF/ConvertDate";
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    /* max-width: 100vw; */
    /* overflow-x: hidden; */
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
export const Block = styled.div`
    width: 160px;
    height: 160px;
    ${(props) => (props.border ? "border:solid 1px white;" : "")}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3px;
    border-radius: 10px;
    ${(props) => {
        if (props.colors) {
            if (props.colors[2])
                return `background: linear-gradient(180deg, ${props.colors[0]} 0%, ${props.colors[1]} 50.52%, ${props.colors[2]} 100%);`;
            else return `background: linear-gradient(180deg, ${props.colors[0]} 0%,  ${props.colors[1]} 100%);`;
        }
    }}
`;
const Temp = styled.p`
    font-size: 2.5rem;
`;
export const SvgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    * {
        margin: 2px 5px;
    }
    svg {
        height: 40px;
        width: 40px;
        fill: white;
    }
`;

const Forecast = ({ forecast = [] }) => {
    const items = forecast.map((item, index) => {
        const sky = item.weather[0].description;
        const temperature = Math.round(item.temp.day - 273.15);
        const { colors, name, icon } = ConvertSkies(sky, temperature);
        const { weekday } = getItems(item.dt);

        return (
            <Block border key={index} colors={colors}>
                <p>{weekday}</p>
                <Temp>{temperature}°</Temp>
                <SvgContainer>
                    <SVG type={icon} />
                    <p>{sky}</p>
                </SvgContainer>
            </Block>
        );
    });
    return <Container>{items}</Container>;
};

export default Forecast;
