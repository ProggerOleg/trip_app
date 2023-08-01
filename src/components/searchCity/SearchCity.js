import './SearchCity.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome'

fontawesome.library.add(faLocationDot, faMagnifyingGlass);

const SearchCity = (props) => {

    const {onLocationClick, city, setCity, location, onSearchCity} = props;
    // const {googleAutocomplete} = useWeatherService();

    // const renderHint = ({place_id, place}) => {
    //     return (
    //         <li key={place_id}> {place} </li>
    //     )
    // }

// Подсказки временно не работают из за отсутствия серверной части
    // const onInput = (city) => {
    //     googleAutocomplete(city)
    //         .then(({list}) => console.log(list))
    // }

    return (
        <div className="area">
            <div className="search-box">
                <FontAwesomeIcon icon={faLocationDot} onClick={() => onLocationClick(location)}/>
                <input 
                    type="text" 
                    name="text" 
                    className="input" 
                    placeholder="Enter your location" 
                    value={city}
                    onChange={e => {
                        setCity(e.target.value);
                        // onInput(e.target.value);
                    }} ></input>
                <button 
                    type='submit'
                    onClick={() => onSearchCity(city)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
        </div>
    )
}

export default SearchCity;