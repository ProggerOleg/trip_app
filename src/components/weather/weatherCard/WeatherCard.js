import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMapPin} from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome'

import './WeatherCard.css'

fontawesome.library.add(faSun);

const WeatherCard = (props) => {
  const {weather, city} = props;

  const temperature = Array.isArray(weather) ? weather[0].temperature : '29';
  const location = city ? city : 'Paris, FR';
  const weatherDesc = Array.isArray(weather) ? weather[0].weather : 'Sunny';

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const date = new Date().toLocaleDateString();;

    return (
        <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{dayOfWeek}</h2><span className="date-day">{date}</span><FontAwesomeIcon icon={faMapPin} className="location-icon"/><span className="location">{location}</span>
          </div>
          <div className="weather-container"><FontAwesomeIcon icon={faSun} className="weather-icon"/>
            <h1 className="weather-temp">{temperature}°C</h1>
            <h3 className="weather-desc">{weatherDesc}</h3>
          </div>
        </div>
    )
}

export default WeatherCard;