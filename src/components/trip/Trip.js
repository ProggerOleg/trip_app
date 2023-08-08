import React, { useState } from "react";
import Card from "../cards/Card";
import Day from "../cards/Day";
import Carousel from '../Carousel/Carousel'
import IMG from "../../assets/Images";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import "./trip.css";

const Trip = (props) => {
  const { trips, weekWeather, setTrip, setModal } = props;
  const img = new IMG()
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const dateToDayOfWeek = (date) => {
    let [year, month, day] = date.split("-");
    let dateObject = new Date(year, month - 1, day);
    return dateObject.getDay()
  }

  const [searchText, setSearchText] = useState("");

  const filteredTrips = trips.filter((trip) =>
    trip.city.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="trip wrapper">
      <div className="trip header mb-5">
        Weather <b>Forecast</b>
      </div>
      <div className="search gap-15 mb-5">
        <FiSearch size={"30px"} />
        <input
          type="text"
          placeholder="Search your trip"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="trip-cards slider gap-30 mb-5">
        <Carousel items={[
          ...filteredTrips.map((data, index) => (
            <Card
              key={index}
              setTrip={setTrip}
              image={data.image}
              city={data.city}
              date1={data.date1}
              date2={data.date2}
            />
          )),
          <button className="trip-add" onClick={() => setModal('visible')}>
            <div>
              <AiOutlinePlus />
              <br />
              Add Trip
            </div>
          </button>
        ]} />

      </div>
      <div className="week-weather">
        <h3>Week</h3>
        <div className="week_forecast gap-30">
          {weekWeather ? (
            weekWeather.map((dayWeather, index) => (
              <Day key={index}
                weather={dayWeather}
                day={daysOfWeek[dateToDayOfWeek(dayWeather.datetime)]}
                image={img[dayWeather.icon]}
                tempDay={Math.round(dayWeather.tempmax)}
                tempNight={Math.round(dayWeather.tempmin)} />
            ))
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Trip;
