import React from "react";
import schema from "../../assets/shemaCompability.png"
import "./CompabilitySchema.scss"
import bracket from "../../assets/bezimeni-6-kopiya-8982948.webp"

function CompabilitySchema({numbers = {},personalInfo}) {
  return (
    <div className="CompabilitySchemaRlc">
        <div className="CompabilitySchema">
        <img src={schema}/>
        <div className="top">{numbers?.b ?? 0}</div>
        <div className="rightTop">{numbers.g ?? 0}</div>
        <div className="right1">{numbers.c ?? 0}</div>
        <div className="right2">{numbers.c1 ?? 0}</div>
        <div className="rightBottom1">{numbers.h ?? 0}</div>
        <div className="rightBottom2">{numbers.h1 ?? 0}</div>
        <div className="rightBottom3">{numbers.h2 ?? 0}</div>
        <div className="rightBottom4">{numbers.j ?? 0}</div>
        <div className="bottom1">{numbers.d ?? 0}</div>
        <div className="bottom2">{numbers.d1 ?? 0}</div>
        <div className="bottom3">{numbers.d2 ?? 0}</div>
        <div className="leftBottom">{numbers.i ?? 0}</div>
      
        <div className="left">{numbers.a ?? 0}</div>
        <div className="leftTop">{numbers.f ?? 0}</div>
        <div className="center">{numbers.e ?? 0}</div>
  
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
