import React, { useState, useEffect } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Импортируем useDispatch и useSelector из Redux
import { loginAction, logoutAction } from "../../store/store"; // Экшены для авторизации
import "./Header.scss";
import SignIn from "../SignIn/SignIn";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch(); // Диспатчим экшены
  const isAuthenticated = useSelector((state) => state.isAuthenticated); // Селектор для авторизации из Redux
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(loginAction()); // Диспатчим логин, если токен есть
    } else {
      dispatch(logoutAction()); // Если токен отсутствует, диспатчим лог-аут
    }
  }, [dispatch]); // Этот useEffect теперь будет запускаться каждый раз при изменении dispatch



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
          <div className={`menu-item ${activeItem === "/prognoses" ? "active" : ""}`}>
            <Link to="/prognoses" onClick={() => setActiveItem("/prognoses")}>ПРОГНОЗ 2025</Link>
          </div>
          <div className={`menu-item ${activeItem === "/additional" ? "active" : ""}`}>
            <Link to="/additional" onClick={() => setActiveItem("/additional")}>ДОП РАСЧЕТЫ</Link>
          </div>
        </div>

        {isAuthenticated ? (
          <div className="logout">
            <button className="logout-button">
              <FaUser className="icon" /> <div><Link to="/cabinet">Личный кабинет</Link></div>
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
        }} 
      />
    </div>
  );
};

export default Header;
