import { useHttp } from "../hooks/http.hook";

const useWeatherService = () => {
    const { request } = useHttp();
    const __apiKey = 'EUHRQXCFA9JUS3FDZQDZJTYQW'

    const getForecast = async ({ city, date1, date2 }) => {
        const res = await request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date1}/${date2}?unitGroup=metric&include=days&key=${__apiKey}&contentType=json`)
        return res
    }

    const getTodaysWeather = async (city) => {
        const res = await request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${__apiKey}&contentType=json`)
        return res
    }

    return {
        getForecast,
        getTodaysWeather
    }
}

export default useWeatherService;