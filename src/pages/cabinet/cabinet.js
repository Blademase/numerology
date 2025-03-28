import React, { useEffect } from "react";

import { Link, Outlet } from "react-router-dom";  // Используем Outlet для отображения контента
import { useDispatch, useSelector } from "react-redux"; // Импортируем хуки для работы с Redux
import { loginAction, logoutAction } from "../../store/store"; // Экшены для авторизации
import "./cabinet.scss";
import axios from "axios";

function Cabinet() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated); // Получаем состояние авторизации из Redux
  const accessToken = localStorage.getItem("accessToken"); // Получаем токен из Redux
  const BASE_URL = "https://matrixaaa.duckdns.org";

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logoutAction()); // Диспатчим действие логаута
  };

  const getHistory = async (accessToken) => {
    console.log(accessToken);

    try {
      if (accessToken) {
        const response = await axios.get(
          `${BASE_URL}/matrix_auth/history/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log(response);
      } else {
        console.log("Токен не найден");
      }
    } catch (error) {
      console.error("Ошибка при запросе:", error);
    }
  };
  useEffect(() => {
    // Вызов getHistory, когда компонент загружается
    if (accessToken) {
      getHistory(accessToken);
    } else {
      console.log("Токен не найден при загрузке страницы");
    }
  }, [accessToken]); // Зависимость от accessToken, вызовется только если токен изменится


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
      

          <button onClick={handleLogout}> <Link to="/">Выход</Link></button>
       

        </div>

       
       
   
      <div className="content">
        {/* Здесь контент меняется динамически в зависимости от маршрута */}
        <Outlet />
      </div>

    </div>
    </div>
  );
}

export default Cabinet;
