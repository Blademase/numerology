import React from "react";
import NumerologyChart from "../../components/NumerologyChart/NumerologyChart";
import InfoTable from "../../components/InfoTable/InfoTable";
import "./home.scss"
function Home() {
  return (
    <div className="HomeRlc">
    <div className="Home">
      <NumerologyChart />
      <InfoTable/>
    </div>
    </div>
  );
}

export default Home;
