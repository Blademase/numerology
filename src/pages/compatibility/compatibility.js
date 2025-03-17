import React,{useState} from "react";
import NumerologyChart from "../../components/NumerologyChart/NumerologyChart";
import InfoTable from "../../components/InfoTable/InfoTable"
import { 
    newChakraData, 
    accordionConfig, 
    newPersonalInfo, 
    months, 
    years,
    defaultAccordionData
  } from "./constants";
  import "./compatibility.scss"
import CompabilitySchema from "../../components/CompabilitySchema/CompabilitySchema";
import Accordions from "../../components/Accordions/Accordions";
import DateDecodingCard from "../../components/DateDecodingCard/DateDecodingCard.js"
function Compatibility() {
    const [numerologyData, setNumerologyData] = useState({});
      const [year, setYear] = useState(2025);
      const [month, setMonth] = useState(months[0]);
      const [day, setDay] = useState(1);
     
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

 <div className="NumerologyChart"><NumerologyChart numbers={numerologyData} /></div>
 
 <InfoTable chakraData={newChakraData} numbers={numerologyData} personalInfo={newPersonalInfo} showChakraTable={false} />
 </div>
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

 <div className="NumerologyChart"><NumerologyChart numbers={numerologyData} /></div>
 
 <InfoTable chakraData={newChakraData} numbers={numerologyData} personalInfo={newPersonalInfo} showChakraTable={false} />
 </div>
 </div>
 <div className="compabilitySchema">
  <div className="compabilitySchemaAction">
    <p>Матрица совместимости</p>
  <button>Рассчитать совместимость</button>
  </div>
 <CompabilitySchema personalInfo={newPersonalInfo}/>
 </div>
 <Accordions
  data={defaultAccordionData}
    defaultAccordionData={defaultAccordionData}
/></div>
<DateDecodingCard  />
 </div>
    
  );
}

export default Compatibility;
