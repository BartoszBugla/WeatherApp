import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";

import Search from "../components/Search";
import Result from "../components/WeatherBox";

import { ConvertDate } from "../customF/ConvertDate";
import Forecast from "../components/Forecast";
import Useless from "../components/Useless";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100vw;
`;
const result = ({ data, city, error, forecast, timezone }) => {
    if (error) return <div>You passed Wrong localization</div>;
    const temperature = Math.round(data.temp - 273.15);
    const sky = data.weather[0].description;
    const date = ConvertDate(data.dt);

    return (
        <Container>
            <Search />
            <Result date={date} temperature={temperature} sky={sky} city={city}>
                <Useless wind={data.wind_speed} sunrise={data.sunrise} sunset={data.sunset} />
                <Forecast forecast={forecast} />
            </Result>
        </Container>
    );
};

export async function getServerSideProps(ctx) {
    const { query } = ctx;

    const queryCity = query.cityName ? query.cityName : "Berlin";

    const url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=FI0ZPYdRRTTdhdTKQwENNV-OAS4OA13qj97BqtkoU2M&searchtext=${queryCity}`;

    const fetchedCoords = await (await fetch(url)).json();

    if (fetchedCoords.Response.View[0] == undefined) {
        return {
            props: {
                error: "oops",
            },
        };
    }
    const { Latitude, Longitude } = fetchedCoords.Response.View[0].Result[0].Location.DisplayPosition;
    const city = fetchedCoords.Response.View[0].Result[0].Location.Address.District
        ? fetchedCoords.Response.View[0].Result[0].Location.Address.District
        : fetchedCoords.Response.View[0].Result[0].Location.Address.City;
    console.log(fetchedCoords.Response.View[0]);
    // ////////////////////////////////////`

    const url2 = `    https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude}&lon=${Longitude}&
    exclude=current,daily&appid=ba590e34cd2c5e9d9bfa284e3f0b6a6e`;
    const data = await (await fetch(url2)).json();
    const current = data.current;
    const forecast = data.daily;
    const timezone = data.timezone_offset;
    return { props: { data: current, forecast, city, timezone } };
}

export default result;
