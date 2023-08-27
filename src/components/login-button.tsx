import React from "react";
import "./login-button.scss";

interface LoginButtonProps {
  text?: string;
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ text, onClick }) => {
  return (
    <button className="outlined-button" onClick={onClick}>
      {text ?? "Login"}
    </button>
  );
};

export default LoginButton;
