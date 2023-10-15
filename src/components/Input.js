import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import axios from "axios";
import TimeAndLocation from "./TimeAndLocation";

function Input() {
  // const [data, setData] = useState({});
  // const [location, setLocation] = useState("");
  // const [isDataValid, setIsDataValid] = useState(true);

  // const isValidLocation = (input) => {
  //   return /^[a-zA-Z\s]+$/.test(input);
  // };

  // const searchLocation = (event) => {
  //   const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ae7e2599789786dea3ba7053fe79a929&units=metric`;
  //   if (event.key === "Enter") {
  //     if (!location.trim() || !isValidLocation(location)) {
  //       setIsDataValid(false);
  //     } else {
  //       setIsDataValid(true);

  //       axios
  //         .get(API_URL)
  //         .then((response) => {
  //           if (response.data.cod === 200) {
  //             setData(response.data);
  //             console.log(response.data);
  //           } else {
  //             setIsDataValid(false);
  //           }
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });

  //       setLocation("");
  //     }
  //   }
  // };

  // const suggestion = (weatherDescription) => {
  //   if (weatherDescription.includes("Rain")) {
  //     return "You should bring an umbrella when leaving the house.";
  //   } else if (weatherDescription.includes("Clear")) {
  //     return "Enjoy a sunny day!";
  //   } else if (weatherDescription.includes("Clouds")) {
  //     return "It's a cloudy day!";
  //   } else {
  //     return "Please check the weather forecast for more information.";
  //   }
  // };

  return (
    <div>
      <div className="flex flex-row justify-center md-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            // value={location}
            // onChange={(event) => {
            //   setLocation(event.target.value);
            //   setIsDataValid(true);
            // }}
            // onKeyPress={searchLocation}
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
      {/* <div>
        <div className="flex items-center justify-center my-6">
          <p className="text-white text-xl font-extralight">
            Tuesday, 10 October 2023 | Local time: 11:00 AM
          </p>
        </div>
        <div className="flex items-center justify-center my-3">
          <p className="text-white text-3xl font-medium">Ha Noi, VN</p>
        </div>
      </div> */}
    </div>
  );
}

export default Input;
