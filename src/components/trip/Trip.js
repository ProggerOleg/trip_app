import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import "./trip.css";

const Trip = (props) => {
  const { setCity } = props;

  return (
    <section className="trip wrapper">
      <div className="trip header mb-5">
        Weather <b>Forecast</b>
      </div>
      <div className="search gap-15 mb-5">
        <FiSearch size={"30px"} />
        <input type="text" placeholder="Search your trip" />
      </div>
      <div className="trip-cards slider gap-30 mb-5">
        {/* <a href="#" class="control_next">
          <GrFormNext />
        </a>
        <a href="#" class="control_prev">
          <GrFormPrevious />
        </a> */}
        <div className="trip-card">
          <img
            src="https://media.cntraveler.com/photos/5a85a6cc833f8a477b94953e/master/w_1920%2Cc_limit/Musee-Picasso_Fabien-Campoverde_2018_BH4A5113fab.jpg"
            alt="trip"
          />
          <div className="trip-text">
            <div className="trip-destination">Berlin</div>
            <div className="trip-date">20.04.2023-15.04.23</div>
          </div>
        </div>
        <div className="trip-card">
          <img
            src="https://media.cntraveler.com/photos/5a93281d8087c02669a7dc07/master/w_1920%2Cc_limit/Arc%2520de%2520Triomphe_GettyImages-615063063.jpg"
            alt="trip"
          />
          <div className="trip-text">
            <div className="trip-destination">Paris</div>
            <div className="trip-date">20.04.2023-15.04.23</div>
          </div>
        </div>
        <button className="trip-add">
          <div>
            <AiOutlinePlus />
            <br />
            Add Trip
          </div>
        </button>
      </div>
      <div className="week-weather">
        <h3>Week</h3>
        <div className="week_forecast gap-30" style={{ height: "130px" }}>
          <div className="day_forecast">
            <div className="day_of_week">Monday</div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
              alt="Weather Icon"
            />
            <div className="day_temperature">28C/21C</div>
          </div>
          <div className="day_forecast">
            <div className="day_of_week">Monday</div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
              alt="Weather Icon"
            />
            <div className="day_temperature">28C/21C</div>
          </div>
          <div className="day_forecast">
            <div className="day_of_week">Monday</div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
              alt="Weather Icon"
            />
            <div className="day_temperature">28C/21C</div>
          </div>
          <div className="day_forecast">
            <div className="day_of_week">Monday</div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
              alt="Weather Icon"
            />
            <div className="day_temperature">28C/21C</div>
          </div>
          <div className="day_forecast">
            <div className="day_of_week">Monday</div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
              alt="Weather Icon"
            />
            <div className="day_temperature">28C/21C</div>
          </div>
          <div className="day_forecast">
            <div className="day_of_week">Monday</div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
              alt="Weather Icon"
            />
            <div className="day_temperature">28C/21C</div>
          </div>
          <div className="day_forecast">
            <div className="day_of_week">Monday</div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
              alt="Weather Icon"
            />
            <div className="day_temperature">28C/21C</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trip;
