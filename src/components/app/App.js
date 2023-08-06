import { useState, useEffect } from "react";
import useWeatherService from "../../services/WeatherService";
import Trip from "../trip/Trip";
import Weather from "../trip/Weather";
import Modal from "../modal/Modal";

function App() {
  const [trip, setTrip] = useState({ city: "Paris", date1: "2022-10-21", date2: "2022-10-28" });
  const [trips, setTrips] = useState([]);
  const [weekWeather, setWeekWeather] = useState([])
  const [weather, setWeather] = useState({});
  const [modal, setModal] = useState('hidden');

  const { getForecast, getTodaysWeather } = useWeatherService();

  // Перша карточка
  localStorage.setItem('cardData', JSON.stringify(
    {
      "image": "https://media.cntraveler.com/photos/5a85a6cc833f8a477b94953e/master/w_1920%2Cc_limit/Musee-Picasso_Fabien-Campoverde_2018_BH4A5113fab.jpg",
      "city": "Kyiv",
      "date1": "20.11.2002",
      "date2": "20.12.2022"
    }));

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

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cardData'));
    if (storedData) {
      setTrips([...trips, storedData]);
    }
  }, []);

  const addTrips = (image, city, date1, date2) => {
    const newTrip = { image, city, date1, date2 };
    setTrips((prevData) => [...prevData, newTrip]);
    localStorage.setItem('cardData', JSON.stringify(trips));
  };

  return (
    <div className="App">
      <Trip weekWeather={weekWeather} trips={trips} setTrip={setTrip} setModal={setModal} />
      <Weather weather={weather} trip={trip} />
      <Modal modal={modal} addTrips={addTrips} setModal={setModal} />
    </div>
  );
}

export default App;
