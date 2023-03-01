import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMapPin} from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome'

import './WeatherCard.css'

fontawesome.library.add(faSun);

const WeatherCard = () => {
    return (
        <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">Tuesday</h2><span className="date-day">15 Jan 2019</span><FontAwesomeIcon icon={faMapPin} className="location-icon"/><span className="location">Paris, FR</span>
          </div>
          <div className="weather-container"><FontAwesomeIcon icon={faSun} className="weather-icon"/>
            <h1 className="weather-temp">29°C</h1>
            <h3 className="weather-desc">Sunny</h3>
          </div>
        </div>
    )
}

export default WeatherCard;