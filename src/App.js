import React, { useState, useEffect } from "react";
import { months } from "./components/CalendarInfo/CalendarInfo";
import Calendar from "./components/Calendar/Calendar";
import CalendarInfo from "./components/CalendarInfo/CalendarInfo";
import "./app.css";

export const CalendarContext = React.createContext();

const App = () => {
  const [currentDate, setCurrentDate] = useState({
    date: 0,
    month: 0,
    year: 0,
  });

  useEffect(() => {
    // Initialize the application with today date when the component loads first time
    const todayDate = new Date();
    const date = todayDate.getDate();
    const month = todayDate.getDay();
    const year = todayDate.getFullYear();
    setCurrentDate({ date, month: month + 1, year });
  }, []);

  const changeCurrentDateHandler = (event, date) => {
    let value = +event.target.value || date;
    if (event.target.id === "month") {
      value = months.indexOf(event.target.value);
    } else if (event.target.id === "date" && !!value) {
      alert(`Selected Date: ${value}/${currentDate.month + 1}/${currentDate.year}`);
    } else if (value === "") {
      return;
    }
    setCurrentDate({ ...currentDate, [event.target.id]: value });
  };

  return (
    <CalendarContext.Provider value={{ currentDate, changeCurrentDateHandler }}>
      <div className="container">
        <CalendarInfo />
        <Calendar />
      </div>
    </CalendarContext.Provider>
  );
};

export default App;
