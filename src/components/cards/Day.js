import React from 'react'

const Day = (props) => {
    const { day, image, tempDay, tempNight } = props;

    return (
        <div className="day_forecast">
            <div className="day_of_week">{day}</div>
            <img
                src={image}
                alt="Weather Icon"
            />
            <div className="day_temperature">{tempDay + '°/' + tempNight + '°'}</div>
        </div>
    )
}

export default Day