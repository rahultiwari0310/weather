import { getDate, getDay } from '../utils';
const fieldsToShow = [
    {
        key: 'feels_like',
        label: "Feel like",
        icon: "temperature-half",
        suffix: "℃"
    },
    {
        key: 'humidity',
        label: "Humidity",
        icon: "droplet",
        suffix: "%"
    },
    {
        key: 'wind_speed',
        label: "Wind",
        icon: "wind"

    }
]

const FieldItem = ({icon, label, value}) => {
    return <div className='field-item'>
        <span>{label}
            <i className={`fa fa-solid fa-${icon}`}></i>
        </span>
        <span>
            {value}
        </span>
    </div>
}
export const CityWeatherDetails = ({ current, daily, location }) => {
    if(!current || !location.countryName) return null;
    const date = getDate(current.dt);
    const day = getDay(current.dt);
    const {icon} = current.weather[0];
    return (
        <div className='city-details'>
            <div>{location.city}, {location.countryName}</div>
            <div className='day-date'>
                <span>{date}</span>
                <span>{day}</span>
            </div>
            <div className='day-weather'>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                />
                <div>{Math.round(current.temp)}℃</div>
            </div>
            <div className='weather-values'>
                {
                    fieldsToShow.map(it => <FieldItem key={it.key} value={`${Math.round(current[it.key])} ${it.suffix ? it.suffix : ''}`} icon={it.icon} label={it.label}/>)
                }
                <FieldItem value={`${Math.round(daily[0].temp.day)} ℃`} icon="sun" label="Day"/>
                <FieldItem value={`${Math.round(daily[0].temp.night)} ℃`} icon="moon" label="Night"/>
            </div>
        </div>
    )
    
}