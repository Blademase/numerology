import React from "react";
import { useTranslation } from "react-i18next";
import "./TrainingCard.scss";
import img from "../../assets/addservices_1.png";

const TrainingCard = () => {
    const { t } = useTranslation();

    return (
        <div className="training-card">
            <div className="training-card-header">
                <img src={img} alt="Education Icon" className="icon" />
            </div>
            <div className="training-card-body">
                <h2>
                    <span className="bold">{t("training.learnAbout")}</span>{" "}
                    <span className="highlight">{t("training.title")}</span>
                </h2>
                <button className="training-button">{t("training.go")}</button>
            </div>
        </div>
    );
};

export default TrainingCard;
