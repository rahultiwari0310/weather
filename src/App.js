
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useGeolocated } from "react-geolocated";
import { useFetchWeatherByCoords } from './hooks/useFetchWeatherByCoords';
import { useEffect, useState } from 'react';
import { useGetCoordsByCity, useGetCityByCoords } from './hooks/useGetCoordsByCity';
import { SearchCityForm } from './Components/SearchCityForm';
import { WeeklyWeather } from './Components/WeeklyWeather';
import { Loader } from './Components/Loader';
import { CityWeatherDetails } from './Components/CityWeatherDetails';

const def = {}
function App() {
  const { coords = def, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      }
    });

  const [city, setCity] = useState("");

  const [userLocation, setUserLocation] = useState(null)

  const { fetchCoords } = useGetCoordsByCity();
  const { fetchCity } = useGetCityByCoords();

  const { fetchWeather, weatherResponse } = useFetchWeatherByCoords(coords);

  useEffect(() => {
    const fetchDetails = async () => {
      fetchWeather(coords)
      const cityDetails = await fetchCity(coords)
      setUserLocation(cityDetails)
    }
    fetchDetails()
  }, [coords, isGeolocationEnabled])

  const handleFetchWeather = async (e) => {
    e.preventDefault();
    const res = await fetchCoords(city)
    const cityCoords = { latitude: res[0].lat, longitude: res[0].lon };
    const cityDetails = await fetchCity(cityCoords)
    setUserLocation(cityDetails)
    fetchWeather(cityCoords)
  }
  return (
    <div className="App">
      {
        isGeolocationEnabled || city ? null : <div className='geo-error'>Please enter city name or allow this website to access your location.</div>
      }
      <SearchCityForm city={city} onCityChange={setCity} onSubmit={handleFetchWeather} />

      {
        weatherResponse.isLoading ? <Loader /> : <>
          <CityWeatherDetails {...weatherResponse.data} location={userLocation}/>
          <WeeklyWeather weathers={weatherResponse.data} />
        </>
      }
    </div>
  );
}

export default App;
