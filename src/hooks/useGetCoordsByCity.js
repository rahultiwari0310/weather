export const useGetCoordsByCity = () => {
    const fetchCoords = async (city) => {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=4327f11f6458df3e888e99c6b054069c`;
        const coords = await fetch(url).then(res => res.json());
        return coords;
    }
    return { fetchCoords };
}

export const useGetCityByCoords = () => {


    const fetchCity = async (coords) => {
        if (!coords.latitude || !coords.longitude) {
            return;
        }
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}`;
        const city = await fetch(url).then(res => res.json());
        return city;
    }
    return { fetchCity };

}