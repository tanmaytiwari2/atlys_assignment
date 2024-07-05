import React from "react";
import closeButton from "../../../assets/icons/closeButton.svg";
import "./index.css";

const Modal = ({ isModalOpen, modalContent, onClose, children }) => {
  if (isModalOpen !== true) {
    return null;
  }
  return (
    <section className="modal">
      <article className="modal-content">
        <div className="exit-icon">
          <img src={closeButton} onClick={onClose} />
        </div>
        {/* <main className="modal-mainContents">
          <h5 className="modal-title">{modalContent.title}</h5>
          <hr />
          <div className="modal-image text-center mt-lg-2">
            <img src={modalContent.image} alt="image" />
          </div>
          <p className="mt-lg-3 modalText">{modalContent.content}</p>
          <div className="modal-button text-end">
            <button>{modalContent.buttonText}</button>
          </div>
        </main> */}
        {children}
      </article>
    </section>
  );
};

export default Modal;
