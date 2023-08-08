import React, { useState } from 'react';
import Login from '../app/Login';
import { Cities } from '../../assets/Images';
import { AiOutlineClose } from 'react-icons/ai';
import './modal.css';

const Modal = (props) => {
  const { modal, setModal, addTrips } = props;
  const [city, setCity] = useState();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showLogin, setShowLogin] = useState(true)
  const citiesImages = new Cities();

  const updateLoginState = (newState) => {
    setShowLogin(newState);
  };

  const transformDateFormat = (date) => {
    const [year, month, day] = date.split("-");
    const formattedMonth = (parseInt(month) < 10 ? `${month}` : month);
    return [day, formattedMonth, year].join('.');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the collected values to the addTrips function
    addTrips(citiesImages[`${city}`], city, transformDateFormat(startDate), transformDateFormat(endDate));
    // Close the modal
    setModal('hidden');
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    setEndDate(''); // Reset end date when start date changes
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  const maxStartDate = new Date();
  maxStartDate.setDate(maxStartDate.getDate() + 15);
  const maxStartDateStr = maxStartDate.toISOString().split('T')[0];

  const minEndDate = startDate || todayStr; // Set min to start date or today's date if not selected

  let maxEndDateStr = '';
  if (startDate) {
    const maxEndDate = new Date(startDate);
    maxEndDate.setDate(maxEndDate.getDate() + 15);
    maxEndDateStr = maxEndDate.toISOString().split('T')[0];
  }

  return (
    <div className="modal" style={{ visibility: modal }}>
      <form className="modal-wrapper" onSubmit={handleSubmit}>
        <div className="modal-heading mb-5">
          <h2>Create trip</h2>
          <button onClick={(e) => {
            e.preventDefault();
            setModal('hidden')
          }}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div style={{ width: '40%', margin: 'auto', display: 'flex', justifyContent: 'space-around' }}>
          {showLogin && <Login updateParentState={updateLoginState} />}

        </div>

        <div className="modal-trip mb-5">
          <div className='form-inputs'>
            <div className="mb-3">
              <label className="form-label">City</label>
              <select
                className="form-control"
                name="city"
                value={city} // Make sure to set the value of the select to the current city
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Please select a city</option>
                {Object.keys(citiesImages).map((cityKey) => (
                  <option key={cityKey} value={cityKey}>
                    {cityKey}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Start date</label>
              <input
                type="date"
                className="form-control"
                name="date1"
                placeholder="Select date"
                onChange={handleStartDateChange}
                min={todayStr} // Set min to today's date
                max={maxStartDateStr}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">End date</label>
              <input
                type="date"
                className="form-control"
                name="date2"
                placeholder="Select date"
                onChange={handleEndDateChange}
                min={minEndDate}
                max={maxEndDateStr}
                disabled={!startDate}
              />
            </div>
          </div>
        </div>
        <div className="modal-bottom gap-30">
          <button className="button-cancel"
            onClick={(e) => {
              e.preventDefault();
              setModal('hidden')
            }}>Cancel</button>
          <button type='submit' className="button-save">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
