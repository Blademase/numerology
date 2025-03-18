import React, { useState } from "react";
import axios from "axios";
import "./SignIn.scss";

const SignIn = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [login, setLogin] = useState("");
  const [code, setCode] = useState("");
  const BASE_URL="https://matrixaaa.duckdns.org";
  if (!isOpen) return null;

  const sendEmail = async (data) => {
    try {
      if (!data || !data.login) {
        console.error("Login is required");
        return;
      }
      
      const response = await axios.post(`${BASE_URL}/matrix_auth/send-code/`, {
        email: data.login,
      });
      setStep(2);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const sendToken = async (data) => {
    try {
      if (!data || !data.login || !data.code) {
        console.error("Login and code are required");
        return;
      }
  
      const response = await axios.post(`${BASE_URL}/matrix_auth/verify-code/`, {
        email: data.login,
        code: data.code
      });
  
      // Проверяем, есть ли токены в ответе
      if (response.data.access && response.data.refresh) {
        // Сохраняем токены в localStorage
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
  
        // Закрываем модальное окно
        onClose();
      } else {
        console.error("Токены не получены");
      }
    } catch (error) {
      console.log("Ошибка при отправке кода:", error);
    }
  };
  
  return (
    <div className="signInContentOverlay" onClick={onClose}>
      <div className="signInContent" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="signInTitle">Войти</div>
        {step === 1 ? (
          <>
            <input
              type="text"
              placeholder="Введите логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <button className="signInButton" onClick={() => sendEmail({ login })}>Дальше</button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={login}
              disabled
            />
            <input
              type="text"
              placeholder="Введите код"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          <div className="signInButtons">
    <button className="nextButton" onClick={() => sendToken({ login,code })}>Войти</button>
    <button className="backButton" onClick={() => setStep(1)}>Назад</button>
</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
