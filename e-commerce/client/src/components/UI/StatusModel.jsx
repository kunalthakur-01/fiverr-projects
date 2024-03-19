import React from "react";

import "./StatusModel.css";

import { AiOutlineCloseCircle } from "react-icons/ai";

const ErrorModel = (props) => {
  return (
    <div className={`${props.status}_model`}>
      <p> {props.children} </p>
      <button onClick={props.close}>
        <AiOutlineCloseCircle className="close_model" />
      </button>
    </div>
  );
};

export default ErrorModel;
