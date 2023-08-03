import { useState, useEffect } from "react";
import useWeatherService from "../../services/WeatherService";
import Trip from "../trip/Trip";
import Weather from "../trip/Weather";

function App() {
  const [trip, setTrip] = useState({ city: "Kyiv", date1: "2022-10-21", date2: "2022-10-28" });
  const [weekWeather, setWeekWeather] = useState([])
  const [weather, setWeather] = useState({});

  const { getForecast, getTodaysWeather } = useWeatherService();

  useEffect(() => {
    getTodaysWeather(trip.city)
      .then(item => {
        setWeather({ temperature: Math.round(item.days[0].temp) })
      })
      .catch(e => console.log(e))

    getForecast(trip).then(item => {
      setWeekWeather(item.days)
    })
  }, [trip])

  return (
    <div className="App">
      <Trip setTrip={setTrip} />
      <Weather weather={weather} trip={trip} />
    </div>
  );
}

export default App;
