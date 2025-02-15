import React, { useState } from "react";
import cals from "../../assets/shema.png";
import "./NumerologyChart.scss";

const months = [
  { name: "Январь", days: 31 },
  { name: "Февраль", days: 28 },
  { name: "Март", days: 31 },
  { name: "Апрель", days: 30 },
  { name: "Май", days: 31 },
  { name: "Июнь", days: 30 },
  { name: "Июль", days: 31 },
  { name: "Август", days: 31 },
  { name: "Сентябрь", days: 30 },
  { name: "Октябрь", days: 31 },
  { name: "Ноябрь", days: 30 },
  { name: "Декабрь", days: 31 }
];

const years = Array.from({ length: 100 }, (_, i) => 2025 - i);

const NumerologyChart = () => {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(months[0]);
  const [day, setDay] = useState(1);
  const [numbers, setNumbers] = useState(Array(24).fill(0));

  const getDaysInMonth = (month, year) => {
    if (month.name === "Февраль") {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
    }
    return month.days;
  };

  const handleMonthChange = (e) => {
    const selectedMonth = months.find(m => m.name === e.target.value);
    setMonth(selectedMonth);

    // Если выбранный день больше доступного количества дней в месяце, сбрасываем на 1
    if (day > getDaysInMonth(selectedMonth, year)) {
      setDay(1);
    }
  };

  const handleYearChange = (e) => {
    const selectedYear = Number(e.target.value);
    setYear(selectedYear);

    // Пересчитать дни в феврале, если год високосный
    if (month.name === "Февраль" && day > getDaysInMonth(month, selectedYear)) {
      setDay(1);
    }
  };

  const generateNumbers = (day, month, year) => {
    const monthIndex = months.indexOf(month) + 1;
    const dateString = `${year}${monthIndex.toString().padStart(2, "0")}${day.toString().padStart(2, "0")}`;
    
    const digits = dateString.split("").map(Number);
    const sumDigits = (num) => num.toString().split("").reduce((a, b) => a + Number(b), 0);

    let numbers = [];
    numbers.push(...digits);

    while (numbers.length < 24) {
      numbers.push(sumDigits(numbers.reduce((a, b) => a + b, 0)) % 100);
    }

    return numbers.slice(0, 24);
  };

  const handleCalculate = () => {
    setNumbers(generateNumbers(day, month, year));
  };

  return (
    <div className="numerlogyChart">
  <div className="birthdate-container">
  <span>Введите дату рождения</span>
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

  <button className="calculate-button" onClick={handleCalculate}>Рассчитать</button>
</div>
      <div className="shema">
        <img src={cals}  alt="Numerology Chart" />

        <div className="top1 circle large">{numbers[0]}</div>
        <div className="top2 circle medium">{numbers[1]}</div>
        <div className="top3 circle medium">{numbers[2]}</div>
        <div className="top4 circle medium">{numbers[3]}</div>

        <div className="topRight1 circle large">{numbers[4]}</div>
        <div className="topRight2 circle medium">{numbers[5]}</div>
        <div className="topRight3 circle medium">{numbers[6]}</div>

        <div className="right1 circle large">{numbers[7]}</div>
        <div className="right2 circle medium">{numbers[8]}</div>
        <div className="right3 circle medium">{numbers[9]}</div>
        <div className="right4 circle medium">{numbers[10]}</div>
        <div className="right5 circle medium">{numbers[11]}</div>

        <div className="bottomRight1 circle large">{numbers[12]}</div>
        <div className="bottomRight2 circle medium">{numbers[13]}</div>
        <div className="bottomRight3 circle medium">{numbers[14]}</div>
        <div className="bottomRight4 circle medium">{numbers[15]}</div>
        <div className="bottomRight5 circle medium">{numbers[16]}</div>
        <div className="bottomRight6 circle medium">{numbers[17]}</div>

        <div className="bottom1 circle large">{numbers[18]}</div>
        <div className="bottom2 circle medium">{numbers[19]}</div>
        <div className="bottom3 circle medium">{numbers[20]}</div>

        <div className="bottomLeft1 circle large">{numbers[21]}</div>
        <div className="bottomLeft2 circle medium">{numbers[22]}</div>
        <div className="bottomLeft3 circle medium">{numbers[23]}</div>

        <div className="left1 circle large">{numbers[0]}</div>
        <div className="left2 circle medium">{numbers[1]}</div>
        <div className="left3 circle medium">{numbers[2]}</div>
        <div className="left4 circle medium">{numbers[3]}</div>

        <div className="topLeft1 circle large">{numbers[4]}</div>
        <div className="topLeft2 circle medium">{numbers[5]}</div>
        <div className="topLeft3 circle medium">{numbers[6]}</div>
      </div>
    </div>
  );
};

export default NumerologyChart;
