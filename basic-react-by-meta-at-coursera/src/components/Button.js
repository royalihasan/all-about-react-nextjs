import React, { useState } from "react";
import "../styles/Button.css";
function Button() {
  const [value, setValue] = useState(0);
  const setValueHandler = () => {
    setValue(value + 1);
  };
  return (
    <div className="btn-main">
      <div className="preview">
        <div className="preview-text">{value}</div>
      </div>
      <button className="btn" onClick={setValueHandler}>
        Click Me
      </button>
    </div>
  );
}

export default Button;
