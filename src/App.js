import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";
import { useEffect, useState } from "react";
import getFormattedWeatherData from "./services/weatherServices";
import AllComponents from "./components/AllComponents";

function App() {
  // const [query, setQuery] = useState({ q: "hanoi" });
  // const [units, SetUnits] = useState("metric");
  // const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     await getFormattedWeatherData({ ...query, ...units }).then((data) => {
  //       setWeather(data);
  //     });
  //   };

  //   fetchWeather();
  // }, [query, units]);

  return (
    <div
      className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-green-700 to-blue-700 h-fit 
    shadow-xl shadow-gray-400 rounded-lg"
    >
      {/* <TopButtons /> */}
      {/* <Input />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <Temperature weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )} */}
      <AllComponents />
    </div>
  );
}

export default App;
