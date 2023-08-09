import { useState, useEffect } from "react";
import useWeatherService from "../../services/WeatherService";
import Trip from "../trip/Trip";
import Weather from "../trip/Weather";
import Modal from "../modal/Modal";

function App() {
  const [trip, setTrip] = useState({
    "image": "https://media.cntraveler.com/photos/5a85a6cc833f8a477b94953e/master/w_1920%2Cc_limit/Musee-Picasso_Fabien-Campoverde_2018_BH4A5113fab.jpg",
    "city": "Kyiv",
    "date1": "20.08.2023",
    "date2": "26.08.2023"
  });
  const [trips, setTrips] = useState([]);
  const [weekWeather, setWeekWeather] = useState()
  const [weather, setWeather] = useState({});
  const [modal, setModal] = useState('hidden');
  const { getForecast, getTodaysWeather } = useWeatherService();

  const transformDateFormat = (date) => {
    let [day, month, year] = date.split(".");
    return [year, month - 1, day].join('-')
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cardData'));
    if (!storedData || storedData.length === 0 || storedData === null) {
      localStorage.setItem('cardData', JSON.stringify([
        {
          "image": "https://media.cntraveler.com/photos/5a85a6cc833f8a477b94953e/master/w_1920%2Cc_limit/Musee-Picasso_Fabien-Campoverde_2018_BH4A5113fab.jpg",
          "city": "Kyiv",
          "date1": "20.08.2023",
          "date2": "26.08.2023"
        }
      ]))
    }
    const sortedTrips = sortTrips(storedData ? storedData : [{
      "image": "https://media.cntraveler.com/photos/5a85a6cc833f8a477b94953e/master/w_1920%2Cc_limit/Musee-Picasso_Fabien-Campoverde_2018_BH4A5113fab.jpg",
      "city": "Kyiv",
      "date1": "20.08.2023",
      "date2": "26.08.2023"
    }]);
    setTrips(sortedTrips);
    setTrip(sortedTrips[0]);
  }, []);

  useEffect(() => {
    if (trip.city !== "") {
      // getTodaysWeather(trip.city)
      //   .then(item => {
      //     setWeather({ temperature: Math.round(item.days[0].temp), icon: item.days[0].icon })
      //   })
      //   .catch(e => console.log(e))

      // getForecast(trip.city, transformDateFormat(trip.date1), transformDateFormat(trip.date2)).then(item => {
      //   setWeekWeather(item.days)
      // })
    }
  }, [trip])

  const addTrips = (image, city, date1, date2) => {
    const newTrip = { image, city, date1, date2 };
    setTrips((prevData) => sortTrips([...prevData, newTrip]));
  };

  useEffect(() => {
    if (trips.length > 0) {
      localStorage.setItem("cardData", JSON.stringify(trips));
    }
  }, [trips]);

  // Сортируем поездки по начальной дате
  const sortTrips = (arr) => [...arr].sort((a, b) => {
    const dateA = new Date(a.date1.split(".").reverse().join("-"));
    const dateB = new Date(b.date1.split(".").reverse().join("-"));
    return dateA - dateB;
  });

  return (
    <div className="App">
      <Trip weekWeather={weekWeather} trips={trips} setTrip={setTrip} setModal={setModal} />
      <Weather weather={weather} trip={trip} />
      <Modal modal={modal} addTrips={addTrips} setModal={setModal} />
    </div>
  );
}

export default App;