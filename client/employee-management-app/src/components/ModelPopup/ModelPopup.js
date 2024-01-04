import React from "react";
import Modal from "react-modal";

const ModelPopup = ({ showModal, setShowModal }) => {
  return (
    <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
      <h1>modal</h1>
      <p>hello world</p>
      <button onClick={() => setShowModal(false)}>close</button>
    </Modal>
  );
};

export default ModelPopup;
