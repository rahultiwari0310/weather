import dayjs from 'dayjs'

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


export const getDate = (dt) => dayjs(dt * 1000).format("DD MMM YYYY")
export const getDay = (dt) => days[dayjs(dt * 1000).get("day")]