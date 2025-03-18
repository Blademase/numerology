import React, { useState } from "react";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleMenuClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div className="headerRlc">
      <nav className="header">
        <div className="menu">
        
          <div className={`menu-item ${activeItem === "/" ? "active" : ""}`}>
            <Link to="/" onClick={() => handleMenuClick("/")}>МАТРИЦА СУДЬБЫ</Link>
          </div>
          <div className={`menu-item ${activeItem === "/finance" ? "active" : ""}`}>
            <Link to="/finance" onClick={() => handleMenuClick("/finance")}>ФИНАНСЫ</Link>
          </div>
          <div className={`menu-item ${activeItem === "/compatibility" ? "active" : ""}`}>
            <Link to="/compatibility" onClick={() => handleMenuClick("/compatibility")}>СОВМЕСТИМОСТЬ</Link>
          </div>
          <div className={`menu-item ${activeItem === "/child" ? "active" : ""}`}>
            <Link to="/child" onClick={() => handleMenuClick("/child")}>ДЕТСКАЯ</Link>
          </div>
          <div className={`menu-item ${activeItem === "/forecast-2025" ? "active" : ""}`}>
            <Link to="/forecast-2025" onClick={() => handleMenuClick("/forecast-2025")}>ПРОГНОЗ 2025</Link>
          </div>
          <div className={`menu-item ${activeItem === "/additional" ? "active" : ""}`}>
            <Link to="/additional" onClick={() => handleMenuClick("/additional")}>ДОП РАСЧЕТЫ</Link>
          </div>
        </div>
        <button className="login-button">
          <FaSignInAlt className="icon" /> ВОЙТИ
        </button>
      </nav>
    </div>
  );
};

export default Header;
