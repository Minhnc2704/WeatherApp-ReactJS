import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div
      className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-green-700 to-blue-700 h-fit 
    shadow-xl shadow-gray-400 rounded-lg"
    >
      <TopButtons />
      <Input />
      <TimeAndLocation />
      <Temperature />
      <Forecast tittle="hourly forecast"/>
      <Forecast tittle="daily forecast"/>
    </div>
  );
}

export default App;
