import React from "react";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import "./Header.scss"
const Header = () => {
  return (
    <nav className="header">
      <div className="menu">
      <div className="menu-item home">
      <FaHome className="icon" />
      </div>
        <div className="menu-item">
      
          <span>МАТРИЦА СУДЬБЫ</span>
        </div>
        <div className="menu-item">ФИНАНСЫ</div>
        <div className="menu-item">СОВМЕСТИМОСТЬ</div>
        <div className="menu-item">ДЕТСКАЯ</div>
        <div className="menu-item">ПРОГНОЗ 2025</div>
        <div className="menu-item">ДОП РАСЧЕТЫ</div>
      </div>
      <button className="login-button">
        <FaSignInAlt className="icon" /> ВОЙТИ
      </button>
    </nav>
  );
};

export default Header;