import React from "react";
import schema from "../../assets/shemaCompability.png"
import "./CompabilitySchema.scss"
import bracket from "../../assets/bezimeni-6-kopiya-8982948.webp"

function CompabilitySchema({numbers,personalInfo}) {
  return (
    <div className="CompabilitySchemaRlc">
        <div className="CompabilitySchema">
        <img src={schema}/>
        <div className="top">1</div>
        <div className="rightTop">2</div>
        <div className="right1">3</div>
        <div className="right2">3</div>
        <div className="rightBottom1">4</div>
        <div className="rightBottom2">4</div>
        <div className="rightBottom3">4</div>
        <div className="rightBottom4">4</div>
        <div className="bottom1">5</div>
        <div className="bottom2">5</div>
        <div className="bottom3">5</div>
        <div className="leftBottom">6</div>
        
        <div className="left">7</div>
        <div className="leftTop">8</div>
        <div className="center">9</div>
  
        </div>
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
                  {info.spiritLabel}<span>{numbers?.[info.spiritKey] ? `:${numbers[info.spiritKey]}` : ""}</span>
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
}

export default CompabilitySchema;
