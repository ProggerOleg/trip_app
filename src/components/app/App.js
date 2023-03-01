import { useState, useEffect } from "react";

import useWeatherService from '../../services/WeatherService';

import Weather from "../weather/Weather";
import SearchCity from "../searchCity/SearchCity";

function App() {


  const [location, setLocation] = useState({});
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({})

  const { getForecast, getLocationByCity } = useWeatherService();


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const getLocation = (location) => {
      console.log('Click');
      
      if (location.latitude && location.longitude) {
          getForecast(location.latitude, location.longitude)
              .then(({city, weather}) => {
                  console.log({city, weather});
                  setCity(city);
                  setWeather(everyEighth(weather));
              })
              .catch((error) => console.log(error));
          }
  }

  function everyEighth(arr) {
    return arr.filter((_, i) => (i + 1) % 8 === 0);
  }

  return (
    <div className="App">
      <SearchCity getLocation={getLocation}/>
      <Weather/>
    </div>
  );
}

export default App;
