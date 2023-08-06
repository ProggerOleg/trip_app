import { useState, useEffect } from "react";
import useWeatherService from "../../services/WeatherService";
import Trip from "../trip/Trip";
import Weather from "../trip/Weather";
import Modal from "../modal/Modal";

function App() {
  const [trip, setTrip] = useState({ city: "Paris", date1: "2022-10-21", date2: "2022-10-28" });
  const [weekWeather, setWeekWeather] = useState([])
  const [weather, setWeather] = useState({});
  const [modal, setModal] = useState('hidden');

  const { getForecast, getTodaysWeather } = useWeatherService();

  useEffect(() => {
    getTodaysWeather(trip.city)
      .then(item => {
        setWeather({ temperature: Math.round(item.days[0].temp), icon: item.days[0].icon })
      })
      .catch(e => console.log(e))

    getForecast(trip.city, trip.date1, trip.date2).then(item => {
      setWeekWeather(item.days)
    })
  }, [trip])


  return (
    <div className="App">
      <Trip weekWeather={weekWeather} setTrip={setTrip} setModal={setModal} />
      <Weather weather={weather} trip={trip} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
