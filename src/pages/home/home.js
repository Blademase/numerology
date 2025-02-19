import React from "react";
import NumerologyChart from "../../components/NumerologyChart/NumerologyChart";
import InfoTable from "../../components/InfoTable/InfoTable";
import Header from "../../components/Header/Header"
import Accordions from "../../components/Accordions/Accordions";
import "./home.scss"
function Home() {
  return (
    <div className="HomeRlc">
      <Header/>
    <div className="Home">
      <NumerologyChart />
      <InfoTable/>
    </div>
    <Accordions/>
    </div>
  );
}

export default Home;
