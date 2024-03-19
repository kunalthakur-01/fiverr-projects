import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`${props.className} btn`}
      type={`${props.type || "button"}`}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
