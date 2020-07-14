import React from "react";

import SVG from "../static/svg/svg";
import styled from "styled-components";
const blockSize = 150;
const margin = 2;
export const Container = styled.div`
    color: white;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`;
export const Block = styled.div`
    float: left;
    text-align: center;
    width: ${blockSize + 40}px;
    height: ${blockSize}px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    /* margin: ${margin}px; */
    border-radius: 5px;
    @media (max-width: 800px) {
        width: 140px;
        height: 100px;
        font-size: 0.7rem;
    }
`;
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
    @media (max-width: 600px) {
        font-size: 1.1rem;

        svg {
            height: 30px;
            width: 30px;
            fill: white;
        }
    }
`;
const Useless = ({ wind, sunset, sunrise, tz }) => {
    const { hour: sunriseHour, min: sunriseMinute } = getItems(sunrise, tz);
    const { hour: sunsetHour, min: sunsetMinute } = getItems(sunset, tz);

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
                    Local: {sunriseTime}
                </SvgContainer>
            </Block>
            <Block>
                <SvgContainer>
                    Sunset
                    <SVG type="sunset" />
                    Local: {sunsetTime}
                </SvgContainer>
            </Block>
        </Container>
    );
};
const HourConverter = (item: number) => {
    if (item < 10) return `0${item}`;
    else return item;
};
const getItems = (date: number, timezone: number) => {
    const d = new Date(date * 1000);

    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const string = new Date(utc + 1000 * timezone);
    let hour = string.getHours();
    let min = string.getMinutes();

    return { hour, min };
};

export default Useless;
