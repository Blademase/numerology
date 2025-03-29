import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link, Outlet } from "react-router-dom";  // Используем Outlet для отображения контента
import { useDispatch, useSelector } from "react-redux"; // Импортируем хуки для работы с Redux
import { loginAction, logoutAction } from "../../store/store"; // Экшены для авторизации
import "./cabinet.scss";

function Cabinet() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logoutAction());
  };
  
  const handleConfirmLogout = () => {
    setShowConfirm(true);
  };
  
  const cancelLogout = () => {
    setShowConfirm(false);
  };
  const confirmLogout = () => {
    handleLogout();
    setShowConfirm(false);
    navigate("/"); // ← вот это перенаправляет на главную
  };
  
  return (
    <div className="cabinetRlc">
    <div className="cabinet">
    
        <div className="links">
          <Link to="/cabinet/mymatrices">Мои Матрицы</Link>
          <Link to="/cabinet/tariffs">Тарифы</Link>
          <Link to="/cabinet/viewhistory">История просмотров</Link>
          <Link to="/">Матрица судьбы</Link>
          <Link to="/">Финансы</Link>
          <Link to="/">Совместимость</Link>
          <Link to="/">Детская</Link>
      

          <button onClick={handleConfirmLogout}>Выход</button>
       

        </div>

       
       
   
      <div className="content">
        {/* Здесь контент меняется динамически в зависимости от маршрута */}
        <Outlet />
      </div>

    </div>
    {showConfirm && (
  <div className="modal-overlay">
    <div className="modal">
      <p>Вы действительно хотите выйти?</p>
      <div className="modal-buttons">
        <button onClick={confirmLogout}>Да</button>
        <button onClick={cancelLogout}>Нет</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Cabinet;
