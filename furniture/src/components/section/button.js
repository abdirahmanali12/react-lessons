import React from "react";
import { conterest } from "./conterestColor";

function Button({ bgColor = "primary-color", label = "click", textColor }) {
  textColor = conterest(textColor, bgColor);
  return (
    <button className={`button-style ${bgColor + " " + textColor} `}>
      {label}
    </button>
  );
}

export default Button;
