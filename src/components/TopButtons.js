import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      cityName: "London",
    },
    {
      id: 2,
      cityName: "Tokyo",
    },
    {
      id: 3,
      cityName: "New York",
    },
    {
      id: 4,
      cityName: "Ha Noi",
    },
    {
      id: 5,
      cityName: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium around ease-out hover:scale-125"
        >
          {city.cityName}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
