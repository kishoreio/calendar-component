import React, { useContext } from "react";
import { CalendarContext } from "../../App.js";
import "./calendar.css";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getCalendarResult = (year, month) => {
  let firstDay = new Date(year, month, 1).getDay();
  let totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  let result = [];
  let tempArr = [];
  let dayCount = 1;
  for (let i = 1; i <= 42; i++) {
    if (i < firstDay + 1) {
      tempArr.push("");
    } else if (dayCount <= totalDaysInMonth && tempArr.length !== 7) {
      tempArr.push(dayCount);
      dayCount++;
    } else if (tempArr.length === 7) {
      result.push(tempArr);
      tempArr = [];
      if (dayCount < totalDaysInMonth) {
        tempArr.push(dayCount);
      } else {
        tempArr.push("");
      }
      dayCount++;
    } else if (dayCount > totalDaysInMonth) {
      tempArr.push("");
      dayCount++;
    }
  }
  result.push(tempArr);
  return result;
};

const Calendar = () => {
  const {
    currentDate: { year, month, date },
    changeCurrentDateHandler,
  } = useContext(CalendarContext);
  const result = getCalendarResult(year, month);
  return (
    <div className="calendar">
      <table className="table">
        <thead>
          <tr>
            {days.map((day, key) => (
              <th key={key} className="head">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result.map((row, key) => (
            <tr key={key}>
              {row.map((dateValue, key) => (
                <td id="date" className="row" key={key} onClick={(event) => changeCurrentDateHandler(event, dateValue)}>
                  <span className={`${date === dateValue ? `selected` : null}`}>{dateValue}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
