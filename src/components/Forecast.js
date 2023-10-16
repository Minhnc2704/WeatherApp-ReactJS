import React, { useEffect, useState } from "react";
import axios from "axios";
import { UilTemperature, UilTear, UilWind } from "@iconscout/react-unicons";

function getWeatherReminder(weather) {
  if (weather.includes("rain")) {
    return "Don't forget to bring an umbrella today!";
  } else if (weather.includes("sunny")) {
    return "Remember to apply sunscreen before going out!";
  } else if (weather.includes("fog")) {
    return "Drive carefully in foggy weather!";
  } else if (weather.includes("snow")) {
    return "Be cautious on slippery roads due to snow!";
  } else {
    return "Enjoy your day !!!";
  }
}

function Forecast({ weather, unit, forecastDays, setForecastDays }) {
  const { data } = weather;
  const [forecastData, setForecastData] = useState([]);
  const weatherReminder = getWeatherReminder(
    data.condition.description.toLowerCase()
  );

  useEffect(() => {
    const fetchForecastData = async () => {
      const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
      const url = `https://api.shecodes.io/weather/v1/forecast?query=${data.city}&key=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        setForecastData(response.data.daily);
      } catch (error) {
        console.log("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, [data.city]);

  const formatDay = (dateString) => {
    const options = { weekday: "short" };
    const date = new Date(dateString * 1000);
    return date.toLocaleDateString("en-US", options);
  };

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const currentDate = new Date().toLocaleDateString("en-US", options);
    return currentDate;
  };

  const getLocalTime = () => {
    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit" };
    const localTime = now.toLocaleTimeString(undefined, options);
    return localTime;
  };

  const renderTemperature = (temperature) => {
    if (unit === "°C") {
      return Math.round(temperature) + "°C";
    } else {
      return Math.round(temperature * 1.8 + 32) + "°F";
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-center my-6">
          <p className="text-white text-xl font-extralight">
            {getCurrentDate()} | {getLocalTime()}
          </p>
        </div>
        <div className="flex items-center justify-center my-3">
          <p className="text-white text-3xl font-medium">
            {data.city}, <span>{data.country}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center text-xl capitalize text-cyan-300">
        <p>{data.condition.description}</p>
      </div>
      <div className="flex flex-col items-center justify-evenly text-white">
        <img
          src={data.condition.icon_url}
          alt={data.condition.description}
          className="w-25"
        />
        <p className="text-5xl">
          {renderTemperature(data.temperature.current)}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilTemperature />
        <p className="font-light">
          Feels like :
          <span className="font-medium ml-1">
            {renderTemperature(data.temperature.feels_like.toFixed())}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilTear />
        <p className="font-light">
          Humidity :
          <span className="font-medium ml-1">
            {data.temperature.humidity} %
          </span>
        </p>
        <p className="font-light">|</p>
        <UilWind />
        <p className="font-light">
          Wind speed :
          <span className="font-medium ml-1">{data.wind.speed} m/s</span>
        </p>
      </div>
      <hr className="my-3" />

      {weatherReminder && (
        <p className="text-white text-center font-medium" id="reminder">
          Note for you: {weatherReminder}
        </p>
      )}

      <hr className="my-2" />

      <div className="flex items-center justify-between my-6">
        <p className="text-white font-medium uppercase">Daily Forecast</p>
        <div>
          <button
            className={`text-white font-light ease-out hover:scale-125 ${
              forecastDays === 3 ? "font-semibold" : ""
            }`}
            onClick={() => setForecastDays(3)}
          >
            3 days
          </button>
          <span className="text-white mx-1"> | </span>
          <button
            className={`text-white font-light ease-out hover:scale-125 ${
              forecastDays === 7 ? "font-semibold" : ""
            }`}
            onClick={() => setForecastDays(7)}
          >
            7 days
          </button>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {forecastData &&
          forecastData.slice(0, forecastDays).map((day) => (
            <div className="flex flex-col items-center" key={day.time}>
              <p className="font-light text-sm">{formatDay(day.time)}</p>
              {day.condition.icon_url && (
                <img
                  src={day.condition.icon_url}
                  alt={day.condition.description}
                />
              )}
              <p className="font-light">
                {renderTemperature(day.temperature.minimum)} |{" "}
                {renderTemperature(day.temperature.maximum)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Forecast;
