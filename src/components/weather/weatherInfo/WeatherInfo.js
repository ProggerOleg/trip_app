import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake, faMagnifyingGlass, faMapPin, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome'

import { useId } from 'react';

fontawesome.library.add(faSun, faMagnifyingGlass, faCloud, faCloudRain, faSnowflake, faMapPin, faLocationDot);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


const WeatherInfo = (props) => {
  const {weather} = props;
  const precipitation = Array.isArray(weather) ? weather[0].precipitation : '0';
  const humidity = Array.isArray(weather) ? weather[0].humidity : '34';
  const wind = Array.isArray(weather) ? weather[0].wind : '0';

  const elements = Array.isArray(weather) ?
                   weather.map((item, i) => WeatherItem(item, i)).slice(0, 4) :
                      <>
                        <li className="active"><FontAwesomeIcon icon={faSun} className="day-icon" /><span className="day-name">Tue</span><span className="day-temp">29°C</span></li>
                        <li><FontAwesomeIcon icon={faCloud} className="day-icon" /><span className="day-name">Wed</span><span className="day-temp">21°C</span></li>
                        <li><FontAwesomeIcon icon={faSnowflake} className="day-icon" /><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
                        <li><FontAwesomeIcon icon={faCloudRain} className="day-icon" /><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
                      </> 


    return (
        <div className="info-side">
          <div className="today-info-container">
            <div className="today-info">
              <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value"> {Math.round(precipitation*100)} %</span>
                <div className="clear"></div>
              </div>
              <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{humidity} %</span>
                <div className="clear"></div>
              </div>
              <div className="wind"> <span className="title">WIND</span><span className="value">{wind} km/h</span>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="week-container">
            <ul className="week-list">
              {elements}

              <div className="clear"></div>
            </ul>
          </div>
          <div className="location-container">
            <button className="location-button"> <FontAwesomeIcon icon={faLocationDot}/><span> Random location</span></button>
          </div>
        </div>
    )
}



const WeatherItem = ({humidity, icon, precipitation, temperature, weather, wind}, i) => {

  // const icons = {
  //   'Clouds': faCloud,
  //   'Sun': faSun,
  //   'Rain': faCloudRain,
  //   'Snow': faSnowflake
  // }

  return (
    <li key={useId()}>
      <img src={`http://openweathermap.org/img/w/${icon}.png` } alt={weather}/>
      {/* <FontAwesomeIcon icon={icons.weather} className="day-icon" /> */}
      <span className="day-name">{daysOfWeek[i+3]}</span>
      <span className="day-temp">{temperature + '°C'}</span>
    </li>
  )
}


export default WeatherInfo;