import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [searchIerm, setSerachTearm] = useState("");
  return (
    <div className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/list"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        List
      </NavLink>
      <input
        type="text"
        value={searchIerm}
        onChange={(e) => setSerachTearm(e.target.value)}
      />
      <NavLink
        to={"/search?query=" + searchIerm}
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Search
      </NavLink>
    </div>
  );
}

export default Header;
