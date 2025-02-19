import React from "react";
import "./InfoTable.scss";
import bracket from "../../assets/bezimeni-6-kopiya-8982948.webp";

const chakraData = [
  { name: "7. Сахасрара", color: "#8B5CF6", physics: 15, energy: 2, emotions: 17 },
  { name: "6. Аджна", color: "#6366F1", physics: 10, energy: 11, emotions: 21 },
  { name: "5. Вишудха", color: "#06B6D4", physics: 22, energy: 9, emotions: 4 },
  { name: "4. Анахата", color: "#22C55E", physics: 11, energy: 16, emotions: 9 },
  { name: "3. Манипура", color: "#EAB308", physics: 7, energy: 7, emotions: 14 },
  { name: "2. Свадхистана", color: "#F97316", physics: 16, energy: 15, emotions: 4 },
  { name: "1. Муладхара", color: "#EF4444", physics: 9, energy: 8, emotions: 17 }
];

const total = chakraData.reduce(
  (acc, chakra) => ({
    physics: acc.physics + chakra.physics,
    energy: acc.energy + chakra.energy,
    emotions: acc.emotions + chakra.emotions
  }),
  { physics: 0, energy: 0, emotions: 0 }
);

const InfoTable = ({ numbers }) => {
  console.log('infotable',numbers);
  
  return (
    <div className="infoTable">
      {/* Таблица чакр */}
      <div className="chakraTable">
        <h2 className="chakra-title">Персональный расчет</h2>
        <p className="chakra-subtitle">Карта здоровья</p>

        <table>
          <thead>
            <tr>
              <th>НАЗВАНИЕ ЧАКРЫ</th>
              <th>ФИЗИКА</th>
              <th>ЭНЕРГИЯ</th>
              <th>ЭМОЦИИ</th>
            </tr>
          </thead>
          <tbody>
            {chakraData.slice().reverse().map((chakra, index) => { 
              const oKey = `o${7 - index}`; // Меняем порядок o7 → o1
              const pKey=`p${7-index}`;
              const qKey=`q${7-index}`;
              
              return (
                <tr key={index} style={{ backgroundColor: chakra.color }}>
                  <td>{chakra.name}</td>
                  <td>{numbers?.[oKey] ?? 0}</td> {/* Используем динамический ключ */}
                  <td>{numbers?.[pKey] ?? 0}</td>
                  <td>{numbers?.[qKey] ?? 0}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="totalRow">
              <td>ИТОГО</td>
              <td>{numbers?.o ?? 0}</td>
              <td>{numbers?.p ?? 0}</td>
              <td>{numbers?.q ?? 0}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Личный расчет */}
      <div className="personalInfo">
        <div className="personalInfoContent">
          <div className="personalInfoLeftTop">
            <span>Поиск себя:</span>
            <p>Соединение мужского и женского. Выстраивание взаимоотношений. Способности, навыки, умения.</p>
          </div>
          <div className="personalInfoLeftMiddle">
            <div className="elements">
              <div className="sky">
                Небо: <span>{numbers?.r ?? 0}</span>
              </div>
              <div className="earth">
                Земля: <span>{numbers?.s ?? 0}</span>
              </div>
            </div>
            <img src={bracket} alt="Bracket" />
            <div className="result">{numbers?.y ?? 0}</div>
          </div>
          <div className="personalInfoLeftBottom">
            <div className="spirit">
              Духовная гармония: <span>{numbers?.w ?? 0}</span>
            </div>
            <div className="question">Духовный зачет. Кто я для бога? Где божественное во мне?</div>
          </div>
        </div>

        <div className="horizontalLine"></div>

        <div className="personalInfoContent">
          <div className="personalInfoLeftTop">
            <span>Социализация:</span>
            <p>Социальная и родовая системы. Результаты и признание в социуме.</p>
          </div>
          <div className="personalInfoLeftMiddle">
            <div className="elements">
              <div className="sky">
                M: <span>{numbers?.t ?? 0}</span>
              </div>
              <div className="earth">
                Ж: <span>{numbers?.u ?? 0}</span>
              </div>
            </div>
            <img src={bracket} alt="Bracket" />
            <div className="result">{numbers?.v ?? 0}</div>
          </div>
          <div className="personalInfoLeftBottom">
            <div className="spirit">
              Планетарное: <span>{numbers?.x ?? 12}</span>
            </div>
            <div className="question">Планетарное предназначение человека</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTable;
