import { useHttp } from "../hooks/http.hook";

const useWeatherService = () => {
    const {request} = useHttp();
    const __apiKey = 'd34b55b925e7592ecfd64dc1574d6f2b'

    const getForecast = async (latitude, longitude) => {
        const res = await request(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${__apiKey}`)
        return { city: res.city.name, weather: res.list.map(_transformLocation)}
    }

    const getLocationByCity = async (city) => {
        const res = await request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${__apiKey}`)
        return res
    }

    const _transformLocation = (item) => {
        return {
            weather: item.weather[0].main,
            temperature: Math.floor(item.main.temp - 273.15),
            precipitation: item.pop,
            humidity: item.main.humidity,
            wind: item.wind.speed,
            icon: item.weather[0].icon
        }
    }
    return {
        getForecast,
        getLocationByCity
    }
}

export default useWeatherService;