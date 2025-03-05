import React from "react";
import "./InfoTable.scss";
import bracket from "../../assets/bezimeni-6-kopiya-8982948.webp";

const InfoTable = ({ chakraData, numbers, personalInfo, showChakraTable = true  }) => {
  
  return (
    <div className="infoTable">
      {/* Таблица чакр */}
      {showChakraTable && (
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
            {chakraData?.slice().reverse().map((chakra, index) => { 
              const oKey = `o${7 - index}`; 
              const pKey = `p${7 - index}`;
              const qKey = `q${7 - index}`;
              
              return (
                <tr key={index} style={{ backgroundColor: chakra.color }}>
                  <td>{chakra.name}</td>
                  <td>{numbers?.[oKey] ?? 0}</td> 
                  <td>{numbers?.[pKey] ?? 0}</td>
                  <td>{numbers?.[qKey] ?? 0}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="totalRow">
              <td>ИТОГО</td>
              <td>{numbers.o ?? 0}</td>
              <td>{numbers?.p ?? 0}</td>
              <td>{numbers?.q ?? 0}</td>
            </tr>
          </tfoot>
        </table>
      </div>
)}
      {/* Личный расчет */}
      <div className="personalInfo">
        {personalInfo?.map((info, index) => (
          <div key={index}>
            <div className="personalInfoContent">
              <div className="personalInfoLeftTop">
                <span>{info.title}</span>
                <p>{info.description}</p>
              </div>
              <div className="personalInfoLeftMiddle">
                <div className="elements">
                  <div className="sky">
                    {info.skyLabel}: <span>{numbers?.[info.skyKey] ?? 0}</span>
                  </div>
                  <div className="earth">
                    {info.earthLabel}: <span>{numbers?.[info.earthKey] ?? 0}</span>
                  </div>
                </div>
                <img src={bracket} alt="Bracket" />
                <div className="result">{numbers?.[info.resultKey] ?? 0}</div>
              </div>
              <div className="personalInfoLeftBottom">
                <div className="spirit">
                  {info.spiritLabel}: <span>{numbers?.[info.spiritKey] ?? 0}</span>
                </div>
                <div className="question">{info.question}</div>
              </div>
            </div>
            {index < personalInfo.length - 1 && <div className="horizontalLine"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoTable;
