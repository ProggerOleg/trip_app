import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMapPin } from "@fortawesome/free-solid-svg-icons";
import fontawesome from "@fortawesome/fontawesome";
import "./weather.css";

fontawesome.library.add(faSun);

const WeatherCard = (props) => {
  const { weather, city } = props;

  const temperature = Array.isArray(weather) ? weather[0].temperature : "29";
  const location = city ? city : "Paris, FR";
  const weatherDesc = Array.isArray(weather) ? weather[0].weather : "Sunny";

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const date = new Date().toLocaleDateString();

  return (
    <section className="weather wrapper">
      <div className="background-image">
        <img
          src="https://clipart-library.com/img/1328334.png"
          alt=""
          style={{ top: "15%", right: "0px" }}
        />
        <img
          src="https://clipart-library.com/img/1328334.png"
          alt=""
          style={{ top: "40%", left: "-50px" }}
        />
        <img
          src="https://clipart-library.com/img/1328334.png"
          alt=""
          style={{ top: "70%", right: "-30px" }}
        />
        <img
          src="https://clipart-library.com/img/1328334.png"
          alt=""
          style={{ bottom: "-5%", left: "-170px" }}
        />
      </div>
      <div className="widget">
        <h2>Sunday</h2>
        <div className="widget_weather">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
            alt=""
          />
          <div className="widget_temperature">
            24
            <div className="celsius">°C</div>
          </div>
        </div>

        <div className="widget_city mb-5">Berlin</div>
      </div>
      <div className="timer">
        <div className="timer_col">
          <b>30</b>
          <br />
          days
        </div>
        <div className="timer_col">
          <b>10</b>
          <br />
          hours
        </div>
        <div className="timer_col">
          <b>23</b>
          <br />
          minutes
        </div>
        <div className="timer_col">
          <b>34</b>
          <br />
          seconds
        </div>
      </div>
    </section>
  );
};

export default WeatherCard;
