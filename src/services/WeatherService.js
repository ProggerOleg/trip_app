import { useHttp } from "../hooks/http.hook";

const useWeatherService = () => {
    const {request} = useHttp();
    const __apiKey = 'd34b55b925e7592ecfd64dc1574d6f2b'
    const __googleApiKey = 'AIzaSyB57FMnwo8xrc4Ptm0s6K0-7yt7YtHOvV4'

    const googleAutocomplete = async (input) => {
        const res = await request(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&key=${__googleApiKey}`)
        return { list: res.predictions.map(_transformPlaces) }
    }

    const getForecast = async (latitude, longitude) => {
        const res = await request(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${__apiKey}`)
        return { city: res.city.name, weather: res.list.map(_transformLocation)}
    }

    const getLocationByCity = async (city) => {
        const res = await request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${__apiKey}`)
        return { "lon": res.coord.lon, 'lat': res.coord.lat}
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

    const _transformPlaces = (item) => {
        return {
            place_id: item.place_id,
            place: item.structured_formatting.main_text
        }
    }

    return {
        googleAutocomplete,
        getForecast,
        getLocationByCity
    }
}

export default useWeatherService;