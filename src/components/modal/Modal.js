import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './modal.css'

const Modal = (props) => {
  const { modal, setModal } = props;

  return (
    <div className="modal" style={{ visibility: modal }}>
      <div className="modal-wrapper">
        <div className="modal-heading mb-5">
          <h2>Create trip</h2>
          <button onClick={() => setModal('hidden')}>
            <AiOutlineClose size={20} />
          </button>

        </div>
        <div className="modal-trip mb-5">
          <form action="">
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="city"
                className="form-control"
                name=""
                placeholder="Please select a city" />
            </div>
            <div className="mb-3">
              <label className="form-label">Start date</label>
              <input
                type="date"
                className="form-control"
                name=""
                placeholder="Select date" />
            </div>
            <div className="mb-3">
              <label className="form-label">End date</label>
              <input type="date"
                className="form-control"
                name=""
                placeholder="Select date" />
            </div>
          </form>

        </div>
        <div className="modal-bottom">

        </div>
      </div>
    </div>

  )
}

export default Modal