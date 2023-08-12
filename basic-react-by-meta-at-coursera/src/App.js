import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [themeMode, setThemeMode] = useState(false);
  const togglModeHandler = () => {
    setThemeMode(!themeMode);
  };
  const modeButtonCustomStyle = {
    position: "absolute",
    right: "5px",
    top: "10px",
  };
  return (
    <div className="app-main">
      <div>
        <button style={modeButtonCustomStyle} onClick={togglModeHandler}>
          {themeMode ? "Dark Mode is Of" : "Dark mode is On"}
        </button>
      </div>
      <Button />
    </div>
  );
}

export default App;
