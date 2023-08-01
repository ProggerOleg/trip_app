import { useState, useEffect } from "react";

import useWeatherService from "../../services/WeatherService";
import Trip from "../trip/Trip";

import Weather from "../trip/Weather";
import SearchCity from "../searchCity/SearchCity";

function App() {
  const [location, setLocation] = useState({});
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const { getForecast, getLocationByCity } = useWeatherService();

  useEffect(() => {
    onLocationClick(location);
    // eslint-disable-next-line
  }, []);

  const onLocationClick = (location) => {
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
      console.log("Geolocation is not supported by this browser.");
    }

    if (location.latitude && location.longitude) {
      getForecast(location.latitude, location.longitude)
        .then(({ city, weather }) => {
          setCity(city);
          setWeather(everyEighth(weather));
        })
        .catch((error) => console.log(error));
    }
  };

  const onSearchCity = (city) => {
    getLocationByCity(city)
      .then(({ lon, lat }) => {
        getForecast(lat, lon)
          .then(({ city, weather }) => {
            setCity(city);
            setWeather(everyEighth(weather));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const everyEighth = (arr) => {
    return arr.filter((_, i) => (i + 1) % 8 === 0);
  };

  return (
    <div className="App">
      {/* <SearchCity 
          onLocationClick={onLocationClick}
          city={city}
          location={location}
          setCity={setCity}
          onSearchCity={onSearchCity}
      />
      <Weather
          city={city}
          weather={weather}/> */}
      <Trip />
      <Weather />
    </div>
  );
}

export default App;
