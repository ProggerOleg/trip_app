import WeatherCard from "./weatherCard/WeatherCard";
import WeatherInfo from "./weatherInfo/WeatherInfo";


const Weather = () => {
    return (
        <div className="container">
            <WeatherCard/>
            <WeatherInfo/>
        </div>
    )
}

export default Weather;
