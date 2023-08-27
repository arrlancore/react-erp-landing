import Modal from "./modal";
import "./modal-login.scss";

export default function ModalLogin(props: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="modal-content">
        <span onClick={props.onClose} className="close">
          ✖
        </span>
        <h2>LOGIN</h2>
        <form>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </Modal>
  );
}
