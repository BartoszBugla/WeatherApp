import React from "react";
import styled from "styled-components";
import { ConvertDate } from "../customF/ConvertDate";
import ConvertSkies from "../customF/ConvertSkies";
import Svg from "../static/svg/svg";
import ActionMenu from "./ActionMenu";

const Section = styled.section`
    margin: 0 auto;
    box-shadow: inset 0px -4px 30px rgba(0, 0, 0, 0.35);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${(props) => {
        if (props.colors[2])
            return `background: linear-gradient(180deg, ${props.colors[0]} 0%, ${props.colors[1]} 50.52%, ${props.colors[2]} 100%);`;
        else return `background: linear-gradient(180deg, ${props.colors[0]} 0%,  ${props.colors[1]} 100%);`;
    }}
    color: white;
    flex-grow: 1;
`;
const Temp = styled.p`
    font-size: calc(3rem + 2vw);
    padding: 20px;
`;
const City = styled.p`
    font-size: calc(3rem + 2vw);
`;
const Date = styled.p`
    font-size: 1.5rem;
    color: #e6e2e2;
`;

const SvgContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    * {
        flex: 1 1 auto;
        margin: 0 10px;
    }
    svg {
        height: 100px;
        width: 100px;
        fill: white;
    }
`;
const Result = ({ timezone, city, temperature, sky, dt, children }) => {
    const { colors, name, icon } = ConvertSkies(sky, temperature, dt);
    const date = ConvertDate(dt, timezone);

    return (
        <Section colors={colors}>
            <ActionMenu city={city} />
            <City>{city}</City>
            <Date> Local time: {date}</Date>
            <SvgContainer>
                <Svg type={icon} />
                <Temp>{temperature}°</Temp>
            </SvgContainer>
            {/* <Skies>{sky}</Skies> */}
            {children}
        </Section>
    );
};

export default Result;
