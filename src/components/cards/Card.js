import React from 'react'

const Card = (props) => {
    const { setTrip, image, city, date1, date2 } = props;


    return (
        <div className="trip-card" onClick={() => setTrip({ image, city, date1, date2 })}>
            <img
                src={image}
                alt="trip"
            />
            <div className="trip-text">
                <div className="trip-destination">{city}</div>
                <div className="trip-date">{date1}-{date2}</div>
            </div>
        </div>
    )
}

export default Card