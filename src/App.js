import "./App.css";
import Input from "./components/Input";
import Forecast from "./components/Forecast";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { AlertWithContent } from "./components/AlertWithContent";

function App() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false,
  });
  const [unit, setUnit] = useState("°C");
  const [forecastDays, setForecastDays] = useState(3);
  const [showAlert, setShowAlert] = useState(false);

  const toDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "Nocvember",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const search = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setQuery("");
      setWeather({ ...weather, loading: true });
      const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
      const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

      try {
        const response = await axios.get(url);

        if (response.data.condition) {
          // Nếu có dữ liệu, set error thành false
          setShowAlert(false);
          setWeather({ data: response.data, loading: false, error: false });
        } else {
          // Nếu không có dữ liệu, hiển thị thông báo "Data not found"
          setShowAlert(true);
          setWeather({ ...weather, data: {}, error: true });
          setQuery("");
        }
      } catch (error) {
        // Xử lý lỗi
        setShowAlert(true);
        setWeather({ ...weather, data: {}, error: true });
        setQuery("");
        console.log("error", error);
      }
    }
  };

  return (
    <div className="min-h-screen transition duration-200 dark:bg-gray-900 p-2">
      <div
        className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-green-700 to-blue-700 h-fit 
        shadow-xl shadow-gray-400 rounded-lg"
      >
        <Input
          query={query}
          setQuery={setQuery}
          search={search}
          unit={unit}
          setUnit={setUnit}
        />
        {weather && weather.data && weather.data.condition ? (
          <Forecast
            weather={weather}
            toDate={toDate}
            unit={unit}
            forecastDays={forecastDays}
            setForecastDays={setForecastDays}
          />
        ) : (
          showAlert && <AlertWithContent />
        )}
      </div>
    </div>
  );
}

export default App;
