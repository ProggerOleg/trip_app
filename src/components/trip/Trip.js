import React from "react";
import "./trip.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
const Trip = () => {
  return (
    <section className="trip wrapper">
      <div className="trip header mb-5">
        Weather <b>Forecast</b>
      </div>
      <div className="search gap-15 mb-5">
        <FiSearch size={"30px"} />
        <input type="text" placeholder="Search your trip" />
      </div>
      <div className="trip-cards gap-30 mb-5">
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
        <div style={{ height: "130px" }}></div>
      </div>
    </section>
  );
};

export default Trip;
