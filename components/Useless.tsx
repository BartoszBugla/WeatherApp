import React from "react";
import { Block, Container } from "./Forecast";
import getItems from "../customF/ConvertDate";
import SVG from "../static/svg/svg";
import styled from "styled-components";
export const SvgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    * {
        margin: 2px 5px;
    }
    svg {
        height: 75px;
        width: 75px;
        fill: white;
    }
`;
const Useless = ({ wind, sunset, sunrise }) => {
    const { hour: sunriseHour, min: sunriseMinute } = getItems(sunrise);
    const { hour: sunsetHour, min: sunsetMinute } = getItems(sunset);

    const sunriseTime = `${HourConverter(sunriseHour)}:${HourConverter(sunriseMinute)}`;
    const sunsetTime = `${HourConverter(sunsetHour)}:${HourConverter(sunsetMinute)}`;
    return (
        <Container>
            <Block>
                <SvgContainer>
                    Wind strenght
                    <SVG type="windIcon" />
                    {Math.round(wind * 3.6)} km/h
                </SvgContainer>
            </Block>
            <Block>
                <SvgContainer>
                    Sunrise
                    <SVG type="sunrise" />
                    {sunriseTime} am
                </SvgContainer>
            </Block>
            <Block>
                <SvgContainer>
                    Sunset
                    <SVG type="sunset" />
                    {sunsetTime} am
                </SvgContainer>
            </Block>
        </Container>
    );
};
const HourConverter = (item) => {
    if (item < 10) return `0${item}`;
    else return item;
};

export default Useless;
