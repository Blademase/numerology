import React, { useState } from "react";
import axios from "axios";
import NumerologyChart from "../../components/NumerologyChart/NumerologyChart";
import InfoTable from "../../components/InfoTable/InfoTable";
import Accordions from "../../components/Accordions/Accordions";
import TrainingCard  from "../../components/TrainingCard/TrainingCard"
import { 
  newChakraData, 
  accordionConfig, 
  newPersonalInfo, 
  months, 
  years 
} from "./constants";
import { 
  calculateNumerology, 
  getQualitiesData, 
  getSoulWorkData, 
  getKarmaData,  
  getPastLife
} from "../../services/fateService.js";
import "./fate.scss";
import DateDecodingCard from "../../components/DateDecodingCard/DateDecodingCard.js"
function Fate() {
  const [numerologyData, setNumerologyData] = useState({});
  const [combinedData, setCombinedData] = useState({});
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(months[0]);
  const [day, setDay] = useState(1);
  const [error, setError] = useState(null);

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

      const qualitiesResponse = await getQualitiesData(numerologyResponse);
      updateCombinedData({ qualities: qualitiesResponse });

      const soulWorkResponse = await getSoulWorkData(numerologyResponse);
      updateCombinedData({ soulWork: soulWorkResponse });

      const karmaResponse = await getKarmaData(numerologyResponse);
      updateCombinedData({ karma: karmaResponse });

      const PastLifeRespone = await getPastLife(numerologyResponse);
      console.log(getPastLife(numerologyResponse))
      updateCombinedData({pastLife:PastLifeRespone})
    } catch (error) {
      console.error("Ошибка при выполнении расчёта:", error.message);
    }
  };

  return (
    <div className="FateRlc">
      <div className="Fate">
        <div className="FateFirstColumn">
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

            <button onClick={handleCalculate}>Рассчитать</button>
          </div>

          <NumerologyChart numbers={numerologyData} onCalculate={handleCalculate} />
        </div>

        <InfoTable chakraData={newChakraData} numbers={numerologyData} personalInfo={newPersonalInfo} />
    
      </div>
      <div className="accordions">
      <Accordions 
    data={combinedData} 
    config={accordionConfig} 
/></div>
      <div className="dateDecodingCard">
      {Array.from({ length: 3 }, (_, index) => (
  <DateDecodingCard key={index} />
))}
</div>
<div className="trainingCards">
      {Array.from({ length: 3 }, (_, index) => (
  <TrainingCard key={index} />
))}
</div>
     
    </div>
  );
}

export default Fate;
