import React from "react";

const Input = (props) => {
  const { inputName, type, placeholder, id, onInput } = props;

  const changeHandler = (e) => {
    switch (id) {
      case "name":
        return onInput({
          id,
          value: e.target.value,
          isValid: e.target.value.length > 3,
        });

      case "email":
        return onInput({
          id,
          value: e.target.value,
          isValid: e.target.value.includes("@"),
        });

      case "password":
        return onInput({
          id,
          value: e.target.value,
          isValid: e.target.value.length > 5,
        });
      case "price":
        return onInput({
          id,
          value: e.target.value,
          isValid: e.target.value.length >= 2,
        });
      case "mrp":
        return onInput({
          id,
          value: e.target.value,
          isValid: e.target.value.length >= 2,
        });
      default:
        return onInput({
          id,
          value: e.target.value,
          isValid: e.target.value.length >= 3,
        });
    }
  };

  return (
    <div className="form-input">
      <label htmlFor="name"> {inputName} </label>
      <input
        type={type}
        step={0.01}
        onChange={changeHandler}
        placeholder={placeholder}
        required
        name={inputName}
      />
    </div>
  );
};

export default Input;
