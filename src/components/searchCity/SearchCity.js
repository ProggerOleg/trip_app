import './SearchCity.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome'
import { useState, useEffect } from 'react';

import useWeatherService from '../../services/WeatherService';

fontawesome.library.add(faLocationDot, faMagnifyingGlass);

const SearchCity = () => {

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
        <div className="area">
            <div className="search-box">
                <FontAwesomeIcon icon={faLocationDot} onClick={() => getLocation(location)}/>
                <input type="text" name="text" className="input" placeholder="Enter your location"/>
                <button type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    )
}


// const View = (city, data, getLocation) => {
//     const {humidity, icon, precipitation, temperature, weather, wind} = data;

//     return (
        
//     )
// }
export default SearchCity;