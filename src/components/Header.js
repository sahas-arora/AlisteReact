import React from "react";
import { Link } from "react-router-dom";

let Header = () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <Link to="/UserDetails" className="left brand-logo">
          Aliste
        </Link>
      </div>
    </nav>
  );
};

export default Header;
