import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, modalDetails }) => {
  if (!modalDetails || !modalDetails.isActive) return null;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} role="presentation" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{modalDetails.title}</p>
          <div className="delete" onClick={closeModal} role="presentation" />
        </header>
        <section className="modal-card-body">
          <div className="content">
            {modalDetails.body}
          </div>
        </section>
        <footer className="modal-card-foot">
          <div
            className="button"
            onClick={closeModal}
            role="presentation"
          >
            <span>Cancel</span>
          </div>
          <div
            className="button is-primary"
            onClick={modalDetails.confirm}
            role="presentation"
          >
            <span>Confirm</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalDetails: PropTypes.shape({}).isRequired,
};

export default Modal;
