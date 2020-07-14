import { interopDefault } from "next/dist/next-server/server/load-components";

const types = [
    {
        name: ["light intensity drizzle rain", "light rain", "light intensity shower rain"],
        icon: "lightRain",
        colors: ["#C5C5C5", "#858383"],
    },
    {
        name: ["overcast clouds"],
        icon: "cloud",
        colors: ["#C5C5C5", "#858383"],
    },
    {
        name: ["clear sky"],
        icon: "clear",
        colors: ["#3991F3", "#66BEFE"],
    },
    {
        name: ["few clouds", "broken clouds", "scattered clouds"],
        icon: "cloudWithSun",
        colors: ["#BACDE6", "#406FA3", "#2667AB"],
    },
    {
        name: ["heavy intensity rain", "very heavy rain", "moderate rain"],
        icon: "rain",
        colors: ["#C5C5C5", "#858383"],
    },
    {
        name: ["fog"],
        icon: "fog",
        colors: ["#B2CBCF", "#3D7485", "#01081F"],
    },
    {
        name: ["hot"],
        icon: "clear",
        colors: ["rgba(183, 63, 130, 0.78)", "rgba(232, 33, 53, 0.76)", "rgba(250, 100, 16, 0.8)"],
    },
    {
        name: ["thunderstorm with light rain"],
        icon: "storm",
        colors: ["#5BCCFC", "#003F82"],
    },
];
export default function ConvertSkies(sky: string, temp: number, time = { cur: 1, set: 1, rise: 1 }) {
    let day = true;
    if (time != undefined) {
        if (time.cur > time.set || time.cur < time.rise) day = false;
        console.log(day);
    }

    if (temp > 30 && sky == "clear sky") sky = "hot";
    const skyinfo = types.find((item) => {
        const result = item.name.find((name) => {
            if (name === sky) {
                return { ...item, name };
            }
        });
        return result;
    });

    if (!skyinfo) {
        return {
            name: "not found",
            icon: null,
            colors: ["#C5C5C5", "#858383"],
        };
    }

    return skyinfo;
}
