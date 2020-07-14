import React, { useEffect, useState } from "react";
import ConvertSkies from "../customF/ConvertSkies";
import styled from "styled-components";
import Link from "next/link";
import axios from "axios";
import SVG from "../static/svg/svg";
const blockSize = 180;
const blockSizeS = 110;
const margin = 10;
const Cont = styled.a`
    float: left;
    text-align: center;
    width: ${blockSize + 40}px;
    height: ${blockSize}px;
    display: flex;
    color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    * {
        margin: 4px;
    }

    ${(props) => {
        if (props.colors) {
            if (props.colors[2])
                return `background: linear-gradient(180deg, ${props.colors[0]} 0%, ${props.colors[1]} 50.52%, ${props.colors[2]} 100%);`;
            else return `background: linear-gradient(180deg, ${props.colors[0]} 0%,  ${props.colors[1]} 100%);`;
        }
    }}
    justify-content: center;
    flex-direction: column;
    margin: ${margin}px;
    border-radius: 8px;
    &:focus {
        transform: scale(1.1);
        border-radius: 15px;
        outline: none;
        transition: all 0.4s ease;
    }
    @media (max-width: 800px) {
        width: ${blockSizeS + 15}px;
        height: ${blockSizeS}px;
        font-size: 0.7rem;
        * {
            margin: 1px;
        }
    }
    &:hover {
        -webkit-filter: brightness(120%);
        transition: all 1s ease;
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
const CityName = styled.p`
    font-size: 1.6rem;
    @media (max-width: 800px) {
        font-size: 1rem;
    }
`;
const Temp = styled.p`
    font-size: 2rem;
`;
const apikey1 = process.env.API_KEY_1;
const apikey2 = process.env.API_KEY_2;
const initialState = {
    city: "",
    main: { temp: 0 },
    weather: [{ description: "" }],
};

const Block = ({ city }) => {
    const [data, setData] = useState(initialState);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCoords = async () => {
            const url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${apikey1}&searchtext=${city}`;
            const fetchedCoords = await axios(url);
            const loc = fetchedCoords.data.Response.View[0].Result[0].Location;
            return loc.DisplayPosition;
        };
        const fetchData = async (item) => {
            const url2 = `http://api.openweathermap.org/data/2.5/weather?lat=${item.Latitude}&lon=${item.Longitude}&appid=${apikey2}`;
            const fetchedData = await axios(url2);
            return fetchedData.data;
        };
        const fetch = async () => {
            const item = await fetchCoords();
            const weather = await fetchData(item);
            setData(weather);
            setLoading(false);
        };
        fetch();
    }, []);
    const temperature = Math.round(data.main.temp - 273.15);
    const { colors, name, icon } = ConvertSkies(data.weather[0].description, temperature);
    const url = `/result?cityName=${city}`;
    if (isLoading) return <div>Loading...</div>;
    return (
        <Link href={url}>
            <Cont href="#" colors={colors}>
                <CityName style={{ textTransform: "capitalize" }}>{city}</CityName>
                <SvgContainer>
                    <SVG type={icon} />
                    <Temp>{temperature}°</Temp>
                </SvgContainer>
                <p style={{ color: "lightgrey", textTransform: "capitalize" }}> {data.weather[0].description}</p>
            </Cont>
        </Link>
    );
};

export default Block;
