import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./ViewHistory.scss";

function ViewHistory() {
  const { t } = useTranslation();
  const BASE_URL = "https://numerology-calculator.fi/api";
  const accessToken = localStorage.getItem("accessToken");
  const [data, setData] = useState();

  const getHistory = async (accessToken) => {
    try {
      if (accessToken) {
        const response = await axios.get(`${BASE_URL}/matrix_auth/history/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setData(response.data);
      } else {
        console.log("Access token not found");
      }
    } catch (error) {
      console.error("Error while fetching history:", error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getHistory(accessToken);
    } else {
      console.log("Access token not found on page load");
    }
  }, [accessToken]);

  const handleOpen = async (item) => {
    const categoryMap = {
      "Lasten matriisi laskin": "child",
      "Talouslaskin": "finance",
      "Kohtalomatriisi laskin": "matrix_fate",
    };

    const endpointMap = {
      child: "/child/child-report/",
      finance: "/finance/finance-report/",
      matrix_fate: "/matrix_fate/matrix-report/",
    };

    const categoryKey = categoryMap[item.category];
    const endpoint = endpointMap[categoryKey];

    if (!endpoint) {
      console.error("Неизвестная категория:", item.category);
      return;
    }

    const payload = {
      email: item.profile.email,
      input_data: {
        day: item.input_data.day,
        month: item.input_data.month,
        year: item.input_data.year,
      },
    };

    try {
      const response = await axios.post(`${BASE_URL}${endpoint}`, payload, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${categoryKey}_report.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при скачивании PDF:", error);
    }
  };

  return (
      <div className="viewHistory">
        <table className="tariff-table">
          <thead>
          <tr>
            <th>#</th>
            <th>{t("history.category")}</th>
            <th>{t("history.date")}</th>
            <th>{t("history.inputDate")}</th>
            <th>{t("history.action")}</th>

          </tr>
          </thead>
          <tbody>
          {data?.length > 0 ? (
              data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.category}</td>
                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                    <td>{item.input_data.day}.{item.input_data.month}.{item.input_data.year}</td>
                    <td>
                      <button className="open-button" onClick={() => handleOpen(item)}>
                        {t("history.open")}
                      </button>
                    </td>
                  </tr>
              ))
          ) : (
              <tr>
                <td colSpan="4">{t("history.loading")}</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
  );
}

export default ViewHistory;
