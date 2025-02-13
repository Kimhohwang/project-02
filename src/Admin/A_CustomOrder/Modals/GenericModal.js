import React from "react";
import { Modal, Button } from "react-bootstrap";

const GenericModal = ({ show, handleClose, title, children }) => {
  return (
    <Modal show={show} onHide={handleClose} size="fullscreen">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default GenericModal;
