import React, { useState, useEffect } from "react";
import NumerologyChart from "../../components/NumerologyChart/NumerologyChart";
import InfoTable from "../../components/InfoTable/InfoTable";
import Accordions from "../../components/Accordions/Accordions";
import TrainingCard from "../../components/TrainingCard/TrainingCard";
import axios from "axios";

import {
  newChakraData,
  newPersonalInfo,
  months,
  years,
  defaultAccordionData
} from "./constants";
import {
  calculateNumerology,
  getQualitiesData,
  getSoulWorkData,
  getKarmaData,
  getPastLife,
  getComfortPoint,
  getSelfRealization,
  getPointPersonalPower,
  getGenericPower,
  getParentChildKarma,
  getSpiritualKarma,
  getMatrixRelationship,
  getMatrixMoney,
  getSoulMission,
  getDiseasePredisposition,
  getHealthMap,
  getAncestralTask, getBreakdown
} from "../../services/fateService/fateService.js";
import "./fate.scss";
import DateDecodingCard from "../../components/DateDecodingCard/DateDecodingCard.js";
import { useTranslation } from "react-i18next";
import Breakdown from "../../components/Breakdown/Breakdown";

function Fate() {
  const [numerologyData, setNumerologyData] = useState({});
  const [combinedData, setCombinedData] = useState({});
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(months[0]);
  const [day, setDay] = useState(1);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const updateCombinedData = (newData) => {
    setCombinedData((prevData) => ({
      ...prevData,
      ...newData
    }));
  };

  const getDaysInMonth = (month, year) => {
    if (month.name === "Февраль") {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
    }
    return month.days;
  };

  const handleMonthChange = (e) => {
    const selectedMonth = months.find(m => m.name === e.target.value);
    setMonth(selectedMonth);

    if (day > getDaysInMonth(selectedMonth, year)) {
      setDay(1);
    }
  };

  const handleYearChange = (e) => {
    const selectedYear = Number(e.target.value);
    setYear(selectedYear);

    if (month.name === "Февраль" && day > getDaysInMonth(month, selectedYear)) {
      setDay(1);
    }
  };

  const handleCalculate = async () => {
    setCombinedData({});
    setNumerologyData({});
    try {
      const numerologyResponse = await calculateNumerology({ day, month: month.value, year });
      setNumerologyData(numerologyResponse);

      const requests = [
        getQualitiesData(numerologyResponse),
        getSoulWorkData(numerologyResponse),
        getKarmaData(numerologyResponse),
        getPastLife(numerologyResponse),
        getComfortPoint(numerologyResponse),
        getSelfRealization(numerologyResponse),
        getPointPersonalPower(numerologyResponse),
        getGenericPower(numerologyResponse),
        getParentChildKarma(numerologyResponse),
        getSpiritualKarma(numerologyResponse),
        getMatrixRelationship(numerologyResponse),
        getMatrixMoney(numerologyResponse),
        getSoulMission(numerologyResponse),
        getDiseasePredisposition(numerologyResponse),
        getHealthMap(numerologyResponse),
        getAncestralTask(numerologyResponse),

      ];

      const results = await Promise.allSettled(requests);

      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          const key = [
            "qualities", "soulWork", "karma", "pastLife", "comfortPoint",
            "selfRealization", "pointPersonalPower", "genericPower",
            "parentChildKarma", "spiritualKarma", "matrixRelationship",
            "matrixMoney", "soulMission", "diseasePredisposition", "healthMap"
          ][index];

          updateCombinedData({ [key]: result.value });
        } else {
          console.error(`Ошибка в запросе ${index + 1}:`, result.reason);
        }
      });

    } catch (error) {
      console.error("Ошибка при выполнении расчёта:", error.message);
    }
  };

  const handleDownload = async () => {
    document.body.style.cursor = "wait";
    const payload = {
      day,
      month: month.value,
      year
    };

    try {
      const response = await axios.post(
          "https://numerology-calculator.fi/api/matrix_fate/guest-matrix-pdf/",
          payload,
          {
            responseType: "blob"
          }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "guest_fate_report.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при скачивании PDF:", error);
    } finally {
      document.body.style.cursor = "auto"; // возвращаем обычный курсор
    }
  };

  // Вызов handleCalculate при первоначальной загрузке компонента
  useEffect(() => {
    handleCalculate(); // только для аккордеонов
  }, []);  // [] - чтобы сработало только при первом рендере

  return (
      <div className="FateRlc">
        <div className="Fate">
          <div className="FateFirstColumn">
            <div className="birthdate-container">
              <span className="bd-text">{t("financePage.enterBirthDate")}</span>

              <div className="select-container">
                <label className="select-label">{t("financePage.day")}</label>
                <select className="custom-select" value={day} onChange={(e) => setDay(Number(e.target.value))}>
                  {Array.from({ length: getDaysInMonth(month, year) }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="select-container">
                <label className="select-label">{t("financePage.month")}</label>
                <select className="custom-select" value={month.name} onChange={handleMonthChange}>
                  {months.map((m) => (
                      <option key={m.name} value={m.name}>{t(`months.${m.value}`)}</option>
                  ))}
                </select>
              </div>

              <div className="select-container">
                <label className="select-label">{t("financePage.year")}</label>
                <select className="custom-select" value={year} onChange={handleYearChange}>
                  {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <button onClick={handleCalculate}>{t("financePage.calculate")}</button>
            </div>

            <NumerologyChart numbers={numerologyData} onCalculate={handleCalculate} />
          </div>

          <InfoTable chakraData={newChakraData} numbers={numerologyData} personalInfo={newPersonalInfo} />

        </div>
        <button className='downloadBtn' onClick={handleDownload}>{t("financePage.download")}</button>
        <div className="accordions">
          <Accordions data={combinedData} programs={numerologyData.matched_programs} />
          <Breakdown/>
        </div>

        <DateDecodingCard />

        <div className="trainingCards">
          {Array.from({ length: 3 }, (_, index) => (
              <TrainingCard key={index} />
          ))}
        </div>
      </div>
  );
}

export default Fate;
