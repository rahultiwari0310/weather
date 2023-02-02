import { useState } from "react";

export const useFetchWeatherByCoords = () => {
    const [weatherResponse, setWeatherResponse] = useState({
        data: [],
        isLoading: true,
        error: null
    })
    const fetchWeather = (coords) => {
        if (!coords.longitude || !coords.latitude) return;
        setWeatherResponse({
            ...weatherResponse,
            isLoading: true
        })
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely,hourly&units=metric&appid=4327f11f6458df3e888e99c6b054069c`;
        fetch(url).then(res => res.json()).then(res => {
            setWeatherResponse({
                isLoading: false,
                data: res,
                error: null
            })
        }).catch(err => {
            setWeatherResponse({
                isLoading: false,
                data: [],
                error: err
            })
        });

    }

    return { fetchWeather, weatherResponse }

}