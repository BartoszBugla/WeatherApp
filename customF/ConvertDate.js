const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const ConvertDate = (date, timezone) => {
    let { weekday, day, hour, min } = getItems(date, timezone);
    if (min < 10) min = `0${min}`;
    if (hour < 10) hour = `0${hour}`;

    return `${hour}:${min}`;
};
const getItems = (date, timezone) => {
    if (timezone) {
        const d = new Date();
        const utc = d.getTime() + d.getTimezoneOffset() * 60000;
        const string = new Date(utc + 1000 * timezone);
        let weekday = string.getDay();
        let day = string.getDate();
        let hour = string.getHours();
        let min = string.getMinutes();
        weekday = shortDays[weekday];

        return { weekday, day, hour, min };
    }
    let string = new Date(date * 1000);

    let weekday = string.getDay();
    let day = string.getDate();
    let hour = string.getHours();
    let min = string.getMinutes();
    weekday = shortDays[weekday];

    return { weekday, day, hour, min };
};

export default getItems;
