import React, { useContext } from "react";
import { CalendarContext } from "../../App.js";
import "./select.css";

const Select = ({ options, type, defaultValue }) => {
  const { changeCurrentDateHandler } = useContext(CalendarContext);
  return (
    <select id={type} className="select" value={defaultValue} onChange={changeCurrentDateHandler}>
      {options.map((option, key) => (
        <option key={key}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
