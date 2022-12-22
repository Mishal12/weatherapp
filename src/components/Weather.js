/* eslint-disable no-undef */
import React from "react";
import "./weather.css";
import { useState } from "react";
import { getWeather } from "../utils";

function Weather() {
  // State to store weather
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  // Get todays weather and store it to weather state
  //   const todayWeather = async () => {
  const search = async (evt) => {
    if (evt.key === "Enter") {
      //   const data = getWeather();
      //   setWeather(data);
      const data = await getWeather(query);
      setWeather({
        temps: Math.round(data.main.temp),
        cityname: data.name,
        countryname: data.sys.country,
      });
      setQuery("");

      console.log("insude", {
        temps: data.main.temp,
        cityname: data.name,
        countryname: data.sys.country,
      });
    }
  };
  //   console.log("sdasd", weather.temps);
  //   const todayWeather = async (query) => {
  //     const data = getWeather(query);
  //     console.log(data);
  //     setWeather({ temps: data.cod });
  //   };

  // Date builder
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jnauary",
    "February",
    "March",
    "April",
    '"May"',
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const today = weekday[date.getDay()];
  const todayDate = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return (
    <>
      <div className="weatherContainer">
        <input
          type="text"
          className="searchBar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyDown={search}
        ></input>
        {weather.cityname !== undefined ? (
          <h1 className="cityWeather">
            {weather.cityname}, {weather.countryname}
          </h1>
        ) : (
          <h1 className="cityWeather">Search your city</h1>
        )}

        <p className="dateWeather">
          {today}, {todayDate} {month} {year}
        </p>
        {weather.temps !== undefined ? (
          <div className="tempBox">
            <h2 className="tempText"> {weather.temps}°C</h2>
          </div>
        ) : (
          ""
        )}
        <p className="weatherType">Clouds</p>
      </div>
    </>
  );
}

export default Weather;
