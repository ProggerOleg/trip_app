import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './modal.css';

const Modal = (props) => {
  const { modal, setModal, addTrips } = props;
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
      <form className="modal-wrapper" onSubmit={() => addTrips(
        // (image, city, date1, date2)
      )}>
        <div className="modal-heading mb-5">
          <h2>Create trip</h2>
          <button onClick={(e) => {
            e.preventDefault();
            setModal('hidden')
          }}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="modal-trip mb-5">
          <div className='form-inputs'>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="city"
                className="form-control"
                name="city"
                placeholder="Please select a city"
              />
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
