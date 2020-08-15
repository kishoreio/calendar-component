import React, { useContext } from "react";
import { CalendarContext } from "../../App.js";
import Select from "../Select/Select";
import "./calendar-info.css";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = [];

// generating years for a given range
for (let i = 1900; i < 3000; i++) {
  years.push(i);
}

const CalendarInfo = () => {
  const {
    currentDate: { year, month, date },
  } = useContext(CalendarContext);
  return (
    <div className="info">
      <div>
        <Select options={months} type="month" defaultValue={months[month]} />
        <Select options={years} type="year" defaultValue={year} />
      </div>
      <div className="content">
        <h1>{date}</h1>
        <h4>{months[month]}</h4>
        <h5>{year}</h5>
      </div>
    </div>
  );
};

export default CalendarInfo;
