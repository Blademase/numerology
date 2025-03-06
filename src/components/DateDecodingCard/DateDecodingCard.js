import React from "react";
import "./DateDecodingCard.scss";

const DateDecodingCard = ({ data }) => {
    console.log(data);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">{data?.name}</div>
        <div className="card-body">
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
          <button className="buy-button">КУПИТЬ</button>
        </div>
      </div>
    </div>
  );
};

export default DateDecodingCard;
