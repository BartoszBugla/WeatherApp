import React from "react";
import Wind from "./wind.svg";
import Rain from "./rain.svg";
import Clear from "./clear.svg";
import Cloud from "./cloud.svg";
import CloudWithSun from "./cloudWithSun.svg";
import LightRain from "./lightRain.svg";
import Moon from "./moon.svg";
import Night from "./night.svg";
import Storm from "./storm.svg";
import Storm2 from "./storm2.svg";
import Fog from "./fog.svg";
import Sunrise from "./sunrise.svg";
import WindIcon from "./windIcon.svg";
import Sunset from "./sunset.svg";
const Svg = ({ type }) => {
    switch (type) {
        case "rain":
            return <Rain />;
        case "wind":
            return <Wind />;
        case "clear":
            return <Clear />;
        case "cloud":
            return <Cloud />;
        case "cloudWithSun":
            return <CloudWithSun />;
        case "lightRain":
            return <LightRain />;
        case "moon":
            return <Moon />;
        case "night":
            return <Night />;
        case "storm":
            return <Storm />;
        case "storm2":
            return <Storm2 />;
        case "fog":
            return <Fog />;
        case "sunset":
            return <Sunset />;

        case "sunrise":
            return <Sunrise />;

        case "windIcon":
            return <WindIcon />;
        default:
            return null;
    }
};
export default Svg;
