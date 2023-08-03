import "./weather.css";


const WeatherCard = (props) => {
  const { weather, trip } = props;

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const date = new Date().toLocaleDateString();

  return (
    <section className="weather wrapper">
      <div className="background-image">
        <img src="https://media.istockphoto.com/id/1372630904/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D0%BE%D0%B5-%D0%BC%D0%B8%D0%BB%D0%BE%D0%B5-%D0%BB%D0%B8%D1%86%D0%BE-%D0%BF%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%BA%D0%B0%D0%B2%D0%B0%D0%B8%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=612x612&w=0&k=20&c=Q1GyvFJBupmIQi-unOL_B8yI1OsK3vkJvapquoG1SWk="
          alt="icon"
          className="penguin" />
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
        <h2>{dayOfWeek}</h2>
        <div className="widget_weather">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
            alt=""
          />
          <div className="widget_temperature">
            {weather.temperature}
            <div className="celsius">°C</div>
          </div>
        </div>
        <div className="widget_city mb-5">{trip.city}</div>
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
