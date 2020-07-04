import React from "react";
import styled from "styled-components";

import ConvertSkies from "../customF/ConvertSkies";
import Svg from "../static/svg/svg";

const Section = styled.section`
    margin: 0 auto;

    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    ${(props) => {
        if (props.colors[2])
            return `background: linear-gradient(180deg, ${props.colors[0]} 0%, ${props.colors[1]} 50.52%, ${props.colors[2]} 100%);`;
        else return `background: linear-gradient(180deg, ${props.colors[0]} 0%,  ${props.colors[1]} 100%);`;
    }}
    color: white;
    flex-grow: 1;
`;
const Temp = styled.p`
    font-size: 4.5rem;
    padding: 20px;
`;
const City = styled.p`
    font-size: 4.5rem;
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
const Result = ({ city, temperature, sky, date, children }) => {
    const { colors, name, icon } = ConvertSkies(sky, temperature);

    return (
        <Section colors={colors}>
            <City>{city}</City>
            <Date>{date}</Date>
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
