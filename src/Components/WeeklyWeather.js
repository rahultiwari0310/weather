import dayjs from 'dayjs'
import {getDate, getDay} from '../utils'

const DailyWeatherItem = ({day}) => {
    return <div className={`grid-item`}>
    <div className="grid-item-header">{getDate(day?.dt)}</div>
    <div className="grid-item-container">
      <img
        src={`https://openweathermap.org/img/wn/${day?.weather?.[0].icon}@2x.png`}
      />
      <span>{getDay(day?.dt)}</span>
      <span>{day?.weather?.[0]?.description}</span>
    </div>
    <div className="grid-item-footer">
      <div>
        Min: {Math.round(day?.temp?.min)}
        <span>&#8451;</span>
      </div>
      <div>
        Max: {Math.round(day?.temp?.max)}
        <span>&#8451;</span>
      </div>
    </div>
  </div>
}

export const WeeklyWeather = ({weathers}) => {
    return (
        <div className="section-container">
          {weathers?.daily?.map((day) => (
            <DailyWeatherItem day={day} key={day.dt}/>
          ))}
        </div>
    )
}