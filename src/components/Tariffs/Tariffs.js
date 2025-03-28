  import DateDecodingCard from "../../components/DateDecodingCard/DateDecodingCard.js"
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import "./Tariffs.scss"
  function Tariffs() {
    const [tariffs, setTariffs] = useState([]);
        useEffect(() => {
         
          const getTariffs = async () => {
            try {
              const response = await axios.get("https://sharshenaliev.pythonanywhere.com/matrix_fate/tariffs/");
              setTariffs(response.data);
              console.log(response.data);
            } catch (error) {
              console.error("Ошибка при получении тарифов:", error);
            }
          };
      
          getTariffs();
        }, []);
        return (
        <div className="tariffsRlc">
    <div className="tariffs">
      {tariffs.length > 0 ? (
        tariffs.map((tariff, index) => (
          <div className="card" key={index}>
            <div className="card-header">{tariff.name}</div>
            <div className="card-body">
              <div dangerouslySetInnerHTML={{ __html: tariff.description }} />
              <button className="buy-button">КУПИТЬ</button>
            </div>
          </div>
        ))
      ) : (
        <p>Загрузка тарифов...</p>
      )}
    </div>
    </div>
    );
  }

  export default Tariffs;
