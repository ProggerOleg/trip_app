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
        <Carousel items={[
          ...trips.map((data, index) => (
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
        ]

          // [
          //   <Card setTrip={setTrip} image="https://media.cntraveler.com/photos/5a85a6cc833f8a477b94953e/master/w_1920%2Cc_limit/Musee-Picasso_Fabien-Campoverde_2018_BH4A5113fab.jpg" city="Berlin" date1="20.11.2002" date2="20.12.2022" />,
          //   <Card setTrip={setTrip} image="https://media.cntraveler.com/photos/5a93281d8087c02669a7dc07/master/w_1920%2Cc_limit/Arc%2520de%2520Triomphe_GettyImages-615063063.jpg" city="Paris" date1="32.11.3002" date2="12.1.2022" />,
          //   <Card setTrip={setTrip} image="https://media.cntraveler.com/photos/5a85a6cc833f8a477b94953e/master/w_1920%2Cc_limit/Musee-Picasso_Fabien-Campoverde_2018_BH4A5113fab.jpg" city="Berlin" date1="20.11.2002" date2="20.12.2022" />,
          // <button button className="trip-add" onClick={() => setModal('visible')}>
          //   <div>
          //     <AiOutlinePlus />
          //     <br />
          //     Add Trip
          //   </div>
          // </button>
          // ]
        } />

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
    </section >
  );
};

export default Trip;
