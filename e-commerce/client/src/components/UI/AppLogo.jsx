import React from "react";
import { Link } from "react-router-dom";

import "./AppLogo.css";

const AppLogo = () => {
  return (
    <Link to={"/"} className="logo-name">
      <div className="logo-type1">
        <h2>S</h2>
      </div>
      <div className="logo-type2">
        <h3>wami</h3>
        <h3>anitation</h3>
      </div>
    </Link>
  );
};

export default AppLogo;
