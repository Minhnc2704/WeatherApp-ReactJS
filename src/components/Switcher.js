import React, { useState } from "react";
import useDarkSide from "./UseDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
    </div>
  );
}

export default Switcher;
