import React from "react";

import "./Button.css";

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <span>Probar mi suerte</span>
    </button>
  );
};

export default Button;
