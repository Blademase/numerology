import React, { useState } from "react";
import axios from "axios";
import NumerologyChart from "../../components/NumerologyChart/NumerologyChart";
import InfoTable from "../../components/InfoTable/InfoTable";
import { 
    newChakraData, 
    accordionConfig, 
    newPersonalInfo, 
    months, 
    years,
    defaultAccordionData
} from "./constants";
import "./compatibility.scss";
import CompabilitySchema from "../../components/CompabilitySchema/CompabilitySchema";
import Accordions from "../../components/Accordions/Accordions";
import DateDecodingCard from "../../components/DateDecodingCard/DateDecodingCard.js";
import { 
  calculateNumerology, 
  getChildBusiness, 
  getChildDestiny,
  getChildParentKarma,
  getChildPersonal,
  getChildPoint,
  getChildSelf,
  getTasksFromPast
} from "../../services/compability/compability.js";
function Compatibility() {
  const [numerologyData, setNumerologyData] = useState({});
  const [combinedData, setCombinedData] = useState({});
  // Первая дата
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(months[0]);
  const [day, setDay] = useState(1);
  
  // Вторая дата
  const [year1, setYear1] = useState(2025);
  const [month1, setMonth1] = useState(months[0]);
  const [day1, setDay1] = useState(1);
  
  // Функция для расчета количества дней в месяце
  const getDaysInMonth = (month, year) => {
    if (month.name === "Февраль") {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
    }
    return month.days;
  };
  const updateCombinedData = (newData) => {
    setCombinedData((prevData) => ({
      ...prevData,
      ...newData
    }));
  };
  // Обработчики изменения даты
  const handleMonthChange = (e) => {
    const selectedMonth = months.find(m => m.name === e.target.value);
    setMonth(selectedMonth);
    if (day > getDaysInMonth(selectedMonth, year)) {
      setDay(1);
    }
  };

  const handleMonthChange1 = (e) => {
    const selectedMonth = months.find(m => m.name === e.target.value);
    setMonth1(selectedMonth);
    if (day1 > getDaysInMonth(selectedMonth, year1)) {
      setDay1(1);
    }
  };

  const handleYearChange = (e) => {
    const selectedYear = Number(e.target.value);
    setYear(selectedYear);
    if (month.name === "Февраль" && day > getDaysInMonth(month, selectedYear)) {
      setDay(1);
    }
  };

  const handleYearChange1 = (e) => {
    const selectedYear = Number(e.target.value);
    setYear1(selectedYear);
    if (month1.name === "Февраль" && day1 > getDaysInMonth(month1, selectedYear)) {
      setDay1(1);
    }
  };
  const handleCalculate = async () => {
    setCombinedData({});
    setNumerologyData({});
    console.log("fuck");

    try {
        // Запрос совместимости и матрицы чисел
        const { compatibilityData, matrixData } = await calculateNumerology({
            day,
            month: month.value,  // Отправляем номер месяца
            year,
            day1,
            month1: month1.value, // Отправляем номер месяца
            year1
        });

        // Сохраняем результаты в стейты
        setNumerologyData(matrixData); // Сохраняем матрицу чисел

        const requests = [
            getChildBusiness(matrixData),   // Используем matrixData, т.к. в нем данные чисел
            getChildDestiny(matrixData),
            getChildParentKarma(matrixData),
            getChildPersonal(matrixData),
            getChildPoint(matrixData),
            getChildSelf(matrixData),
            getTasksFromPast(matrixData),
        ];

        const results = await Promise.allSettled(requests);

        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                const keys = [
                    "childBusiness",
                    "childDestiny",
                    "childParentKarma",
                    "childPersonal",
                    "childPoint",
                    "childSelf",
                    "tasksFromPast"
                ];
                updateCombinedData({ [keys[index]]: result.value });
            } else {
                console.error(`Ошибка в запросе ${index + 1}:`, result.reason);
            }
        });

    } catch (error) {
        console.error("Ошибка при выполнении расчёта:", error.message);
    }
};

  
  // Функция для запроса совместимости
  

  return (
    <div className="compatibilityRlc">
      <div className="compatibility">
        <div className="pairSchema">
          <div className="schema">
            <div className="birthdate-container">
              <span className="bd-text">Введите дату рождения</span>
              <div className="select-container">
                <label className="select-label">Число</label>
                <select className="custom-select" value={day} onChange={(e) => setDay(Number(e.target.value))}>
                  {Array.from({ length: getDaysInMonth(month, year) }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="select-container">
                <label className="select-label">Месяц</label>
                <select className="custom-select" value={month.name} onChange={handleMonthChange}>
                  {months.map((m) => (
                    <option key={m.name} value={m.name}>{m.name}</option>
                  ))}
                </select>
              </div>

              <div className="select-container">
                <label className="select-label">Год</label>
                <select className="custom-select" value={year} onChange={handleYearChange}>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="NumerologyChart">
              <NumerologyChart numbers={numerologyData} />
            </div>
            <InfoTable chakraData={newChakraData} numbers={numerologyData} personalInfo={newPersonalInfo} showChakraTable={false} />
          </div>

          <div className="schema">
            <div className="birthdate-container">
              <span className="bd-text">Введите дату рождения</span>
              <div className="select-container">
                <label className="select-label">Число</label>
                <select className="custom-select" value={day1} onChange={(e) => setDay1(Number(e.target.value))}>
                  {Array.from({ length: getDaysInMonth(month1, year1) }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="select-container">
                <label className="select-label">Месяц</label>
                <select className="custom-select" value={month1.name} onChange={handleMonthChange1}>
                  {months.map((m) => (
                    <option key={m.name} value={m.name}>{m.name}</option>
                  ))}
                </select>
              </div>

              <div className="select-container">
                <label className="select-label">Год</label>
                <select className="custom-select" value={year1} onChange={handleYearChange1}>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="NumerologyChart">
              <NumerologyChart numbers={numerologyData} />
            </div>
            <InfoTable chakraData={newChakraData} numbers={numerologyData} personalInfo={newPersonalInfo} showChakraTable={false} />
          </div>
        </div>

        <div className="compabilitySchema">
          <div className="compabilitySchemaAction">
            <p>Матрица совместимости</p>
            <button onClick={handleCalculate}>Рассчитать совместимость</button>
          </div>
          <CompabilitySchema personalInfo={newPersonalInfo} numbers={numerologyData}  />
        </div>
        
        <Accordions data={defaultAccordionData} defaultAccordionData={defaultAccordionData} />
      </div>

      <DateDecodingCard />
    </div>
  );
}

export default Compatibility;
