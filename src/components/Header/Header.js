import React from "react";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="headerRlc">
    <nav className="header">
      <div className="menu">
        <div className="menu-item home">
          <Link to="/">
            <FaHome className="icon" />
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/">МАТРИЦА СУДЬБЫ</Link>
        </div>
        <div className="menu-item">
          <Link to="/finance">ФИНАНСЫ</Link>
        </div>
        <div className="menu-item">
          <Link to="/compatibility">СОВМЕСТИМОСТЬ</Link>
        </div>
        <div className="menu-item">
          <Link to="/child">ДЕТСКАЯ</Link>
        </div>
        <div className="menu-item">
          <Link to="/forecast-2025">ПРОГНОЗ 2025</Link>
        </div>
        <div className="menu-item">
          <Link to="/additional-calculations">ДОП РАСЧЕТЫ</Link>
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
