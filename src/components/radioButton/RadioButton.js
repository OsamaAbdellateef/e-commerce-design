import React from "react";
import "./radio-button.css";

const RadioButton = ({ iD, value, name }) => {
  return (
    <div className="radio-container">
      <input
        className="radio-input"
        type="radio"
        id={iD}
        name={name}
        value={value}
      />
      <label htmlFor={iD} className="radio-label">
        <span className="label-text">{value}</span>

        <span className="input-circle"></span>
      </label>
    </div>
  );
};

export default RadioButton;
