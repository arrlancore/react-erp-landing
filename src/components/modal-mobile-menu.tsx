import Modal from "./modal";
import "./modal-mobile-menu.scss";

export default function ModalMobileMenu(props: {
  isOpen: boolean;
  onClose: () => void;
  goAbout: () => void;
  goPricing: () => void;
  goContact: () => void;
  onLogin: () => void;
}) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="modal-content">
        <span onClick={props.onClose} className="close">
          ✖
        </span>
        <h2>MENU</h2>
        <div className="menu-mobile">
          <div
            onClick={() => {
              props.goAbout();
              props.onClose();
            }}
          >
            About
          </div>
          <div
            onClick={() => {
              props.goPricing();
              props.onClose();
            }}
          >
            Pricing
          </div>
          <div
            onClick={() => {
              props.goContact();
              props.onClose();
            }}
          >
            Contact
          </div>
          <div
            onClick={() => {
              props.onClose();
              props.onLogin();
            }}
            className="text-color-primary"
          >
            Login
          </div>
        </div>
      </div>
    </Modal>
  );
}
