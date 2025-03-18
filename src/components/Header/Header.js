import React, { useState, useEffect } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import SignIn from "../SignIn/SignIn";

const Header = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Проверяем наличие токенов при монтировании компонента
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsAuthenticated(!!accessToken); // true, если токен есть
  }, []);

  // Обработчик выхода
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
  };

  return (
    <div className="headerRlc">
      <nav className="header">
        <div className="menu">
          <div className={`menu-item ${activeItem === "/" ? "active" : ""}`}>
            <Link to="/" onClick={() => setActiveItem("/")}>МАТРИЦА СУДЬБЫ</Link>
          </div>
          <div className={`menu-item ${activeItem === "/finance" ? "active" : ""}`}>
            <Link to="/finance" onClick={() => setActiveItem("/finance")}>ФИНАНСЫ</Link>
          </div>
          <div className={`menu-item ${activeItem === "/compatibility" ? "active" : ""}`}>
            <Link to="/compatibility" onClick={() => setActiveItem("/compatibility")}>СОВМЕСТИМОСТЬ</Link>
          </div>
          <div className={`menu-item ${activeItem === "/child" ? "active" : ""}`}>
            <Link to="/child" onClick={() => setActiveItem("/child")}>ДЕТСКАЯ</Link>
          </div>
          <div className={`menu-item ${activeItem === "/forecast-2025" ? "active" : ""}`}>
            <Link to="/forecast-2025" onClick={() => setActiveItem("/forecast-2025")}>ПРОГНОЗ 2025</Link>
          </div>
          <div className={`menu-item ${activeItem === "/additional" ? "active" : ""}`}>
            <Link to="/additional" onClick={() => setActiveItem("/additional")}>ДОП РАСЧЕТЫ</Link>
          </div>
        </div>

        {/* Проверяем, вошел ли пользователь */}
        {isAuthenticated ? (
          <div className="logout">
          <button className="logout-button" onClick={handleLogout}>
            <FaUser className="icon" /> <div>ВЫЙТИ</div>
          </button>
          </div>
        ) : (
          <button className="login-button" onClick={() => setIsModalOpen(true)}>
            <FaSignInAlt className="icon" /> ВОЙТИ
          </button>
        )}
      </nav>

      <SignIn 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setIsAuthenticated(!!localStorage.getItem("accessToken")); // Обновляем состояние после входа
        }} 
      />
    </div>
  );
};

export default Header;
