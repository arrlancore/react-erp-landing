import React from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "300px",
    minHeight: "200px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

const Modal = (props: {
  isOpen: boolean;
  shouldCloseOnOverlayClick?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      style={customStyles}
      shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
      contentLabel="Example Modal"
    >
      {props.children}
    </ReactModal>
  );
};

export default Modal;
