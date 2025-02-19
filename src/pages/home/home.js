import React, { useState } from "react";
import NumerologyChart from "../../components/NumerologyChart/NumerologyChart";
import InfoTable from "../../components/InfoTable/InfoTable";
import Header from "../../components/Header/Header"
import Accordions from "../../components/Accordions/Accordions";
import "./home.scss"
function Home() {
  const [numerologyData, setNumerologyData] = useState(null);

  return (
    <div className="HomeRlc">
      <Header/>
      <img style={{ height: 300 }}  src="https://static.wixstatic.com/media/20a8bc_a26ccd0842e9412babddf5f09a7b508f~mv2.webp/v1/crop/x_406,y_265,w_980,h_495,q_85,enc_avif,quality_auto/20a8bc_a26ccd0842e9412babddf5f09a7b508f~mv2.webp"/>
    <div className="Home">
    <NumerologyChart onDataFetched={setNumerologyData} />
    <InfoTable numbers={numerologyData}/>
    </div>
    <Accordions/>
    </div>
  );
}

export default Home;
