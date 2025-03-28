// src/store/store.js

import { createStore } from "redux";

// Начальное состояние
const initialState = {
  isAuthenticated: !!localStorage.getItem("accessToken"), // Проверка наличия токена
};

// Экшены
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Редьюсер
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

// Создание стора
const store = createStore(authReducer);

export default store;

// Экшены для логина и логаута
export const loginAction = () => ({ type: LOGIN });
export const logoutAction = () => ({ type: LOGOUT });
