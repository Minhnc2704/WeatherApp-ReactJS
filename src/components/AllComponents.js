import React, { useState, useEffect } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import axios from "axios";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { iconURLFromCode } from "../services/weatherServices";

function AllComponents() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isDataValid, setIsDataValid] = useState(true);
  const [weatherIcon, setWeatherIcon] = useState("");

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ae7e2599789786dea3ba7053fe79a929&units=metric`;

  const isValidLocation = (input) => {
    return /^[a-zA-Z\s]+$/.test(input);
  };

  const searchLocation = (event) => {
    // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ae7e2599789786dea3ba7053fe79a929&units=metric`;
    if (event.key === "Enter") {
      if (!location.trim() || !isValidLocation(location)) {
        setIsDataValid(false);
      } else {
        setIsDataValid(true);

        axios
          .get(API_URL)
          .then((response) => {
            if (response.data.cod === 200) {
              setData(response.data);
              console.log(response.data);
            } else {
              setIsDataValid(false);
            }
          })
          .catch((error) => {
            console.error(error);
          });

        setLocation("");
      }
    }
  };

  const suggestion = (weatherDescription) => {
    if (weatherDescription.includes("Rain")) {
      return "You should bring an umbrella when leaving the house.";
    } else if (weatherDescription.includes("Clear")) {
      return "Enjoy a sunny day!";
    } else if (weatherDescription.includes("Clouds")) {
      return "It's a cloudy day!";
    } else {
      return "Please check the weather forecast for more information.";
    }
  };

  const formattedDate = getCurrentFormattedDate();
  const localTime = getLocalTime();

  function getCurrentFormattedDate() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const now = new Date();
    const formattedDate = now.toLocaleDateString(undefined, options);
    return formattedDate;
  }

  function getLocalTime() {
    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit" };
    const localTime = now.toLocaleTimeString(undefined, options);
    return localTime;
  }
  function getSunriseTime(timestamp) {
    if (!timestamp) {
      return "N/A";
    }

    const sunrise = new Date(timestamp);
    const hours = sunrise.getHours();
    const minutes = sunrise.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Chuyển đổi giờ sang định dạng 12 giờ
    const hours12 = hours % 12 || 12;

    // Format hours and minutes as a string
    const formattedTime = `${hours12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;

    return formattedTime;
  }

  function getSunsetTime(timestamp) {
    if (!timestamp) {
      return "N/A";
    }

    const sunset = new Date(timestamp);
    const hours = sunset.getHours();
    const minutes = sunset.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Chuyển đổi giờ sang định dạng 12 giờ
    const hours12 = hours % 12 || 12;

    // Format hours and minutes as a string
    const formattedTime = `${hours12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;

    return formattedTime;
  }

  useEffect(() => {
    if (data.weather && data.weather[0] && data.weather[0].icon) {
      setWeatherIcon(data.weather[0].icon); // Cập nhật weatherIcon khi nhận dữ liệu từ API
    }
  }, [data.weather]);

  return (
    <div>
      <div className="flex flex-row justify-center md-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
              setIsDataValid(true);
            }}
            onKeyPress={searchLocation}
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg"
            placeholder="Search location"
          />
          <UilSearch
            size={30}
            className="text-white cursor-pointer ease-out hover:scale-125"
          />
          <UilLocationPoint
            size={30}
            className="text-white cursor-pointer ease-out hover:scale-125"
          />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            name="metric"
            className="text-xl text-white font-light ease-out hover:scale-125"
          >
            °C
          </button>
          <p className="text-xl text-white mx-1">|</p>
          <button
            name="metric"
            className="text-xl text-white font-light ease-out hover:scale-125"
          >
            °F
          </button>
        </div>
      </div>

      {data.name && (
        <div>
          <div>
            <div className="flex items-center justify-center my-6">
              <p className="text-white text-xl font-extralight">
                {`${formattedDate} | ${localTime}`}
              </p>
            </div>
            <div className="flex items-center justify-center my-3">
              <p className="text-white text-3xl font-medium">
                {data.name ? `${data.name}` : ""}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
              <p className="capitalize">
                {data.weather && data.weather[0].description
                  ? `${data.weather[0].description}`
                  : ""}
              </p>
            </div>
            {/* <div className="flex flex-row items-center justify-between text-white py-3">
          <img src="" alt="" className="w-20" />
          <p className="text-5xl">{data.main && data.main.temp ? `${data.main.temp.toFixed()}°C` : ""}</p>
          <div className="flex flex-col space-y-2">
            <div className="flex font-light text-sm items-center justify-center">
              <UilTemperature size={18} className="mr-1" />
              Feels like :<span className="font-medium ml-1">{data.main && data.main.feels_like ? `${data.main.feels_like.toFixed()}°C` : ""}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilTear size={18} className="mr-1" />
              Humidity :<span className="font-medium ml-1">{data.main && data.main.humidity ? `${data.main.humidity} %` : ""}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilWind size={18} className="mr-1" />
              Wind speed :<span className="font-medium ml-1">{data.wind && data.wind.speed ? `${data.wind.speed.toFixed(1)} m/s` : ""}</span>
            </div>
          </div>
        </div> */}
            <div className="flex flex-row items-center justify-between text-white py-3">
              <img src={iconURLFromCode(weatherIcon)} alt="" className="w-20" />
              <p className="text-5xl">
                {data.main && data.main.temp
                  ? `${data.main.temp.toFixed()}°C`
                  : ""}
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-start">
                  <UilSun size={18} className="mr-1" />
                  <p className="font-light">
                    Rise:{" "}
                    <span className="font-medium ml-1">
                      {data.sys && data.sys.sunrise
                        ? getSunriseTime(data.sys.sunrise * 1000)
                        : "N/A"}
                    </span>
                  </p>
                </div>
                <div className="flex font-light text-sm items-center justify-start">
                  <UilSunset size={18} className="mr-1" />
                  <p className="font-light">
                    Set:{" "}
                    <span className="font-medium ml-1">
                      {data.sys && data.sys.sunset
                        ? getSunsetTime(data.sys.sunset * 1000)
                        : "N/A"}
                    </span>
                  </p>
                </div>
                <div className="flex font-light text-sm items-center justify-start">
                  <UilTemperature size={18} className="mr-1" />
                  <p className="font-light">
                    High:{" "}
                    <span className="font-medium ml-1">
                      {data.main && data.main.temp_max
                        ? data.main.temp_max.toFixed() + "°C"
                        : "N/A"}
                    </span>
                  </p>
                </div>
                <div className="flex font-light text-sm items-center justify-start">
                  <UilTemperature size={18} className="mr-1" />
                  <p className="font-light">
                    Low:{" "}
                    <span className="font-medium ml-1">
                      {data.main && data.main.temp_min
                        ? data.main.temp_min + "°C"
                        : "N/A"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
              <UilTemperature />
              <p className="font-light">
                Feels like :
                <span className="font-medium ml-1">
                  {data.main && data.main.feels_like
                    ? `${data.main.feels_like.toFixed()}°C`
                    : ""}
                </span>
              </p>
              <p className="font-light">|</p>
              <UilTear />
              <p className="font-light">
                Humidity :
                <span className="font-medium ml-1">
                  {data.main && data.main.humidity
                    ? `${data.main.humidity} %`
                    : ""}
                </span>
              </p>
              <p className="font-light">|</p>
              <UilWind />
              <p className="font-light">
                Wind speed :
                <span className="font-medium ml-1">
                  {data.wind && data.wind.speed
                    ? `${data.wind.speed.toFixed(1)} m/s`
                    : ""}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllComponents;
