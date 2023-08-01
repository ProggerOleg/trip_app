import WeatherCard from "./weatherCard/WeatherCard";
import WeatherInfo from "./weatherInfo/WeatherInfo";


const Weather = (props) => {
    const {weather, city} = props;

    return (
        <div className="container">
            <WeatherCard 
                weather={weather}
                city={city}/>
            <WeatherInfo weather={weather}/>
        </div>
    )
}

export default Weather;
