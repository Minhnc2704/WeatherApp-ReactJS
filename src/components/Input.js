import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import Switcher from "./Switcher";

function Input({ query, setQuery, search, unit, setUnit }) {
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "°C" ? "°F" : "°C"));
  };

  return (
    <div>
      <div className="flex flex-row justify-center md-6">
        <div className="flex flex-row w-3/4 items-center justify-between space-x-4">
          <input
            type="text"
            className="text-xl font-light p-2 my-2 w-full shadow-xl focus:outline-none rounded-lg"
            placeholder="Enter city ..."
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
          {/* <UilSearch
            size={30}
            className="text-white cursor-pointer ease-out hover:scale-125"
          />
          <UilLocationPoint
            size={30}
            className="text-white cursor-pointer ease-out hover:scale-125"
          /> */}
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            name="metric"
            className={`text-xl text-white font-light ease-out hover:scale-125 ${
              unit === "°C" ? "font-semibold" : ""
            }`}
            onClick={() => setUnit("°C")}
          >
            °C
          </button>
          <p className="text-xl text-white mx-1">|</p>
          <button
            name="metric"
            className={`text-xl text-white font-light ease-out hover:scale-125 ${
              unit === "°F" ? "font-semibold" : ""
            }`}
            onClick={() => setUnit("°F")}
          >
            °F
          </button>
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
          <Switcher />
        </div>
      </div>
    </div>
  );
}

export default Input;
