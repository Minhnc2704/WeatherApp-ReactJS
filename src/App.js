import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import Temperature from "./components/Temperature";

function App() {
  return (
    <div
      className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit 
    shadow-xl shadow-gray-400"
    >
      <TopButtons />
      <Input />
      <TimeAndLocation />
      <Temperature />
    </div>
  );
}

export default App;
