const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const ConvertDate = (date) => {
    let { weekday, day, hour, min } = getItems(date);
    if (min < 10) min = `0${min}`;
    if (hour < 10) hour = `0${hour}`;

    return `${weekday} , ${hour}:${min} am `;
};
const getItems = (date) => {
    let string = new Date(date * 1000);

    let weekday = string.getDay();
    let day = string.getDate();
    let hour = string.getHours();
    let min = string.getMinutes();
    weekday = shortDays[weekday];

    return { weekday, day, hour, min };
};
export default getItems;
