  import React, { useEffect,useState } from "react";
  import axios from "axios";
  import "./ViewHistory.scss"
  function ViewHistory() {
      const BASE_URL = "https://matrixaaa.duckdns.org";
      const accessToken = localStorage.getItem("accessToken");
      const [data, setData] = useState();
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
    
            setData(response.data)
            console.log(data,response);
            
          } else {
            console.log("Токен не найден");
          }
        } catch (error) {
          console.error("Ошибка при запросе:", error);
        }
      };
  
    useEffect(() => {
      if (accessToken) {
        getHistory(accessToken);
      } else {
        console.log("Токен не найден при загрузке страницы");
      }
    }, [accessToken]); 
    const handleOpen = (item) => {
      console.log(item);
      
    };
  
    return (
      <div className="viewHistory">
  <table className="tariff-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Категория</th>
      <th>Дата</th>
      <th>Действие</th>
    </tr>
  </thead>
  <tbody>
    {data?.length > 0 ? (
      data.map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.category}</td>
          <td>{new Date(item.created_at).toLocaleDateString()}</td>
          <td>
            <button
              className="open-button"
              onClick={() => handleOpen(item)} // можешь определить свою функцию
            >
              ОТКРЫТЬ
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4">Загрузка данных...</td>
      </tr>
    )}
  </tbody>
</table>

      </div>
    );
  }

  export default ViewHistory;
