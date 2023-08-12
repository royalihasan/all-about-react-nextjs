import React from "react";

function Header() {
  // styling react comp using style objec
  const nav = {
    display: "flex",
  };
  return (
    <div style={nav}>
      <nav>
        <ul style={{ display: "flex" }}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Support</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
