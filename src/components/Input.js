import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Input() {
  return (
    <div className="flex flex-row justify-center md-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
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
  );
}

export default Input;
