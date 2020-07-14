import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import WeatherBox from "../components/WeatherBox";

import Useless from "../components/Useless";
import NewForecast from "../components/NewForecast";

const result = ({ data, city, error, forecast, timezone }) => {
    if (error) return <div>You passed Wrong localization</div>;
    const temperature = Math.round(data.temp - 273.15);
    const sky = data.weather[0].description;

    return (
        <Layout title={`Weather in ${city} `}>
            <WeatherBox
                timezone={timezone}
                dt={{ cur: data.dt, rise: data.sunrise, set: data.sunset }}
                temperature={temperature}
                sky={sky}
                city={city}
            >
                <Useless tz={timezone} wind={data.wind_speed} sunrise={data.sunrise} sunset={data.sunset} />
            </WeatherBox>
            <NewForecast forecast={forecast} />
        </Layout>
    );
};

export async function getServerSideProps(ctx) {
    const { query } = ctx;

    const queryCity = query.cityName ? query.cityName : "Berlin";
    const apikey1 = process.env.API_KEY_1;
    const url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${apikey1}&searchtext=${queryCity}`;

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
    // console.log(fetchedCoords.Response.View[0]);
    // ////////////////////////////////////`
    const apikey2 = process.env.API_KEY_2;
    const url2 = `    https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude}&lon=${Longitude}&
    exclude=current,daily&appid=${apikey2}`;
    const data = await (await fetch(url2)).json();
    const current = data.current;
    const forecast = data.daily;
    const timezone = data.timezone_offset;
    return { props: { data: current, forecast, city, timezone } };
}

export default result;
