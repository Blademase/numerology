import React from "react";
import "./DateDecodingCard.scss";

const DateDecodingCard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">ДЛЯ СЕБЯ</div>
        <div className="card-body">
          <h2>РАСШИФРОВКА ОДНОЙ ДАТЫ:</h2>
          <p className="date">05.03.2025</p>
          <ul className="features">
            <li>- Полная расшифровка даты</li>
            <li>- Доступ навсегда</li>
          </ul>
          <p className="price">690 ₽</p>
          <button className="buy-button">КУПИТЬ</button>
        </div>
      </div>
    </div>
  );
};

export default DateDecodingCard;