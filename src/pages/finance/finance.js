import React, { useState } from "react";
import NumerologyChart from "../../components/NumerologyChart/NumerologyChart";
import InfoTable from "../../components/InfoTable/InfoTable";
import Header from "../../components/Header/Header"
import Accordions from "../../components/Accordions/Accordions";
import "./finance.scss"
function Finance() {
  const [numerologyData, setNumerologyData] = useState(null);
  const newChakraData = [
    { name: "7. Сахасрара", color: "#8B5CF6" },
    { name: "6. Аджна", color: "#6366F1" },
    { name: "5. Вишудха", color: "#06B6D4" },
    { name: "4. Анахата", color: "#22C55E" },
    { name: "3. Манипура", color: "#EAB308" },
    { name: "2. Свадхистана", color: "#F97316" },
    { name: "1. Муладхара", color: "#EF4444" }
  ];
  
  const newNumbers = {
    o7: 10, p7: 5, q7: 12,
    o6: 8, p6: 7, q6: 10,
    o5: 14, p5: 9, q5: 6,
    o4: 11, p4: 13, q4: 15,
    o3: 6, p3: 8, q3: 7,
    o2: 10, p2: 12, q2: 14,
    o1: 9, p1: 11, q1: 13,
    o: 70, p: 65, q: 80,
    r: 5, s: 10, y: 15,
    t: 7, u: 12, v: 18,
    w: 22, x: 25
  };
  
  const newPersonalInfo = [
    {
      title: "Поиск себя:",
      description: "Соединение мужского и женского. Выстраивание взаимоотношений. Способности, навыки, умения.",
      skyLabel: "Небо",
      skyKey: "r",
      earthLabel: "Земля",
      earthKey: "s",
      resultKey: "y",
      spiritLabel: "Духовная гармония",
      spiritKey: "w",
      question: "Духовный зачет. Кто я для бога? Где божественное во мне?"
    },
    {
      title: "Социализация:",
      description: "Социальная и родовая системы. Результаты и признание в социуме.",
      skyLabel: "M",
      skyKey: "t",
      earthLabel: "Ж",
      earthKey: "u",
      resultKey: "v",
      spiritLabel: "Планетарное",
      spiritKey: "x",
      question: "Планетарное предназначение человека"
    }
  ];  
  return (
    <div className="FateRlc">
    <div className="fuck">
   <div  className="Fate">
      <div>
    <NumerologyChart onDataFetched={setNumerologyData} />
    </div>
    <div>
    <InfoTable 
        chakraData={newChakraData} 
        numbers1={newNumbers} 
        personalInfo={newPersonalInfo} 
        numbers={numerologyData}
       showChakraTable= {false} 
      />
    </div>
    <div>
      
    </div>
    </div>
    
    <Accordions/>
    </div>
    </div>
  );
}

export default Finance;
